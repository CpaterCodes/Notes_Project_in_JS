(function(exports){
  function NoteController(noteList){
    this.noteListView = new NoteListView(noteList);
  }

NoteController.prototype = {
  howdify: function(){
    console.log(document.getElementById('app').innerHTML);
    document.getElementById('app').innerHTML = 'H O W D Y';
  },

  showNotes: function(){
    document.getElementById('app').innerHTML = this.noteListView.htmlList();
  },
}
  exports.NoteController = NoteController;
})(this);
