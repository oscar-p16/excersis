//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = () => {
  var DnaTranscriber = function() {};

  DnaTranscriber.prototype.toRna = function(strg) {
    var rna = "" ;
  
    for(var i = 0; i < strg.length; i ++) {
      if (strg[i] === 'G') {
        rna += strg[i].replace('G','C');
      } else if(strg[i] === 'C') {
        rna += strg[i].replace('C','G');
      } else if(strg[i] === 'T') {
        rna += strg[i].replace('T','A');
      }else {
        rna += strg[i].replace('A','U');
      }
  
    }
    return rna;
  }
  module.exports = DnaTranscriber;
};
