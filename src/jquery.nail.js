(function($, window, document) {
    $.fn.nail = function(options) {
        var _this = this;

        var defaults = {
            subElem: _this.parent(),
            topCB: null,
            fixedCB: null,
            bottomCB: null
        }

        var options = $.extend(defaults, options || {});

        var oWindow = $(window),
            oDocument = $(document);

        var subTop = options.subElem.offset().top,
            subHeight = options.subElem.height(),
            nailTop = _this.offset().top,
            nailHeight = _this.height();

        function handleScroll() {
            var scrollTop = oWindow.scrollTop();

            // 滚到顶部
            if (scrollTop <= subTop) {
                _this.css({
                    position: 'absolute',
                    top: 0
                });

                if (options.topCB && typeof options.topCB === 'function') {
                    options.topCB(_this);
                }

                return;
            }

            // 滚到底部
            if (scrollTop >= subTop + subHeight - nailHeight) {
                _this.css({
                    position: 'absolute',
                    top: subHeight - nailHeight + 'px'
                });

                if (options.bottomCB && typeof options.bottomCB === 'function') {
                    options.bottomCB(_this);
                }

                return;
            }

            _this.css({
                position: 'fixed',
                top: 0
            });

            if (options.fixedCB && typeof options.fixedCB === 'function') {
                options.fixedCB(_this);
            }
        }

        function handleResize() {

        }

        oWindow.on('scroll', handleScroll);
        oWindow.on('resize', handleResize);

        return _this;
    };
})(jQuery, window, document);
