window.onload = () => {
   var goTo =  document.getElementsByClassName("go-to");
    for(const element of goTo) {
        element.onclick = () => {
            var target = element.getAttribute("data-gte-targe"); 
            var offset = element.getAttribute("data-gte-offset"); 
            console.log(target);
            console.log(offset);
        }
    }
    var goToTop = document.getElementById("go-to-top");
    
    goToTop.onclick = () => {
        window.scrollTo({top: 0});
    }

}