# jquery.nail

> A jQuery plugin that enables a label to be nailed in the loacation you want.

## Installing with NPM

``` bash
$ npm install jquery.nail --save
```

## Installing with Bower

``` bash
$ bower install jquery.nail --save
```

## Demo

[http://wabish.github.io/jquery.nail/](http://wabish.github.io/jquery.nail/)


## Browser Support

``Chrome``
``Firefox``
``Safari``

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
