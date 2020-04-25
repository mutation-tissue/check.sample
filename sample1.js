
let slideshow = ()=> {
  document.getElementById('el').classList.toggle('fas');
  document.getElementById('el').classList.toggle('far');
  alert("fa");
}
let check = () => {
  alert("クリックされました");
}
let sidemenu = () => {
  alert("表示しました");
}
let clear = () => {
  alert("消去しました");
}
var count1 = load_number();
var barChartData = {
   labels : ["白神フブキ","大神ミオ","戌神ころね","猫又おかゆ"],
   datasets : [
      {
         fillColor : "rgba(240,128,128,0.6)",    // 塗りつぶし色
         strokeColor : "rgba(240,128,128,0.9)",  // 枠線の色
         highlightFill: "rgba(255,64,64,0.75)",  // マウスが載った際の塗りつぶし色
         highlightStroke: "rgba(255,64,64,1)",   // マウスが載った際の枠線の色
         data : [ count1, 30, 40, 45]     // 各棒の値(カンマ区切りで指定)
      }
   ]

}

// ▼上記のグラフを描画するための記述
window.onload = function(){
  var count = load_number();
   var ctx = document.getElementById("graph-area").getContext("2d");
   window.myBar = new Chart(ctx).Bar(barChartData);
// ページが読み込まれたら実行
var count1 = load_number();
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
