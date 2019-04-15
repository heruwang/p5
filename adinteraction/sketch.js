let ad = [];
let i = 0;

function setup() {

    ad[0] = document.getElementById("ad0");
    ad[1] = document.getElementById("ad1");
    ad[2] = document.getElementById("ad2");
    ad[3] = document.getElementById("ad3");
    ad[4] = document.getElementById("ad4");
    ad[5] = document.getElementById("ad5");
    ad[6] = document.getElementById("ad6");
    ad[7] = document.getElementById("ad7");
    ad[8] = document.getElementById("ad8");

}

function changeImage() {
  if (i < ad.length) {
    ad[i].style.visibility = "visible";
    i++;
  }
}

function clickFunc() {
  setInterval(changeImage, 1500);
}
