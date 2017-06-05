/**
 *  JavaScript functions here ...
 */


// Adds background to .header when scrolled

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        var header = document.getElementsByClassName("header");
        header[0].className = "header header-scroll";
    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        var header = document.getElementsByClassName("header");
        header[0].className = "header";
    }
}


/**
 *  JQuery functions here ...
 */


$('document').ready(function(){

    // Open&Close the .main-menu on mobile

    $('.toggle-navigation').click(function(){
        $(this).toggleClass('open toggle-navigation--margin');
        $('.main-menu').toggleClass('main-menu--open');
    })

    // Initials SimpleLightBox Plugin (best light plugin for popup images)

    var $gallery = $('.section-portfolio__items a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
      console.log('Shown');
    })
    .on('close.simplelightbox', function(){
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
      console.log('Closed');
    })
    .on('change.simplelightbox', function(){
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
      console.log('No image found, go to the next/prev');
      console.log(e);
    });

    // Function for smooth scroll

    jQuery('a[href^="#"]').click(function(e) {
 
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
    
        return false;
    
        e.preventDefault();
    
    });

})
