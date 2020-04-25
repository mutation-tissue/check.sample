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
var count1 = load_number();
var barChartData = {
   labels : ["白神フブキ","大神ミオ","戌神ころね","猫又おかゆ"],
   datasets : [
      {
         fillColor : "rgba(240,128,128,0.6)",
         strokeColor : "rgba(240,128,128,0.9)",
         highlightFill: "rgba(255,64,64,0.75)",  
         highlightStroke: "rgba(255,64,64,1)",  
         data : [ count1, 30, 40, 45]
      }
   ]

}

window.onload = function(){
   var ctx = document.getElementById("graph-area").getContext("2d");
   window.myBar = new Chart(ctx).Bar(barChartData);
  var count1 = load_number();
document.getElementById("dayCount").innerHTML = count1;
};
let reset = ()=> {
  var count1 = load_number();
  count1 = 0;
  save(count1);
  document.getElementById("dayCount").innerHTML = count1;
}
let reset = ()=> {
  var count1 = load_number();
  count1 = 0;
  save(count1);
  document.getElementById("dayCount").innerHTML = count1;
}
let countup = ()=>{
  var count1 = load_number();
  count1 += 1;
  save(count1);
  document.getElementById("dayCount").innerHTML = count1;
}
function load_number() {
    var count_data = localStorage.getItem('count1');
    var count = Number(count_data);
    if(
      count &&
      1 <= count &&
      Math.floor(count) === count
    ) {
      return count;
    } else {
      return 0;
    }
}
function save (count) {
    localStorage.setItem("count1",count);
}
