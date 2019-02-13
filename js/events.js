function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  }
    )
}

function frameIt(){
  $('img').on("load",function(img){
    img.addClass('tasty')
    img.style.border ="red"
  })
}

function pressIt(){
  $('input').on("keydown", function(key){
    if(key.which === 71 || key.which === 103) {
      alert('You pressed the G key')
    }
  })
}

function submitIt(){
  $('form').on("submit",function(){
   alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
