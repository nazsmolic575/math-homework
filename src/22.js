function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function sumNumbers(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

function findLongestSubstringWithoutRepeatingChars(str) {
  const charSet = new Set();
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (!charSet.has(str[end])) {
      ++end;
      charSet.add(str[end]);
    } else {
      while (start <= end && charSet.size >= 2) {
        const firstChar = str[start];
        const secondChar = str[start + 1];
        if (firstChar === secondChar) break;
        start += 1;
      }
      let end = Math.min(end, start + 1);
    }
  }

  return String.fromCharCode.apply(null, Array.from(charSet).map(c => c.charCodeAt(0)));
}

function isPalindrome(s) {
  const str = s.split('').reverse().join('');
  return str === s;
}
