
/* Header section javascript code start */
document.querySelector('.show-menu').addEventListener('click' , function(){
    document.querySelector('.links').classList.add('show');
    document.querySelector('.navigation').classList.add('d-block');
    document.querySelector('.login-register').classList.add('d-block');

    document.querySelector('.show-menu').style.display = 'none';
    document.querySelector('.hide-menu').style.display = 'inline-block';
});

document.querySelector('.hide-menu').addEventListener('click',function(){
    document.querySelector('.links').classList.remove('show');
    document.querySelector('.navigation').classList.remove('d-block');
    document.querySelector('.login-register').classList.remove('d-block');
    document.querySelector('.show-menu').style.display = 'inline-block';

    document.querySelector('.hide-menu').style.display = 'none';
});
// Code to disclose the menu button when screen size is more than 655px

window.addEventListener('resize' , function(){
    let pageWidth = window.innerWidth;

    if(pageWidth > 655){
        document.querySelector('.show-menu').style.display = 'none';
        document.querySelector('.hide-menu').style.display = 'none';
        
        document.querySelector('.links').classList.remove('show');
    }else{
        document.querySelector('.show-menu').style.display = 'inline-block';
    }
})
/* Header section javascript code end */






/*HOME PAGE IMAGE SLIDER JS SECTION START*/

    var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
    
 /*HOME PAGE IMAGE SLIDER JS SECTION END*/






 ///////////////////////////////////////////////
/* Code for load more categories start */
let categoryCards = document.querySelectorAll('.category-box');
let loadMore = document.getElementById('category-loadmore-btn');
let showCards = 7;

if(categoryCards < showCards){
    loadMore.style.display = "none";
}

loadMore.addEventListener('click', function(){
    showCards += 4;
    for(i = 4;  i <= showCards;  i++){
        categoryCards[i].style.display = "inline-block";
        if(i == categoryCards.length - 1){
            loadMore.style.display = 'none';
            break;
        }
    }
    
})
/* Code for load more categories end */


/////////////////////////////////////////////////////////////////////////
 /* Code for load more books on home page  start*/

let books = document.querySelectorAll('.recently-added-books-box');
let loadMoreBooks = document.getElementById('load-more-books');
let showBooks = 6;


if(books.length < showBooks){
    loadMoreBooks.style.display = 'none';
}

loadMoreBooks.addEventListener('click',function(){
    showBooks += 7;
    for(i = 7;  i <= showBooks; i++){
        books[i].style.display = 'inline-block';
        if(i == books.length - 1){
            loadMoreBooks.style.display = 'none';
            break;
        }
        
    }
    
})










 /* Code for load more books on home page  end*/