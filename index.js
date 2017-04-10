'use strict'
module.exports = function(a, b) {
  let aTitle = cleanFront(a)
  let bTitle = cleanFront(b)
  return aTitle.localeCompare(bTitle)
}

function cleanFront(str) {
  str = str.trim()
  let original = str
  let re = /^(The\s|A\s|An\s|[^a-zA-Z\d])/i
  while (str.match(re)) {
    str = str.replace(re, "")
  }

  return str.length > 0 ? str : original
}
