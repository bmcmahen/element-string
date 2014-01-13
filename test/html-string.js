var assert = require('assert');
var domify = require('domify');
var generate = require('element-string');

describe('#generateHtmlString', function(){

  var str = generate('span', {
      'data-id': 'someid',
      'class': 'myclass'
    }, 'this is a span');
  var el = domify(str);

  it('should generate the appropriate tag', function(){
    assert(el.nodeName === 'SPAN');
  });

  it('should set the attributes', function(){
    assert(el.getAttribute('data-id') === 'someid');
    assert(el.className === 'myclass');
  });

  it('should set the appropriate text', function(){
    assert(el.innerText === 'this is a span');
  });

});