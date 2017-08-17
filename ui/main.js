console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="vamshi";
var element=document.getElementById('madi');
var marginLeft=10;
function moveRight(){
    
    madi.style.marginLeft=marginLeft + 'px';
}

madi.onclick=function(){
   var interval=setInterval(moveRight,100);
  
};