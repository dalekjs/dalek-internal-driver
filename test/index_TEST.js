'use strict';

var expect = require('chai').expect;
var Driver = require('../index.js');

describe('dalek-internal-driver', function() {

  it('should exist', function() {
    var driver = new Driver();
    expect(driver).to.be.ok;
  });

});
