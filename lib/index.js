
/**
 * dependencies
 */

var map = require('./map');

/**
 * Add pseudo element support.
 *
 *      ::selection {
 *        background: #fefefe;
 *      }
 *
 * yields:
 *
 *      ::selection {
 *        background: #fefefe;
 *      }
 *
 *      ::-moz-selection {
 *        background: #fefefe;
 *      }
 *
 * @return {Function}
 * @api public
 */

module.exports = function(){
  return function(style){
    reverse(style.rules, function(rule, i){
      if (!rule.selectors) return;
      var pseudos = [];

      // match pseudos
      reverse(rule.selectors, function(selector, j){
        var parts = selector.split('::');
        var matched = map['::' + parts[1]] || [];
        matched = matched.map(function(m){ return parts[0] + m; });
        pseudos = pseudos.concat(matched);
        if (!matched.length) return;
        rule.selectors.splice(j, 1);
      });

      // ignore
      if (!pseudos.length) return;

      // remove rule if no selectors are left
      if (0 == rule.selectors.length) {
        style.rules.splice(i, 1);
      }

      // add pseudo elements rules
      pseudos.forEach(function(pseudo){
        style.rules.splice(i, 0, {
          declarations: rule.declarations,
          selectors: [pseudo],
          type: 'rule'
        });
      });
    });
  };
};

/**
 * Iterate `arr` in reverse.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @api private
 */

function reverse(arr, fn){
  var i = arr.length - 1;
  do { fn(arr[i], i); } while (i--);
}
