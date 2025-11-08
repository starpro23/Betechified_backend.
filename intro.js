
const prompt = require("prompt-sync")();

const name = prompt("Enter your name");
const age = prompt(" Enter your age");
const technologies = prompt(" Enter your favourite programming languages");

const favoriteLanguages = technologies.split(',').map(lang=> lang.trim());

console.log(` Hi? I am ${name}. ${age} years old. I love using ${favoriteLanguages.join (", ")}.`);

