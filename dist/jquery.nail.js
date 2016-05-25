/*!
 * jquery.nail v1.0.0
 * A simple jQuery nail plugin.
 * https://github.com/cobish/jquery.nail

 * Copyright (c) 2016, cobish
 * Released under the MIT license.
 */
(function($, window) {

    var methods = {

        options: null,

        defaults: null,

        init: function(elem, options) {
            this.options = $.extend({
                elem: $(elem),
                subElem: $(elem).parent(),
                oWindow: $(window),
                onTop: function(elem) {
                    // 顶部触发，返回本身
                },
                onBottom: function(elem) {
                    // 顶部触发，返回本身
                },
                onFixed: function(elem) {
                    // 钉住触发，返回本身
                }
            }, options || {});

            this.defaults = {
                elemTop: 0,
                elemHeight: this.options.elem.height(),
                subElemTop: 0,
                subElemLeft: 0,
                subElemHeight: this.options.subElem.height()
            };

            var self = this;

            this.options.oWindow.on('scroll', function() {
                self._handleScroll();
            });
            this.options.oWindow.on('resize', function() {
                self._handleResize();
            });
        },

        _handleScroll: function() {
            var scrollTop = this.options.oWindow.scrollTop(),
                scrollLeft = this.options.oWindow.scrollLeft(),
                elemHeight = this.defaults.elemHeight,
                subElemTop = this.options.subElem.offset().top,
                subElemLeft = this.options.subElem.offset().left,
                subElemHeight = this.defaults.subElemHeight,
                elem = this.options.elem,
                subElem = this.options.subElem;

            // 滚到顶部
            if (scrollTop <= subElemTop) {
                elem.css({
                    position: 'absolute',
                    top: 0,
                    left: parseFloat(elem.css('marginLeft')) + parseFloat(elem.css('paddingLeft')) + 'px'
                });

                if (this.options.onTop && typeof this.options.onTop === 'function') {
                    this.options.onTop(elem);
                }

                return;
            }

            // 滚到底部
            if (scrollTop >= subElemTop + subElemHeight - elemHeight) {
                elem.css({
                    position: 'absolute',
                    top: subElemHeight - elemHeight + 'px',
                    left: parseFloat(elem.css('marginLeft')) + parseFloat(elem.css('paddingLeft')) + 'px'
                });

                if (this.options.onBottom && typeof this.options.onBottom === 'function') {
                    this.options.onBottom(elem);
                }

                return;
            }

            elem.css({
                position: 'fixed',
                top: 0,
                left: subElemLeft + parseFloat(elem.css('marginLeft')) + parseFloat(elem.css('paddingLeft')) - scrollLeft + 'px'
            });

            if (this.options.onFixed && typeof this.options.onFixed === 'function') {
                this.options.onFixed(elem);
            }
        },

        _handleResize: function() {
            this._handleScroll();
        }
    };

    $.fn.nail = function(options) {
        methods.init(this, options);
        return this;
    };

})(jQuery, window);
