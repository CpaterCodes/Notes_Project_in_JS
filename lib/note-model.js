(function(exports){
  var iDTracker = 0
 function Note(text){
    this.text = text;
    this.shortText = text.substr(0,20);
    this.iD = iDTracker;
    iDTracker++;
  };

  Note.prototype = {
    read: function() {
    return this.text;
    }
  };

  exports.Note = Note;
})(this);
