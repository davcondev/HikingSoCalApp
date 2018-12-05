//google maps 
//32.7963° N, 117.2570° W

var varZoom = [
    11, 15
  ]; 
  var myLatLng = [
  //default 
  {lat: 32.712412, lng: -117.174346},
  //tp
   {lat:32.918201, lng: -117.252404},
  //cowles
  {lat: 32.814088, lng: -117.030496},
  //Iron
  {lat: 32.970712, lng: -116.957902}, 
  //stonewall
  {lat: 32.961705, lng:  -116.572137},
  //woodson
  {lat: 33.003247, lng:  -116.995924},
  ];

  var map;
$('#tp').click(function() {
    clickLocation(1);
  });
$('#cowles').click(function(){
    clickLocation(2);
  });
$('#iron').click(function(){
    clickLocation(3);
  });
$('#stonewall').click(function(){
    clickLocation(4);
  });
$('#woodson').click(function(){
    clickLocation(5);
  });

function clickLocation(index){
  var coord = myLatLng[index];

    var map = new google.maps.Map
    (document.getElementById('map'), {
    zoom: varZoom[1],
    center: coord,
    mapTypeId: 'hybrid'

  });
   var marker = new google.maps.Marker({
          position: coord,
          map: map
    });

    var getUri = `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lng}&APPID=eea34224d6ee2f5a43c60e66f2684753&units=imperial&cnt=1`;
  $.getJSON(getUri, displayWeather );
  
}
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: varZoom[0],
    center: myLatLng[0],
    mapTypeId: 'hybrid' 
  });
}
function displayWeather(data) {
  const results = data.list.map((list, index) => renderTemp(list));
  $('#weatherTemp').html(results);
  }

function renderTemp(result) {
  return `<div class="temp"> 
    <p>High for today: ${Math.round(result.main.temp_max)}&#8457;</p>
    <p>Humidity: ${result.main.humidity}&#37;</p>
    </div>
  `;
}