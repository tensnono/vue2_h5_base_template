

/**
 * @param { * } str 
 * @param { int } beginLen 
 * @param { int } endLen 
 * @returns 
 */
export  function hideString(str,beginLen,endLen) {
  var tempStr='';
  var len = str.length;
  var firstStr = str.substr(0,beginLen);
  var lastStr = str.substr(endLen);
  var middleStr = str.substring(beginLen, len-Math.abs(endLen)).replace(/[\s\S]/ig, '*');
  tempStr = firstStr + middleStr + lastStr;
  return tempStr;
}

