(function(exports){
  function NoteListView(noteListModel){
      this.noteList = noteListModel.noteModels;
  };

  NoteListView.prototype = {
    htmlList: function(){
      var list = "<ul>";
      var index = 0;

      while(index < (this.noteList).length){
        list += "<li><div>" + (this.noteList[index]).text + "</div></li>";
        index++
      };
      list += "</ul>";
      return list;
    },
  };
  exports.NoteListView = NoteListView;
})(this);
