describe('notes', function () {

    it('should have a note list', function () {
        browser.get('http://localhost:9000/');
        var todoList = element.all(by.repeater('note in notes'));
        expect(todoList.count()).toEqual(2);
    });

    it('should have a detail id', function () {
        browser.get('http://localhost:9000/#/note-detail/1');
        var id = element.all(by.css('td')).get(1);
        expect(id.getAttribute('innerText')).toEqual('2');
    });

});