
var read = require('fs').readFileSync;
var rework = require('rework');
var pseudos = require('..');

var out = read('test/fixtures/pseudos.out.css', 'utf8').trim();
var css = read('test/fixtures/pseudos.css', 'utf8').trim();

describe('.pseudos()', function(){
  it('should work', function(){
    rework(css)
      .use(pseudos())
      .toString()
      .trim()
      .should
      .equal(out);
  })
})
