function ControllermakesView(){
  var noteList = new NoteList();
  noteList.createNote('EE');
  var noteController = new NoteController(noteList);

  noteController.showNotes();
  assert.eq(document.getElementById('app').innerHTML, noteController.noteListView.htmlList());
};

ControllermakesView();
