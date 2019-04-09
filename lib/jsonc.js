/*
  jsonc for node require.
  @license MIT © 2019 aMarCruz
*/
const fs = require('fs')
const R = require('perf-regexes')

const TCOMMA = /,(?=\s*[}\]])/.source

// Matches double-quoted strings and triling commas
const RCM = new RegExp([R.JS_DQSTR.source, TCOMMA].join('|'), 'g')

// Matches double-quoted strings and comments
const RSC = new RegExp(
  [R.JS_DQSTR.source, R.JS_SLCMNT.source, R.JS_MLCMNT.source].join('|'),
  'g'
)

/**
 * Handles possible error with a BOM mark in the source by replacing it with
 * an EOL (it allows the parser regex identify the start of the first line).
 *
 * The mark is preserved because, if there are replacements, the edited buffer
 * will be obtained from magicStr, which will not touch the mark, and if there
 * are not, the caller will use the original source.
 *
 * @param {string} str The original source
 */
const stripBOMmark = str => {
  return str.charCodeAt(0) === 0xfeff ? str.slice(1) : str
}

/**
 * If `s` is a comment return an empty string, else return `s`.
 * @param {string} str
 */
const stripComment = str => {
  return str[0] === '/' ? '' : str
}

/**
 * If `s` is a comma return an empty string, else return `s`.
 * @param {string} str
 */
const stripCommas = str => {
  return str[0] === ',' ? '' : str
}

/**
 * Removes any BOM mark, JS-like comments and trailing commas.
 *
 * @param {*} str
 */
const cleanStr = str => {
  return stripBOMmark(str)
    .replace(RSC, stripComment)
    .replace(RCM, stripCommas)
}

/**
 * Strip comments from the json, then parse it and returns the result.
 *
 * @param {string} module
 * @param {string} filename
 */
require.extensions['.json'] = function jsonc (module, filename) {
  const content = fs.readFileSync(filename, 'utf8')

  try {
    module.exports = JSON.parse(cleanStr(content))
  } catch (err) {
    err.message = filename + ': ' + err.message
    throw err
  }
}
