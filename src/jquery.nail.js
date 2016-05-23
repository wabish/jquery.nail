(function($) {

    $.fn.nail = function(option) {
        var max = 0;

        this.each(function() {
            max = Math.max(max, $(this).height());
        });

        console.log('最大高度：' + max);

        return this;
    }

})(jQuery);
