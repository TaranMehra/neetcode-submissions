class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedStr = "";
    for (let word of strs) {
      let wordOne = "";
      encodedStr += "w"; //String.charCodeAt(w);
      for (let i = 0; i < word.length; i++) {
        wordOne += "c"; // String.charCodeAt(c);
        wordOne += word.charCodeAt(i);
        wordOne += "c"; // String.charCodeAt(c);
      }
      encodedStr += wordOne;
      encodedStr += "w"; //String.charCodeAt(w);
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  

	decode(str) {
  const parts = str.split("w");
  const res = [];

  for (let i = 1; i < parts.length; i += 2) {
    let word = "";
    for (const c of parts[i].split("c")) {
      if (c.length > 0) word += String.fromCharCode(Number(c));
    }
    res.push(word);
  }
  return res;
}
}