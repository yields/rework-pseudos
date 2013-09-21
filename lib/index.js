
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
    style.rules.forEach(function(rule, i){
      rule.selectors.forEach(function(selector, j){
        var pseudos = map[selector];

        // abort
        if (!pseudos) return;

        // remove
        rule.selectors.splice(j, 1);

        // remove completley?
        if (!rule.selectors.length) {
          style.rules.splice(i, 1);
        }

        // add new rules
        pseudos.forEach(function(pseudo){
          style.rules.push({
            declarations: rule.declarations,
            selectors: [pseudo],
            type: 'rule'
          });
        });
      });
    });
  };
};
