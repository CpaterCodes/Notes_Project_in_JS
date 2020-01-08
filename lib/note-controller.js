(function(exports){
  function NoteController(){

  }

NoteController.prototype = {
  howdify: function(){
    console.log(document.getElementById('app').innerHTML);
    document.getElementById('app').innerHTML = 'H O W D Y';
  }
}
  exports.NoteController = NoteController;
})(this);
