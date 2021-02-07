const toggleNav = document.getElementById('navbar-toggler');
const navMenu = document.getElementById('navbar-collapse');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const reviewItem = document.querySelectorAll('.review-item');
console.log(reviewItem );

function ToggleNavbar(){
    navMenu.classList.toggle('shownav');    
    if(toggleNav.firstElementChild.className == 'fas fa-bars fa-fw'){
        toggleNav.firstElementChild.className = 'fas fa-times fa-fw';        
    } else {
        toggleNav.firstElementChild.className = 'fas fa-bars fa-fw';
    }
    
}

//Stopping animation & transition during window resizing
let resizeTimer;
function animationStopper(){
   document.body.classList.add('resize-animation-stopper');
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(()=> {
       document.body.classList.remove('resize-animation-stopper');
   },4000);
}

// Sliding Reviews
let idcount = 0;
showCurrentReviews(idcount);
function showCurrentReviews(id){  
        hideAllSlide();
        reviewItem.forEach((item, idx) =>{
            if(id == idx){
                item.classList.add('activeSlide');
            }
        });
}

function hideAllSlide(){
    reviewItem.forEach(item => {
        item.classList.remove('activeSlide');
    })
}

function showNextReview(){
    idcount++;
    if(idcount == reviewItem.length){
        idcount = 0;
    }
    showCurrentReviews(idcount);

}

function showPrevReview(){
    idcount--;
    if(idcount < 0){
        idcount = reviewItem.length -1;
    }
    showCurrentReviews(idcount);

}



// Event Listeners
toggleNav.addEventListener('click', ToggleNavbar);
window.addEventListener('resize', animationStopper);
nextBtn.addEventListener('click', showNextReview);
prevBtn.addEventListener('click', showPrevReview);


