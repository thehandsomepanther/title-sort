# title-sort

Sort strings as if they were titles. Specifically, this means the words "The", "A", and "An" as well as any non-alphanumeric characters at the beginning are ignored.

## use
```javascript
let titleSort = require('title-sort')
let books = [
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

let sortedBooks = books.sort(titleSort)
// sortedBooks =  [
//  'The 26 Letters',
//  '79 Short Essays on Design',
//  'An Abundance of Katherines',
//  'A Contract with God',
//  'The Elements of Typographic Style',
//  'Killing and Dying',
//  'The Modern Magazine',
//  'The New Typography',
//  'The Stack: On Software and Sovereignty',
//  'A View of Early Typography up to Around 1600',
//  'The Vital Question: Energy, Evolution, and the Origins of Complex Life'
// ]
```
