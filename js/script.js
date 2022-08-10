const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

function img(x, y, z) {
    document.getElementById(x).style.background = `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 1)
      ),url("../media/${y}")`;
    document.getElementById(x).innerHTML = z;
}

const e = 'egypt.png';
const e2 = 'egypt2.jpg';
const egyptid = "egypt";
const egypttxt = "pyramids";


const t = 'turkey.jpg';
const t2 = 'turkey2.jpg';
const turkeyid = "turkey";
const turkeytxt = "hagia sophia";



const j = 'jordan.jpg';
const j2 = 'jordan2.jpg';
const jordanid = "jordan";
const jordantxt = "petra";

const u = 'uae.jpg';
const u2 = 'uae2.jpg';
const uaeid = "uae";
const uaetxt = "Burj Khalifa";


const eng = 'england.png';
const eng2 = 'england2.png';
const englandid = "england";
const englandtxt = "London Eye";


const f = 'france.jpg';
const f2 = 'france2.jpg';
const franceid = "france";
const francetxt = "eiffel tower";

const g = 'germany.jpg';
const g2 = 'germany2.jpg';
const germanyid = "germany";
const germanytxt = "Brandenburg Gate";

const i = 'italy.jpg';
const i2 = 'italy2.jpg';
const italyid = "italy";
const italytxt = "Colosseum";




var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
        }
    },
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})


var icon = document.getElementById("icon")
var facebook = document.getElementById("facebook")
var instagram = document.getElementById("instagram")
var github = document.getElementById("github")
var pinterest = document.getElementById("pinterest")
var twitter= document.getElementById("twitter")

icon.onclick = function () {
    document.body.classList.toggle("darktheme");

    if (document.body.classList.contains("darktheme")) {
        icon.src = "media/sun.png";
        facebook.src ="media/icon facebook dark.png"
        instagram.src ="media/icon instagram dark.png"
        github.src ="media/icon github dark.png"
        pinterest.src ="media/icon pinterest dark.png"
        twitter.src ="media/icon twitter dark.png"
    } else {
        icon.src = "media/darkicon.png";
    }
}
