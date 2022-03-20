var toggleUserInfo = function(page) {
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


var photo;

$('#upload_photo').change(function() {
  var file = $('#upload_photo')[0].files[0];
  var reader = new FileReader;
  reader.onload = function(e){
    $('#photo').attr('src', e.target.result);
    photo = e;
  };
  reader.readAsDataURL(file);
});

function processFormData(){
  const form = document.forms['form'];
  const username = form.elements.username.value;
  document.getElementById("porfile_username").textContent = username;
  const github_url = form.elements.github.value;
  
  const language_selector1 = document.getElementById('language1');
  const language1 = language_selector1.options[language_selector1.selectedIndex].value;
  const score_selector1 = document.getElementById('score1');
  const score1 = score_selector1.options[score_selector1.selectedIndex].value;
  
  const language_selector2 = document.getElementById('language2');
  const language2 = language_selector2.options[language_selector2.selectedIndex].value;
  const score_selector2 = document.getElementById('score2');
  const score2 = score_selector2.options[score_selector2.selectedIndex].value;
  
  const language_selector3 = document.getElementById('language3');
  const language3 = language_selector3.options[language_selector3.selectedIndex].value;
  const score_selector3 = document.getElementById('score3');
  const score3 = score_selector3.options[score_selector3.selectedIndex].value;
  
  const trait1 = form.elements.trait1.value;
  const trait2 = form.elements.trait2.value;
  const trait3 = form.elements.trait3.value;
  document.getElementById("profile_trait1").textContent = trait1;
  document.getElementById("profile_trait2").textContent = trait2;
  document.getElementById("profile_trait3").textContent = trait3;
  
  document.getElementById('progress1').style.width = score1;
  document.getElementById('progress2').style.width = score2;
  document.getElementById('progress3').style.width = score3;
  
  document.getElementById('icon1').style.backgroundImage = "url("+language1+")";
  document.getElementById('icon2').style.backgroundImage = "url("+language2+")";
  document.getElementById('icon3').style.backgroundImage = "url("+language3+")";
  
  $('#profile_photo').attr('src', photo.target.result);
}