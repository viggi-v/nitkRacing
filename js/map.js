
/*
 * The Coordinates of NITK <3 :) 
 */
var myCenter=new google.maps.LatLng(13.0119292,74.7951849);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:12,
  disableDefaultUI:true,
  mapTypeId:google.maps.MapTypeId.HYBRID
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);