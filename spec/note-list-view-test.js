function returnsHTMLString(){
  var noteList = new NoteList();
  noteList.createNote('note1');
  noteList.createNote('note2');
  noteList.createNote('note3');
  noteList.createNote('hello world');
  var noteListView = new NoteListView(noteList);
  assert.eq('<ul><li><div>note1</div></li><li><div>note2</div></li><li><div>note3</div></li><li><div>hello world</div></li></ul>', noteListView.htmlList());
};

function noteViewBelowTwenty(){
  var noteListTwo = new NoteList();
  noteListTwo.createNote('This text contains over 20 characters and will not all appear');
  var noteListViewTwo = new NoteListView(noteListTwo);
  assert.eq('<ul><li><div>This text contains o</div></li></ul>',noteListViewTwo.htmlList());
}

function fullNoteView(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var longBoi = 'This text has over 20 characters but will nonetheless appear';
  noteList.createNote(longBoi);
  assert.eq(longBoi, noteListView.htmlSingle());

}
returnsHTMLString();
noteViewBelowTwenty();
fullNoteView();
