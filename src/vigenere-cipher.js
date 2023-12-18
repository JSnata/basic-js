const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mod){
    this.mod = mod
  }

  encrypt(message, key) {
    if(typeof message == 'undefined' || typeof key == 'undefined' || arguments.length === 0)
    {
      throw new Error('Incorrect arguments!')
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let UppMessage = message.toUpperCase();
    let UppKey = key.toUpperCase();

    let fullKey = '';

    let UppKeyNum = [];
    let MessageNum = [];

    let resultNum = [];
    let resultChar = [];

      //Find the string of key which equal to message length

      for(let i = 0; i < UppMessage.length; i++) {

          if(i < UppKey.length){
            fullKey += UppKey[i];
          } else {
            fullKey += UppKey[ i % UppKey.length];
          }
        
        if(alphabet.indexOf(UppMessage[i]) === -1){
            MessageNum[i] = UppMessage[i];
            continue;
        }


      // Find the array of numbers of mwssage
        MessageNum[i] = alphabet.indexOf(UppMessage[i]);  
        
      }


      // Find the array of numbers of key
      for(let i = 0; i < fullKey.length; i++) {
        UppKeyNum[i] = alphabet.indexOf(fullKey[i]); 
        }


    //Find the numeric code (numbers of key + numbers of message)

    for(let i = 0, k = 0; i < UppMessage.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultNum[i] = UppMessage[i];
        } else {
          resultNum[i] = MessageNum[i] + UppKeyNum[k];
          k++
        }

    //if values > 25
        resultNum = resultNum.map(function(item, index, array) {
            if(item > 25){
                return item = item - 26;
            }
            return item
        });
    }

    //Find the array of symbols

    for(let i = 0; i < resultNum.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultChar[i] = UppMessage[i];
            continue;
        }
        resultChar[i] = alphabet[resultNum[i]]; 
    }

    let resultCrypt = resultChar.join(''); 

    
    if (this.mod != false){
      return resultCrypt
    }
    return resultCrypt.split('').reverse().join('')
  } 



  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage == 'undefined' || typeof key == 'undefined' || arguments.length === 0)
    {
      throw new Error('Incorrect arguments!')
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let UppMessage = encryptedMessage.toUpperCase();
    let UppKey = key.toUpperCase();

    let fullKey = '';

    let UppKeyNum = [];
    let MessageNum = [];

    let resultNum = [];
    let resultChar = [];

      //Find the string of key which equal to message length

      for(let i = 0; i < UppMessage.length; i++) {

          if(i < UppKey.length){
            fullKey += UppKey[i];
          } else {
            fullKey += UppKey[ i % UppKey.length];
          }
        
        if(alphabet.indexOf(UppMessage[i]) === -1){
            MessageNum[i] = UppMessage[i];
            continue;
        }

      // Find the array of numbers of mwssage
        MessageNum[i] = alphabet.indexOf(UppMessage[i]);  
        
      }

     // Find the array of numbers of key
      for(let i = 0; i < fullKey.length; i++) {
        UppKeyNum[i] = alphabet.indexOf(fullKey[i]); 
        }


    //Find the numeric code (numbers of key + numbers of message)

    for(let i = 0, k = 0; i < UppMessage.length; i++) { 
      if(alphabet.indexOf(UppMessage[i]) === -1 ) {
          resultNum[i] = UppMessage[i];
      } else {
          if ((MessageNum[i] - UppKeyNum[k]) >= 0) {
              resultNum[i] = MessageNum[i] - UppKeyNum[k];
          }
          else {
              resultNum[i] = MessageNum[i] + 26 - UppKeyNum[k];
          }
        k++; 
      }
  }
    //Find the array of symbols

    for(let i = 0; i < resultNum.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultChar[i] = UppMessage[i];
            continue;
        }
        resultChar[i] = alphabet[resultNum[i]]; 
    }

    let resultCrypt = resultChar.join(''); 

    
    if (this.mod != false){
      return resultCrypt
    }
    return resultCrypt.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
