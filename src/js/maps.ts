export function maps(googlemaps) {
    //Carga de mapas
    function initMap(id_map, locations, center, google) {
        var infowindow = new google.maps.InfoWindow({});
        var marker, count;
        var map = new google.maps.Map(document.getElementById(id_map), {zoom: 6, center: center, styles : [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"},{"saturation":"-3"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#f39247"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#f39247"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ff6f00"},{"saturation":"100"},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#f39247"},{"saturation":"0"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#008eff"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#f3dbc8"},{"saturation":"0"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]});
        for (count = 0; count < locations.length; count++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[count].lat, locations[count].lng),
                map: map,
                title: locations[count].nombre
            });
            google.maps.event.addListener(marker, 'click', (function (marker, count) {
                return function () {
                    infowindow.setContent('<style>p{margin-bottom: 4px;}.gm-style-iw.gm-style-iw-c {border-radius: 1px;}h3{color:#f6b41c;}</style><p><img src="'+locations[count].img+'" style="max-width:100%;width:100%;object-fit:cover;height:100%;"/></p><h3><strong>'+locations[count].nombre+'</strong></h3><p>'+locations[count].direccion+'</p><p>'+locations[count].telefono+'</p><p>'+locations[count].email+'</p>');
                    infowindow.open(map, marker);
                }
            })(marker, count));
            google.maps.event.addListener(marker,'click',function() {
                map.setZoom(14);
                map.setCenter(marker.getPosition());
            });
        }
        
    }
    $( document ).ready(function() {
        if($('#maphotels') && $('#maphotels').length >0){
            var locations = [];

            $('.coordenadasMapa').each(function(index, element){
                locations.push({
                    nombre:$(this).attr('nameHotel'), 
                    direccion:$(this).attr('direccionHotel'), 
                    telefono:$(this).attr('telefonoHotel'), 
                    email:$(this).attr('emailHotel'), 
                    img:$(this).attr('imagenHotelSrc'),
                    lat:parseFloat($(this).attr('lat')),
                    lng:parseFloat($(this).attr('lng'))}
                );
            });
            
            var center = {lat: parseFloat($('.centermap').attr('lat')), lng: parseFloat($('.centermap').attr('lng'))};
            console.log(center);
            console.log(locations);
            googlemaps.load(function(google) {
                initMap('maphotels',locations, center, google);
            });    
        }
        if($('#verMapa') && $('#verMapa').length > 0){
            $('#verMapa').on('click', function(){
                $('.wrapper--mapa').toggleClass('show');
            });
        }
    });
    
}