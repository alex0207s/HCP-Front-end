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

var menu_is_open = false;

function show(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('logo').classList.toggle('active');
  document.getElementById('toggle-btn').classList.toggle('active');
  
  //控制背景的透明度
  if(menu_is_open)
    menu_is_open = false;
  else
    menu_is_open = true;
  
  if(menu_is_open)
    document.getElementById('overlay').style.zIndex = "2";
  else
    document.getElementById('overlay').style.zIndex = "-1"; 
}

$("#overlay").click(function(){
  if(menu_is_open){
    show()
    menu_is_open = false;
  }
})