/*******************************
    Praloder
 *********************************/
 //after window is loaded completely 
window.onload = function(){
    //hide the preloader
    setTimeout(function() {
        document.querySelector("#loader").style.display = "none";
        
    }, 500);
};

AOS.init();

// cursor move
/*
const cursor =document.querySelector('.cursor');

document.addEventListener("mousemove" , e=>{
    cursor.setAttribute("style", "top: " + (e.pageY - 15) +"px ; left: " + (e.pageX - 15) + "px;")
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout( () => {
        cursor.classList.remove('expand');
    }, 500)
});
*/
/*************************************
    Fillter Gallrey
*************************************/
let list_item = document.querySelectorAll('.work__ul li');
let imgs = Array.from(document.querySelectorAll('.work__img div'));

list_item.forEach((li) => {
    li.addEventListener('click', removeClass);
    li.addEventListener('click', mangeImges);
});

//Remove Calss of Ul Li
function removeClass(){
    list_item.forEach((e) => {
        e.classList.remove('active');
        this.classList.add('active');
    });
};

//Mange Imges
function mangeImges(){
    imgs.forEach((img) => {
        img.classList.remove('show-img');
        img.style.opacity = "0";
        img.style.display = 'none';
    });

    let cat = document.querySelectorAll(this.dataset.cat);
    cat.forEach((el) => {
        el.classList.add('show-img');
    });
};


/* loader-44 */

var num = document.querySelector('.loader-44 .loader-numbers'),    // Get the number
    duration = 5500;                                               // Animation in ms
    
// Custom easing function, ripped directly from the jQuery easing plugin (easeOutSine)
$.extend($.easing, {
    easeIn: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
    }
});
    
// Numbers animation 
$({'number': 25}).delay(10).animate({'number': 100}, {
    duration: duration,
    easing: 'easeIn',
    step: function (a) {
    a = Math.round(a);                   //rounded number
    a = String(a);                       //convert a number to a string
    $(num).html(a + '%');
    }
});
///////////////////////
$(document).ready(function(){
    $('#testimonials').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    
});

$(document).ready(function(){
    $('#owl-logo').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    
});
/*************************************
    POP UP
*************************************/
const box_img = Array.from(document.querySelectorAll('#work_img div'));




for(let i= 0; i< box_img.length;i++){
    box_img[i].onclick =function Pop(){
        box_img.forEach((box) => {
            box.classList.remove('pop');
            
        });
        this.classList.add('pop');
    };
    box_img[i].onclick =function remove_pop(){
        this.classList.toggle('pop');
        body.classList.toggle('blur');
        
        
    };
   
}


