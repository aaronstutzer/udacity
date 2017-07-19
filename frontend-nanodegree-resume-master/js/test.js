

var awesomeThoughts = "I am Aaron and I am AWESOME"
console.log(awesomeThoughts)

var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
$("#main").append(funThoughts)

var name = "Aaron Stutzer";
var role = "System Engineer";

var formattedName = HTMLheaderName.replace( "%data%", name);
var formattedRole = HTMLheaderRole.replace( "%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";

var udacityizer = function(s) {
  s = "U" + s.slice(2);

    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var sampleArray = [0,0,7,3];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!
    //var newElement = sampleArray[2] + 1;
    newElement = _array.pop();
    newElement += 1;
    _array.push(newElement);
    newArray = _array;

    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(' ');

    //console.log(names[0]);
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    //console.log(lastName);

    finalName = names.join(" ")


    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvZsMATTMtQbPI5rtRg-5YMeo-DxDouoo&callback=initMap" type="text/javascript"></script>
