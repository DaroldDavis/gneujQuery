(function ($)
{
    $.fn.extend(
    {
        gneuLabels: function ()
        {
            return this.each(function ()
            {
                var $el = $(this);
                var $for = $el.attr('for');
                var $overlay = $el.text();
                var $target = $("[name=" + $for + "]");
                if (!$for) return;
                var $type = $target.prop('type');
                if ($type == undefined) $type = 'textarea';
                switch ($type)
                {
                case "checkbox":
                    break;
                default:
                    $el.addClass('gneuLabels').offset(
                    {
                        top: $target.offset().top + 4,
                        left: $target.offset().left + 6
                    });
                    if ($target.val().length != 0)
                    {
                        $el.hide();
                    }
                    $el.click(function ()
                    {
                        $target.focus();
                    });
                    // replace overlay
                    $target.focus(function ()
                    {
                        if ($target.val().length == 0) $el.fadeTo('fast', 0.5);
                    }).keyup(function ()
                    {
                        if ($target.val().length > 0) $el.fadeOut();
                    }).blur(function ()
                    {
                        if ($target.val().length == 0) $el.fadeIn().fadeTo('fast', 1.0);
                        else if ($target.val().length > 0) $el.fadeOut();
                    });
                }
            });
        }
    });
})(jQuery);