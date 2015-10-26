describe('routing', function () {

    it('should have a detail id', function () {
        browser.get('http://localhost:9000/#/note-detail/1');
        element(by.css('.btn.btn-primary')).click();
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toContain('http://localhost:9000/#/note-edit/2');
        browser.ignoreSynchronization = false;
    });

});