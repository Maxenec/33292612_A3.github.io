window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}

//This function scrolls to the top of the page smoothy.
function scrollToTop() {
    const scrollDuration = 800;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(function(){
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}