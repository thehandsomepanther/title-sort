'use strict'
var assert = require('assert')
var titleSort = require('./')

var books = [
	"The Elements of Typographic Style",
	"The Vital Question: Energy, Evolution, and the Origins of Complex Life",
	"Killing and Dying",
	"A Contract with God",
	"An Abundance of Katherines",
	"The Stack: On Software and Sovereignty",
	"The 26 Letters",
	"The Modern Magazine",
	"The New Typography",
	"A View of Early Typography up to Around 1600",
	"79 Short Essays on Design"
]

var bands = [
	"The xx",
	"A Tribe Called Quest",
	"The Bad Plus",
	"The Beach Boys",
	"The Bossa Nova Modern Quartet",
	"Chance the Rapper"
]

assert.deepEqual(books.sort(titleSort),
	['The 26 Letters',
	'79 Short Essays on Design',
	'An Abundance of Katherines',
	'A Contract with God',
	'The Elements of Typographic Style',
	'Killing and Dying',
	'The Modern Magazine',
	'The New Typography',
	'The Stack: On Software and Sovereignty',
	'A View of Early Typography up to Around 1600',
	'The Vital Question: Energy, Evolution, and the Origins of Complex Life']
)

assert.deepEqual(bands.sort(titleSort),
	['The Bad Plus',
  'The Beach Boys',
  'The Bossa Nova Modern Quartet',
  'Chance the Rapper',
  'A Tribe Called Quest',
  'The xx']
)

console.log("All tests pass! 👍🏾");
