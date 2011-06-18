(function($){
     $.fn.extend({        
        gneuOverlays: function() {
			$("body").prepend($("<div id='overlay'></div>").css('float', 'left').css('height', '0').css('z-index', '10000').css('position', 'absolute'));
 
            //Iterate over the current set of matched elements
            return this.each(function() {
				var $html = "";
				var $el = $(this);
				var $arr = $el.attr('alt').split("|", 2);
				
				if ($arr[1].indexOf(' ') == -1 && $("#info_" + $arr[1]).length == 1)
				{					
					$el.css('cursor', 'help').mouseover(function () {
							$("#overlay").html($("#" + $arr[1]).html()).fadeIn('fast').offset({left: $el.offset().left + 24, top: $el.offset().top});
						}).mouseout(function () {
							$("#overlay").fadeOut('fast').html('');
						});
				}
				else
				{
					$html = "<div style='background-color: #900; background-image:url(images/bg_th.gif); color: #fff; padding: 3px; font-size: 12px; font-weight: bold; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif;'>" + $arr[0] + "</div>";
					$html += "<div style='border: 1px solid #800; border-top: none; width: 300px; background-color: #e2e2e2; padding: 3px; font-size: 10px; '>" + $arr[1] + "</div>";
					
					$el.css('cursor', 'help').mouseover(function () {
							$("#overlay").html($html).fadeIn('fast').offset({left: $el.offset().left + 24, top: $el.offset().top});
						}).mouseout(function () {
							$("#overlay").fadeOut('fast').html('');
						});
				}
            });
        }
    });    
})(jQuery);