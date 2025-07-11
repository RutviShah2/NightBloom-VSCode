// 🌸 Welcome to the NightBloom Theme Preview
// Crafted with love by Rutvi Shah 💖

// ------------------ 🌙 Imports ------------------
import fs from 'fs';
import path from 'path';

// ------------------ 🎨 Theme Info ------------------
const creator   = 'Rutvi Shah';
const themeName = 'NightBloom';
let version     = 0.0.4;
const vibes     = ['Calm', 'Elegant', 'Magical'];

// ------------------ 💬 Function ------------------
function greet(user) {
    const message = `Hey ${user}, welcome to ${themeName} ✨`;
    console.log(message);
    return message;
}

// ------------------ 🧱 Class ------------------
class Theme {
    constructor(name, author) {
        this.name   = name;
        this.author = author;
    }

    describe() {
        return `${this.name} is crafted with care by ${this.author} 💜`;
    }
}

// ------------------ 🧩 Object ------------------
const theme = new Theme(themeName, creator);

// ------------------ 🔁 Loop ------------------
for (let i = 0; i < vibes.length; i++) {
    console.log(`${i + 1}. ${vibes[i]}`);
}

// ------------------ 🧪 Try-Catch ------------------
try {
    greet('Rutvii');
    console.log(theme.describe());
    fs.writeFileSync('sample.txt', 'NightBloom Preview File');
} catch (error) {
    console.error('Something went wrong 😢:', error);
}

// ------------------ 🎨 Colors & Numbers ------------------
const softLavender = "#D6ACFF";   // Light Lavender 💜
const blushPink    = "#FFD1DC";   // Blush Pink 🌸
const themeStrength = 100;        // Aesthetic Power 💅✨

/*
    ✅ Imports
    ✅ Variables & Constants
    ✅ Functions & Loops
    ✅ Classes & Objects
    ✅ Strings, Numbers, Arrays
    ✅ Try/Catch Block
    ✅ Hex Colors
    ✅ Comments
    ✅ Console Output
*/
