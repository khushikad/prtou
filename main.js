canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseevent = "";
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
currentx= e.clientX - canvas.offsetLeft;
currenty = e.clientY - canvas.offsetTop;
  if (mouseevent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = "indigo";
    ctx.lineWidth = 3;
    ctx.arc(currentx,currenty, 40, 0, 2 * Math.PI);
    ctx.stroke();
  
  }





}
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
  mouseevent = "mousedown";

}