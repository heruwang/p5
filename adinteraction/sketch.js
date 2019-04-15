let ad = [];
let i = 0;

function setup(){
  ad[0] = document.querySelector("#ad0");
  ad[0] = document.querySelector("#ad0");
  ad[0] = document.querySelector("#ad0");
  ad[0] = document.querySelector("#ad0");
  setInterval(changeImage, 1000);
}

function changeImage() {
  if (i<ad.length)
  {
    ad[i].style.visibility = visible;
    i++;
  }

}
