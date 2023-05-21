var map;
var whitby = new google.maps.LatLng(43.886483, -78.879618);
var infoWindow = new google.maps.InfoWindow();
var bounds = new google.maps.LatLngBounds();

(async function() {
    let pages = await axios.post('http://localhost:8000/api-map.php').then(res => res.data)
    pages = pages.filter(x => x.meta_position)

    var stylez = [{
            featureType: "all",
            elementType: "all",
            stylers: [],
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                invert_lightness: false,
            }, ],
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

    for (const page of pages) {
        const title = page.title_address
        const image = 'img/condo.png'
        let position = page.meta_position
        position = position.split(';')
        position = position.map(x => Number(x))
        const path = page.path

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(position[0], position[1]),
            map: map,
            title: title,
            clickable: true,
            icon: image,
        });

        content_html = "<div>test img</div><div style='font-size:12px'>test</div>";

        var infowindow = new google.maps.InfoWindow({
            content: content_html,
            map: map,
        });
        marker.addListener("mouseover", function() {
            infowindow.open(map, this);
        });
        marker.addListener("mouseout", function() {
            infowindow.close();
        });

        new google.maps.event.addListener(marker, "click", function() {
            window.open(path, "_parent");
        });
    }

})();