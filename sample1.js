
let slideshow = ()=> {
  document.getElementById('el').classList.toggle('fas');
  document.getElementById('el').classList.toggle('far');
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
$('#slideL').on('click',function(){
  if($('#slideL').hasClass('off')){
    $('#slideL').removeClass('off fa-angle-double-right');
    $('#slideL').addClass('fa-angle-double-left');
    $('.slide-close').animate({
      'left': '0px'
  },300);
    } else {
$('#slideL').addClass('off fa-angle-double-right');
$('#slideL').removeClass('fa-angle-double-left');
$('.slide-close').animate({
  'left': '-150px'
},300);
}
});
var count1 = load_number();
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

