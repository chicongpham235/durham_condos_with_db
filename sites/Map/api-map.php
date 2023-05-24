<?php

include 'Database/Query/SqlClauses.php';
include 'Database/Query/BaseSqlBuilder.php';
include 'Database/Query/MySqlBuilder.php';
include 'Database/MySqlConnection.php';

use Database\MySqlConnection;
use Database\Query\MySqlBuilder;

$page = $_GET["page"] ?? null;
$perpage = $_GET["perpage"] ?? 10;
$search = $_GET["search"] ?? null;
$sort = $_GET["sort"] ?? null;
$sort_desc = (bool)($_GET["sort_desc"] ?? false);
// filter
$city = $_GET["city"] ?? null;
$price = $_GET["price"] ?? null;
// echo 'Perpage ' . htmlspecialchars($perpage)  . '<br />';
$env = parse_ini_file('.env');
$connection = new MySqlConnection([
  'dbname' => $env["DB_DATABASE"],
  'hostname' => $env["DB_HOST"],
  'username' => $env["DB_USERNAME"],
  'password' => $env["DB_PASSWORD"],
  'port' => $env["DB_PORT"],
]);

// create a new mysql instance.
$builder = new MySqlBuilder($connection);
$builder = $builder->select()
  ->from('pages');
if (isset($page)) {
  $builder->paginate($page, $perpage ?? 10);
}
if (isset($search)) {
  $builder->where(function ($builder) use ($search) {
    $builder->where('meta_placename', 'like', "'%$search%'");
    $builder->orWhere('title', 'like', "'%$search%'");
    $builder->orWhere('title_address', 'like', "'%$search%'");
  });
}
if (isset($sort)) {
  $builder->orderBy($sort, $sort_desc ?? false);
}
//filter
if (!empty($city)) {
  $builder->where('path', 'like', "'$city/%'");
}
if (!empty($price)) {
  if ($price == '400') $builder->where('fee_from', '<', 400);
  elseif ($price == '500') $builder->where('fee_from', '<', 500)->where('fee_from', '>=', 400);
  elseif ($price == '600') $builder->where('fee_from', '<', 600)->where('fee_from', '>=', 500);
  elseif ($price == '600+') $builder->where('fee_from', '>=', 600);
}
$data = $builder->all();
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
