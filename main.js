var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction", "Blackstreet", "BBMak"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash", "Cabbage"];

// The number of loops to perform (what if the array changes?)
if (bands.length >= vegetables.length) {
	var loopCount = bands.length;
} else {
	var loopCount = vegetables.length;
}

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables")

// Start looping
for (var i = 0; i < loopCount; i += 1) {   

  // Check if i has exceeded the length of the band array - if not insert the band into a string variable
  var bandDomString = "";

  if (i > bands.length) {
  	bandDomString += "";
  } else {
  	bandDomString += '<h2>'+bands[i]+'</h2>';
  }

  //update the band div 
  bandElement.innerHTML += bandDomString;

  
  // Add the veggie names into the correct <div>
  var veggieDomString = "";

  if (vegetables[i] === undefined) { //couldn't get the same formula used with bands to work???
  	veggieDomString += "";
  } else {
  	veggieDomString += '<h2>'+vegetables[i]+'</h2>';
  }

  veggieElement.innerHTML += veggieDomString;
  
}

