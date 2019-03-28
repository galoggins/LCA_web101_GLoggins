var gameMarker = "x";

function changeMarkerToX(){
    gameMarker= "x";
    //console.log("The X button was clicked");

}

function changeMarkerToO(){
    gameMarker="O";
    //console.log("The O button was clicked");

}

var box= document.getElementById(div id);
box.innerHTML=gameMarker;