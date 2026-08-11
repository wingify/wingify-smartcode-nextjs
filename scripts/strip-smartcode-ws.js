/**
 * Collapse escaped newlines + indentation inside compiled string literals.
 * Must use [\t ] (tab or space only). [\\t ] also matches the letter "t" and
 * corrupts identifiers like try / t.src / this.addScript.
 */
const fs = require('fs');

const file = 'dist/WingifyScript.js';
const code = fs.readFileSync(file, 'utf8');
fs.writeFileSync(file, code.replace(/\\n[\t ]*/g, ''));
