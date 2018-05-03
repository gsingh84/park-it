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
        node.setAttribute('href', 'styles/park-it-ios.css');

        window.StatusBar.overlaysWebview(false);
        window.StatusBar.styleDefault();
    } else {

        node.setAttribute('href', 'styles/park-it-android.css');
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
        alert("Set Parking Location");
    });

    $('#retrieve').on('click', function(){
       alert("Get parking location");
    });

    $('#gotIt').on('click', function() {
       $('#instructions').hide();
    });
});

