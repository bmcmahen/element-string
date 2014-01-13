
# element-string

  Generate an html element as a string.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/element-string

## Example

```javascript
var generate = require('element-string');
var str = generate('span', {
  class: 'bacon',
  data-id: 'tastes good'
}, 'this is the text of the span');
```


## License

  MIT
