function changeImage(){
    var pic =document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("on")
        pic.src="bulb off.jpg";
    }
    else{
        console.log("off");
        pic.src = "bulb on.jpg" ;
    }
}