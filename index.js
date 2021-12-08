const stringLength = string => {
  let newString = string.split('');
  let strCount = 0;
  for(let i=1; i<=newString.length; i++) {
    strCount++;
}
  if(strCount > 1 && strCount <= 10) {
  return strCount;
}else {
  throw new Error('String should have character length between 1 and 10');
}
}

const reverseString = str => {
  let result = "";
  for( let character of str ) {
    result = character + result;
}
return result;
}

const capitalize = string => {
    let newString = string.toLowerCase();
    if(typeof(newString) === 'string') {
      return newString.charAt(0).toUpperCase() + newString.slice(1) 
    } else {
        throw new Error('Error')
    }
  }

module.exports = { stringLength:stringLength, reverseString:reverseString, capitalize:capitalize };
