(function(exports){
  function NoteListView(noteListModel){
      this.noteList = noteListModel;
  };

  NoteListView.prototype = {
    htmlList: function(){
      var list = "<ul>";
      var index = 0;

      while(index < (this.noteList.noteModels).length){
        list += "<li><div>" + (this.noteList.noteModels[index]).shortText + "</div></li>";
        index++
      };
      list += "</ul>";
      return list;
    },
    htmlSingle: function(){
      return "<ul><li><div>"
    }
  };
  exports.NoteListView = NoteListView;
})(this);
