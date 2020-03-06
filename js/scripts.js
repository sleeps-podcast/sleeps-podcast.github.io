$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 1.9);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();





$(window).scroll(function(){
    $(".scroll-prompt").css("opacity", 1 - $(window).scrollTop() / 100);
    $(".name").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".job-title").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".video").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".now-playing").css("opacity", 1 - $(window).scrollTop() / 100);

  });

/*
$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $('.scroll-prompt').hide();
  }
  else {
    $('.scroll-prompt').show();
  }
});*/