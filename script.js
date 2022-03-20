// Javascript is used to set the clock to your computer time.

var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
  $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000);
}

//
var toggleUserInfo = function(page) {
  console.log('open the user info pane');
  var userpane = document.getElementById('user_info_pane');
  if(userpane.classList.contains('open')){
    userpane.classList.remove('open');
  }else{
    userpane.classList.add('open');
  }
  if(page !== 'open') {
    
    var removeActiveStates = new Promise(
    function(resolve, reject){
      var menuList = document.getElementsByClassName('user-info-list-item');
      for(var i = 0; i < menuList.length; i++){
        menuList[i].classList.remove('active'); 
      }
      var body = document.getElementsByTagName('body')[0];
      body.classList = [];
      resolve('removed active states');
    });
    
    removeActiveStates.then(
      function(){  
        document.getElementById(page).classList.add('active');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add(page);
      }, function(fa){
        console.log(fa);
      });
  }
}