window.onload=function(){
    
    var map;

    function initialize(){
        var mapProp={
            center:new google.maps.LatLng(-23.550520,-46.633308),
            scrollWhell:false,
            zoom:12,
            mapTypeId: google.maps.MapTypeId.ROADMAP // or .TERRAIN for sattelite view
        }
        map=new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng={
          'lat':lat,'lng':long
        };

        var marker=new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon    
        });

        var infoWindow=new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset:new google.maps.Size(0,20)
        });


        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
    }
    initialize();
    
    var content='<p style="color:black;font-size:13px;padding:10px 0;">Content Custom</p>';
    addMarker(-23.550520,-46.633308,'',content);


}