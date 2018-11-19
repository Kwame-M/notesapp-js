(function(exports) {
  function testEmpty() {
    var notes = new Notes();

    if (notes.list.length > 0 ) {
      throw new Error("Nothing here chief 😇");
    }
  };

  testEmpty();
})(this);
