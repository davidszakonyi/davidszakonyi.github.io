window.onload = choosePic;

var myPix = new Array("../assets/logos/new_head_shot2_small.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("headshot-photo").src = myPix[randomNum];
     console.log(myPix[randomNum]);
     console.log("testing");
}