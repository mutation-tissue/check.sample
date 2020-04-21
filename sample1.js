let slideshow = ()=> {
  document.getElementById('el').classList.toggle('fas');
  document.getElementById('el').classList.toggle('far');
}
let myfunc = () => {
  alert("制作者名");
}
let check = () => {
  alert("クリックされました");
}
let sidemenu = () => {
  alert("表示しました")
}
var barChartData = {
   labels : ["白神フブキ","大神ミオ","戌神ころね","猫又おかゆ"],
   datasets : [
      {
         fillColor : "rgba(240,128,128,0.6)",   
         strokeColor : "rgba(240,128,128,0.9)",  
         highlightFill: "rgba(255,64,64,0.75)",  
         highlightStroke: "rgba(255,64,64,1)",   
         data : [ 40, 30, 40, 45]     
      }
   ]

}

window.onload = function(){
   var ctx = document.getElementById("graph-area").getContext("2d");
   window.myBar = new Chart(ctx).Bar(barChartData);
}
