//scripts.js
window.onload = function(){
    document.body.setAttribute('class', 'bd-md-2');
    document.head.parentElement.id = this.id;
};

navigator.getBattery().then(function(batt){

    var h3 = document.createElement('h3');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var h6 = document.createElement('h6');

    var heading_batt = document.createElement('h2');
    heading_batt.appendChild(document.createTextNode('Battery'));
    heading_batt.setAttribute('class', 'xl');
    document.body.appendChild(heading_batt);

    h3.appendChild(document.createTextNode('Current remaining battery: ' + batt.level));
    document.body.appendChild(h3);
    if(batt.charging){
        h4.appendChild(document.createTextNode('Battery is charging' + batt.charging));
    } else {
        h4.append('Not charging');
    }
    document.body.appendChild(h4);

    h5.appendChild(document.createTextNode(batt.chargingTime + ' time remaining until fully charged'));

    h6.appendChild(document.createTextNode(batt.dischargingTime + ' seconds remaining until none left'));

    document.body.appendChild(h5);
    document.body.appendChild(h6);

    batt.onlevelchange = function(){
        alert('Battery level has been modified ' + batt.level);
    };

    batt.ondischargingtime = function(){
        alert('Battery will be discharged: ' + batt.discharingtime);
    };

});

    navigator.geolocation.getCurrentPosition(function(position) {
        //document.body.append('Location');
        var heading_loc = document.createElement('h2');
        heading_loc.appendChild(document.createTextNode('Location'));
        heading_loc.setAttribute('class', 'xl');
        document.body.appendChild(heading_loc);

        var h5 = document.createElement('h5');
        var h5_2 = document.createElement('h5');
        alert(position.coords.latitude, position.coords.longitude);
        h5.appendChild(document.createTextNode('Current position, latitude: ' + position.coords.latitude));
        h5_2.append(document.createTextNode('Current position, longitude: '+ position.coords.longitude));
        document.body.appendChild(h5);
        document.body.appendChild(h5_2);

    //not working navigator.getUserMedia({audio: true}, function(ehh){alert(ehh);}, function(ehh){alert(ehh);})

    document.body.append('User Agent: ' + window.navigator.userAgent.substring(0,7));
    var heading = document.createElement('h2');
    heading.appendChild(document.createTextNode('Network'));
    heading.setAttribute('class', 'xl');
    document.body.appendChild(heading);
    var h4 = document.createElement('h4');
    var h4_ = document.createElement('h4');
    h4.appendChild(document.createTextNode('Network type: ' + navigator.connection.effectiveType)); 
    h4_.appendChild(document.createTextNode('Network downlink: ' + navigator.connection.downlink));
    document.body.appendChild(h4);
    document.body.appendChild(h4_);

    if(navigator.userAgent.includes('Mozilla'))alert(navigator.userAgent);

}, function(e){alert(e.error, e.message, e.code);}, {enableHighAccuracy: true, timeout: 100, maximumAge: 10000});

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'c:/users/nigel/phpserver/rt/eijch.com/styles/style.css');
document.head.appendChild(link);
document.body.toggleAttribute('class');