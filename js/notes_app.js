(function() {
  console.log("Note app");
})();

(function(exports) {
  function Note() {
    this.note = ""
  };
  Note.prototype.newNote = function(text) {
    this.note = text
  };
  Note.prototype.getNote = function() {
    return this.note;
  }
  exports.Note = Note;
})(this);
