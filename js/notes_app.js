(function() {
  console.log("Note app");
})();

// (function(exports) {
//   function Notes() {
//     this.list = [];
//   };
//
//   exports.Notes = Notes;
// })(this);

(function(exports)
 function Note(text){
    this.text = text
 }
 exports.Note = Note;
})(this);
