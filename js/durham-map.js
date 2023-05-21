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

        const bg_img_url = page.bg_img_url

        content_html = `<img src="../img/condo/80aspen/1.jpg"
                width = 250
                style = "width: 250px; height: 150px;
                         border-top-left-radius: 8px;
                         border-top-right-radius: 8px;
                         margin-bottom: 4px">` +
            "<div class='px-1' style='font-size:12px; max-width: 250px; word-wrap: break-word;'>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</div>" +
            "<div style='height:12px'></div>";


        infoBubble = new InfoBubble({
            map: map,
            content: content_html,
            position: new google.maps.LatLng(-35, 151),
            shadowStyle: 1,
            backgroundColor: '#fff',
            borderRadius: 8,
            arrowSize: 0,
            borderWidth: 0,
            borderColor: '#2c2c2c',
            disableAutoPan: true,
            hideCloseButton: true,
            arrowPosition: 30,
            arrowStyle: 1,
            minWidth: 250,
            maxWidth: 250,
            minHeight: 175,
            padding: 0,
            zIndex: 1
        });

        marker.addListener("mouseover", function() {
            infoBubble.open(map, this);
        });

        // marker.addListener("mouseover", function() {
        //     infoBubble.close();
        // });
        console.log($(marker));

        new google.maps.event.addListener(marker, "click", function() {
            window.open(path, "_parent");
        });
        // console.log(page);
    }

})();