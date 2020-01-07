function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.createNote('note1');
  noteList.createNote('note2');
  noteList.createNote('note3');
  noteList.createNote('hello world')
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>note1</div></li><li><div>note2</div></li><li><div>note3</div></li><li><div>hello world</div></li></ul>', noteListView.htmlList());
};

returnsHTMLString();
