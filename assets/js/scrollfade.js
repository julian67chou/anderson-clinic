/* scrollfade.js — 滾動動畫 */
(function($){
  $.fn.scrollFade = function(){
    var elements = this;
    $(window).on('scroll resize', function(){
      elements.each(function(){
        var el = $(this);
        if(el.hasClass('in-view')) return;
        var winH = $(window).height();
        var top = el.offset().top - $(window).scrollTop();
        if(top < winH * 0.85) el.addClass('in-view');
      });
    });
    $(window).trigger('scroll');
    return this;
  };
  $(function(){ $('[data-animate-in]').scrollFade(); });
})(jQuery);
