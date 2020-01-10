function controllermakesView(){
  var noteList = new NoteList();
  noteList.createNote('EE');
  var noteController = new NoteController(noteList);

  noteController.showNotes();
  assert.eq(document.getElementById('app').innerHTML, noteController.noteListView.htmlList());
};

function controllermakesSingleNote(){
  var noteList = new NoteList();
  noteList.createNote('One extreeeeeeeeeemely long boi');
  var noteController = new NoteController(noteList);
  // noteController.selectNote

};

controllermakesView();
