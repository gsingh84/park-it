$(init);

var storage;

function init() {
    document.addEventListener("deviceready", onDivceReady, false);
    storage = window.localStorage;
}


function onDeviceReady() {

    //load the correct stylesheet
    var node = document.createElement("link");
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');

    if(cordova.platformid == 'ios') {
        node.setAttribute('href', 'css/park-it-ios.css');

        window.StatusBar.overlaysWebview(false);
        window.StatusBar.styleDefault();
    } else {

        node.setAttribute('href', 'css/park-it-android.css');
        window.StatusBar.backgroundColorByHexString("#1565C0");
    }

    $('head').appendChild(node);
}

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

$(document).ready(function(){
    $('#park').on('click', function() {
        // alert("Set Parking Location");
        setParkingLocation();
    });

    $('#retrieve').on('click', function(){
       alert("Get parking location");
    });

    $('#gotIt').on('click', function() {
       $('#instructions').hide();
    });
});

function setParkingLocation() {
    navigator.geolocation.getCurrentPosition(setParkingLocationSuccess,
        setParkingLocationError, { enableHighAccuracy:true });
}

var latitude;
var longitude;
function setParkingLocationSuccess() {
    latitude = position.coords.latitude;
    storage.setItem("parkedLatitude", latitude);

    longitude = position.coords.longitude;
    storage.setItem("ParkedLongitude", longitude);

    navigator.notification.alert("Parking location saved. (Lat: " + latitude + ", Long: " +
        longitude + ")");

    showParkingLocation();
}

function setParkingLocationError() {
    navigator.notification.alert("Error code: " + error.code
        + "\nError Message: " + error.message);
}

function showParkingLocation() {
    navigator.notification.alert("You are parked at Lat: "
        + storage.getItem("parkedLatitude")
        + ", Long: " + storage.getItem("ParkedLongitude"))

    $("#directions").hide();
    $('#instructions').hide();
}
