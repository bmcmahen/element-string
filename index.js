// Export
module.exports = generateHtmlString;

/**
 * Generate an html element as string
 * 
 * @param  {String} tag
 * @param  {Object} attrs 
 * @param  {String} inner html/text
 * @return {String}       
 */

function generateHtmlString(tag, attrs, inner){
  var str = "<#{tag}#{attr}>#{text}</#{tag}>";
  return interpolate(str, { 
    tag: tag, 
    attr: generateAttributes(attrs),
    text: inner
  });
}

/**
 * Simple interpolation.
 * 
 * @param  {String} str    
 * @param  {Object} values 
 * @return {String}        
 */

function interpolate(str, values) {
  return str.replace(/#\{(\w+)\}/g, function(match, name) {
    return values[name] || "";
  });
}


/**
 * Generate attributes string.
 * 
 * @param  {Object} attr 
 * @return {String}      
 */

function generateAttributes(attr){
  var htmlAttrs = '';
  for (var k in attr){
    var v = attr[k];
    htmlAttrs += ' ' + k + '=\''+ v.toString() + '\'';
  }
  return htmlAttrs;
}
