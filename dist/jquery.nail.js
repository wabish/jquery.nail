/*!
 * jquery.nail v1.0.0
 * Url: https://github.com/cobish/jquery.nail#readme
 * Copyright (c) cobish - http://cobish.github.io
 * License: MIT
 */
(function($, window, document) {

    $.fn.nail = function(option) {
        var max = 0;

        this.each(function() {
            max = Math.max(max, $(this).height());
        });

        console.log('最大高度：' + max);

        return this;
    };

})(jQuery, window, document);
