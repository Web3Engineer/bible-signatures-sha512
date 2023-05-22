const fs = require('fs');

const text = `Ge1:1 In the beginning God created the heaven and the earth.
Rev22:21 The grace of our Lord Jesus Christ be with you all. Amen.`


function removeLineBeginningsWithColon(_text) {
    const names = ['Ge', 'Exo', 'Lev', 'Num', 'Deu', 'Josh', 'Jdgs', 'Ruth', '1Sm', '2Sm', '1Ki', '2Ki', '1Chr', '2Chr', 'Ezra', 'Neh', 'Est', 'Job', 'Psa', 'Prv', 'Eccl', 'SSol', 'Isa', 'Jer', 'Lam', 'Eze', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad', 'Jonah', 'Mic', 'Nahum', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1Cor', '2Cor', 'Gal', 'Eph', 'Phi', 'Col', '1Th', '2Th', '1Tim', '2Tim', 'Titus', 'Phmn', 'Heb', 'Jas', '1Pet', '2Pet', '1Jn', '2Jn', '3Jn', 'Jude', 'Rev'];
    const regex = new RegExp(`^\\s*(${names.join('|')})\\d+:\\d+\\s+`, 'gm');
    return _text.replace(regex, '');
  }

  
  const output = removeLineBeginningsWithColon(text);
  //console.log(output);

fs.writeFileSync('./bibleLog2.txt', output);