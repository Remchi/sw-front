'use strict';

describe('Navigation Menu', function() {
  it('changes active link depending on route', function() {
    browser.get('/');
    var text = element(by.css('.active > a')).getText();
    expect(text).toEqual('Home');

    var edgesLink = element(by.linkText('Edges'));
    edgesLink.click();
    text = element(by.css('.active > a')).getText();
    expect(text).toEqual('Edges');

  });
});
