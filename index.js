var stripe = function(){
  let button = document.getElementsByClassName("nav-link")
 console.log (button[0].style.transform )
    if (button[0].style.transform == false || button[0].style.transform == "translateX(100%)") {
      console.log('hubuhnuh')
      button[0].style.transform="translateX(0%)"
    }
     else if(button[0].style.transform == "translateX(0%)"){
      button[0].style.transform="translateX(100%)"
      
     }
  
}
  
