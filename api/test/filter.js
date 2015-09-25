var should = require('should'),
    Spotify = require('../lib/service/Spotify');

describe('filter items by key function', function () {
  it ('should remove the duplicate keys (not case sensitive)', function () {
    var list = [{
      name: 'test'
    },{
      name: 'Test'
    },{
      name: 'test1'
    }];
    var result = Spotify.filterList(list, 'name');
    result.should.have.lengthOf(2);
  });
  it ('should remove the duplicate keys (case sensitive)', function () {
    var list = [{
      name: 'test'
    },{
      name: 'Test'
    },{
      name: 'test1'
    },{
      name: 'test1'
    }];
    var result = Spotify.filterList(list, 'name', { lowerCase: false });
    result.should.have.lengthOf(3);
  });
});
