$(function(){
  $('[data-tooltip]').each(function(index,elem){
    var $this = $(this);
    $this.attr( 'title', $this.attr('data-tooltip') );
  });
});

$(function(){
$(document.getElementsByName('facebook')).click(function() {
  refURL = $(location).attr('href');
  currLoc = 'https://www.facebook.com/sharer/sharer.php?u='+refURL;       
 
  var snet="Facebook";
  if(useTracker && trackButtons && _gtag){ _gtag('event','social share',{'event_category':'social share','event_label':snet+' share: '+location.href,
  'socialNetwork':snet,'socialAction':'share','socialTarget':location.href,'transport_type':'beacon'}); }

  window.open(currLoc);
  });

  $(document.getElementsByName('twitter')).click(function() {
    refURL = $(location).attr('href');
    currLoc = 'https://twitter.com/intent/tweet?text=Check%20out%20'+refURL;

    var snet="Twitter";
     if(useTracker && trackButtons && _gtag){ _gtag('event','social share',{'event_category':'social share','event_label':snet+' share: '+location.href,
    'socialNetwork':snet,'socialAction':'share','socialTarget':location.href,'transport_type':'beacon'}); }

    window.open(currLoc);
    });

  $(document.getElementsByName('whatsapp')).click(function() {
    refURL = $(location).attr('href');
    currLoc = 'whatsapp://send?text=Catálogo%20*PACÍFICO*%20-%20Catai%20'+refURL;

    var snet="Whatsapp";
    if(useTracker && trackButtons && _gtag){ _gtag('event','social share',{'event_category':'social share','event_label':snet+' share: '+location.href,
    'socialNetwork':snet,'socialAction':'share','socialTarget':location.href,'transport_type':'beacon'}); }
      
    window.open(currLoc);
  });

  /*$('#item1078623').click(function() {
    if(useTracker && trackButtons && _gtag){ _gtag('event','social share',{'event_category':'social share','event_label':snet+' share: '+location.href,
    'socialNetwork':snet,'socialAction':'share','socialTarget':location.href,'transport_type':'beacon'}); }
  });*/

/*Fullscreen*/
$(document.getElementsByName('mkfullscreen')).click(function() {
  document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
});

});


$(function(){
  $('.mkscrollabajo').click(function() {
    var $el = $('.mkscrolltexto'); 
    var bottom = $el.offset().top + $el.outerHeight(true);

    $(".scroll-vert-showScroll").animate({scrollTop: bottom}, 1000);
  });

  $('.mkscrollabajo2').click(function() {
    var $el = $('.mkscrolltexto2'); 
    var bottom = $el.offset().top + $el.outerHeight(true);
  
    $(".scroll-vert-showScroll").animate({scrollTop: bottom}, 1000);
  });

  $('.mkscrollarriba').click(function() {
            $(".scroll-vert-showScroll").animate({scrollTop: $(".mkscrolltexto").position().top}, 1000);
    });  
    
});