# jquery.nail

> A jQuery plugin that enables a label to be nailed in the loacation you want.

## Demo

暂时还没有。

## Browser Support

``Chrome`` ``Firefox`` ``Safari``

## How to use

Simply include the `jquery.nail.min.js` file and place the following in the head of your document (make sure **jQuery** is included).

### Minimum setup

``` javascript
$(function() {
    $('#box').nail();
});
```

#### Example with default options

``` javascript
$(function() {
    $('#box').nail({
        onTop: function(elem) {
            elem.css('background', '#869EB5');
        },
        onBottom: function(elem) {
            elem.css('background', 'rgb(34, 89, 58)');
        },
        onFixed: function(elem) {
            elem.css('background', '#000');
        }
    });
});
```

## License

This plugin is available under [the MIT license](http://mths.be/mit).
