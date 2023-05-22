//As you read the Bible you get unique NFTs!
const hebrew = require('./Strongs-Greek-Hebrew/strongs-hebrew-dictionary.js');
const greek = require('./Strongs-Greek-Hebrew/strongs-greek-dictionary.js');


function getStrongs (_GreekOrHebrew, _referenceNumber){
if (_GreekOrHebrew == 'Hebrew' || _GreekOrHebrew == 'hebrew'){
const hbw = hebrew[`H${_referenceNumber}`];
return `Hebrew: ${hbw['lemma']}  ${hbw['xlit']}  
 
Pronounced: 
${hbw['pron']}  
 
Derivation: 
${hbw['derivation']} 

Strongs Definition:
${hbw['strongs_def']}

KJV Definition: 
${hbw['kjv_def']}`;

}else{
const grk = greek[`G${_referenceNumber}`];
return `Greek: ${grk['lemma']}  ${grk['translit']}  
 
Derivation: 
${grk['derivation']} 

Strongs Definition:
${grk['strongs_def']}

KJV Definition: 
${grk['kjv_def']}`;}
}

console.log(getStrongs('h', 777));