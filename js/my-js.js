

document.getElementById("show-menu").addEventListener("click", () => {
    let navbar = document.querySelector(".navbar-phone");
    let opac = document.querySelector(".opac-all");
    navbar.style.right = 0 + "px";
    opac.style.display = "block";

});


document.getElementById("close-menu").addEventListener("click", () => {
    let navbar = document.querySelector(".navbar-phone");
    let opac = document.querySelector(".opac-all");
    navbar.style.right = -115 + "%";
    opac.style.display = "none";
})

var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});
document.getElementById("click-drop").addEventListener("click", () => {
    let drop = document.querySelector(".drop-list2");
    if (drop.style.visibility == "hidden") {
        drop.style.display = "block";

    } else {
        drop.style.display = "none";

    }
});

$(document).ready(() => {
$(document).load(()=>{
    
})
    $(window).scroll(() => {
        let up = $(window).scrollTop();
        if (up > 400) {
            $("#scroll-btn").css({
                "visibility": "visible",
                "opacity": "1",
            })
        } else {
            $("#scroll-btn").css({
                "visibility": "hidden",
                "opacity": "0",
            })
        }
    });

    
    $('#scroll-btn').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
  
});