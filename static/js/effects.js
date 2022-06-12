function scrollEffects(){
  // sequential fadeup for vertical blocks
  document.querySelectorAll('.sequential-fadeup').forEach(item => {
    var thispos= item.getBoundingClientRect(),
        thish = item.offsetHeight / 3 ;
    if (thispos.top < window.innerHeight - thish ){
        var delay = 0;
        item.childNodes.forEach(childItem => {
          setTimeout(function(){ 
            if(childItem.classList){
              childItem.classList.add("revealed")
            }
          },delay * 100);
          delay++;
        });
    }
  });

  //sequential fadein for horizontal blocks
  document.querySelectorAll('.sequential-fadein').forEach(item => {
    var thispos= item.getBoundingClientRect(),
        thish = item.offsetHeight / 3 ;
    if (thispos.top < window.innerHeight - thish ){
        var delay = 0;
        item.childNodes.forEach(childItem => {
          setTimeout(function(){ 
            if(childItem.classList){
              childItem.classList.add("revealed")
            }
          },delay * 150);
          delay++;
        });
    }
  });

  //single item fadein
  document.querySelectorAll('.fadein, .slideleft, .slideright').forEach(item => {
    var thispos= item.getBoundingClientRect(),
        thish = item.offsetHeight / 2.5 ;
    if (thispos.top < window.innerHeight - thish ){
        item.classList.add("revealed");
    }
  });
}

document.addEventListener("scroll", scrollEffects);
window.addEventListener("load", scrollEffects);
