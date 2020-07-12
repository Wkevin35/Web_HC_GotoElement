window.onload = () => {
   var goTo =  document.getElementsByClassName("go-to");
    for(const element of goTo) {
        element.onclick = () => {
            var target = element.getAttribute("data-gte-targe"); 
            var offset = element.getAttribute("data-gte-offset"); 
            
            if (target) {
                const scrollTarget = document.getElementById(target);
                window.scrollTo({
                    top: scrollTarget.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        }
    }
    var goToTop = document.getElementById("go-to-top");
    
    goToTop.onclick = () => {
        window.scrollTo({top: 0,
        behavior:'smooth'});
    }

}