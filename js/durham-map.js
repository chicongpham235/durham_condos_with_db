var map;
var whitby = new google.maps.LatLng(43.886483, -78.879618);
var infoWindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();

(function () {
  var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          invert_lightness: false,
        },
      ],
    },
  ];

  var mapOptions = {
    zoom: 11,
    tilt: 45,
    center: whitby,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.SATELLITE, "bestfromgoogle"],
    },
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var styledMapOptions = {
    name: "Durham Condos",
  };

  var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);

  map.mapTypes.set("bestfromgoogle", jayzMapType);
  map.setMapTypeId("bestfromgoogle");

  var image = "img/condo.png";
  //*Function to Create Marker*/

  //*Oshawa*/
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.925872, -78.855486),
    map: map,
    title: "700 and 900 Wilson Road",
    clickable: true,
    icon: "img/condo.png",
  });

  content_html = "<div>test img</div><div style='font-size:12px'>test</div>";
  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/700_wilson.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.900304, -78.862395),
    map: map,
    title: "50 Richmond Street and 55 William Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/50_richmond.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.899006, -78.863726),
    map: map,
    title: "44 Bond Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/44_bond.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.897583, -78.860679),
    map: map,
    title: "80 Athol Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/80_athol.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.907169, -78.901191),
    map: map,
    title: "600 Thornton Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/600_thornton.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.933351, -78.875184),
    map: map,
    title: "131 Taunton Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/131_taunton.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.933228, -78.8763),
    map: map,
    title: "43 and 53 Taunton Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/43_taunton.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.902021, -78.870721),
    map: map,
    title: "120 Elgin Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/120_elgin.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.906581, -78.867116),
    map: map,
    title: "337 Simcoe Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/337_simcoe.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.907169, -78.867438),
    map: map,
    title: "363 Simcoe Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/363_simcoe.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.888839, -78.863082),
    map: map,
    title: "454 Centre Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/454_centre.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.873024, -78.856215),
    map: map,
    title: "936 Glen Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("oshawa/condos/936_glen.html", "_parent");
  });

  //Whitby

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.876516, -78.943162),
    map: map,
    title: "210 Gilbert Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/210_gilbert.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.851494, -78.94188),
    map: map,
    title: "650-680 Gordon Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/gordon.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.953071, -78.966114),
    map: map,
    title: "52 Harvey Johnston Way",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/52_harveyjohnston", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.953169, -78.964928),
    map: map,
    title: "54 Harvey Johnston Way",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/54_harveyjohnston", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.899856, -78.938044),
    map: map,
    title: "711 Rossland Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/711_rossland.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.900521, -78.938634),
    map: map,
    title: "712 Rossland Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/712_rossland.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.860772, -78.938549),
    map: map,
    title: "360 Watson Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/360_watson.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.859798, -78.937862),
    map: map,
    title: "340 Watson Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/340_watson.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.861468, -78.937105),
    map: map,
    title: "1600 Charles Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/1600_charles.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.903829, -78.948333),
    map: map,
    title: "Petra Way",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("whitby/condos/petraway.html", "_parent");
  });

  //Clarington

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.904231, -78.706162),
    map: map,
    title: "Aspen Springs",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/aspensprings.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.905561, -78.704617),
    map: map,
    title: "80-84 Aspen Springs",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/80_aspen.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.918003, -78.580318),
    map: map,
    title: "21 Brookhouse Drive",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/21_brookhouse.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.907131, -78.706162),
    map: map,
    title: "61 Clarington Blvd",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/61_clarington.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.890143, -78.80483),
    map: map,
    title: "1430 Gord Vinson Ave",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/1430_gordvinson.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.931147, -78.69016),
    map: map,
    title: "290 Liberty Street N",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/290_liberty.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.897313, -78.580602),
    map: map,
    title: "70 and 80 Shipway Ave",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/70_shipway.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.89596, -78.58381),
    map: map,
    title: "305-365 Lakebreeze Ave",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/345_lakebreeze.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.913986, -78.687934),
    map: map,
    title: "95 Wellington Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/95_wellington.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.911745, -78.691174),
    map: map,
    title: "144 Queen Street",
    clickable: true,
    icon: image,
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/144_queen.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.897104, -78.583124),
    map: map,
    title: "75 Shipway Avenue",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/75_shipway.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.901611, -78.709142),
    map: map,
    title: "Sidney Lane",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/1_sidney.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.89611, -78.586037),
    map: map,
    title: "375-395 Lakebreeze Drive",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/375_lakebreeze.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.913507, -78.788302),
    map: map,
    title: "Nash Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("clarington/condos/nashroad.html", "_parent");
  });

  //Ajax

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.84143, -79.016933),
    map: map,
    title: "44 and 66 Falby Court",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("ajax/condos/44_falby.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.822259, -79.013511),
    map: map,
    title: "25, 45 and 70 Cumberland",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("ajax/condos/25_cumberland.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.824032, -79.035258),
    map: map,
    title: "Lake Driveway",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("ajax/condos/189_lakedriveway.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.857925, -79.042726),
    map: map,
    title: "2 Westney Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("ajax/condos/2_westney.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.85056, -79.054753),
    map: map,
    title: "92 Church Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("ajax/condos/92_church.html", "_parent");
  });

  //Pickering

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.841584, -79.072809),
    map: map,
    title: "1655 and 1665 Pickering Parkway",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1655_pickering.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.837282, -79.078066),
    map: map,
    title: "1530 and 1540 Pickering Parkway",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1530_pickering.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.838489, -79.078538),
    map: map,
    title: "1525 Diefenbaker Court",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1525_diefenbaker.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.83948, -79.082422),
    map: map,
    title: "1880 and 1890 Valley Farm Road",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1880_valleyfarm.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.839371, -79.084654),
    map: map,
    title: "1000 and 1200 The Esplanade",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/theesplanade.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.827252, -79.090812),
    map: map,
    title: "1235 Bayly Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1235_bayly.html", "_parent");
  });

  var image = "img/condo.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(43.825765, -79.090769),
    map: map,
    title: "1210 Radom Street",
    clickable: true,
    icon: "img/condo.png",
  });

  var infowindow = new google.maps.InfoWindow({
    content: content_html,
    map: map,
  });
  marker.addListener("mouseover", function () {
    infowindow.open(map, this);
  });
  marker.addListener("mouseout", function () {
    infowindow.close();
  });

  new google.maps.event.addListener(marker, "click", function () {
    window.open("pickering/condos/1210_radom.html", "_parent");
  });
})();
