function testReadReturnsText(){
  var note = new Note("Test note");
  assert.eq("Test note", note.read());
}

function systemOfiD(){
  // the following feature draws on a core class variable, incremented per instance
  var noteOne = new Note("zero");
  var noteTwo = new Note("one");
  var noteThree = new Note("two");
  assert.eq(noteOne.iD, 1);
  assert.eq(noteTwo.iD, 2);
  assert.eq(noteThree.iD, 3);
}
testReadReturnsText();
systemOfiD();
