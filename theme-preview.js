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
const plumPurple = "#DDA0DD";     // Plum Purple for Keywords 💜
const lightPink = "#FFB6C1";      // Light Pink for Strings 🌸
const skyBlue = "#87CEEB";        // Sky Blue for Variables 🔵
const hotPink = "#FF69B4";        // Hot Pink for Functions 💖
const khakiYellow = "#F0E68C";    // Khaki Yellow for Numbers 💛
const mediumPurple = "#9370DB";   // Medium Purple for Tags 🟣
const goldYellow = "#FFD700";     // Gold Yellow for Bold ✨
const lavender = "#E6E6FA";       // Lavender for Italic 💜
const steelBlue = "#B0C4DE";      // Light Steel Blue for Underline 🔷
const silver = "#C0C0C0";         // Silver for Punctuation ⚪
const paleGreen = "#98FB98";      // Pale Green for Quotes 🌿
const limeGreen = "#32CD32";      // Lime Green for Inserted 🟢
const tomatoRed = "#FF6347";      // Tomato Red for Deleted 🔴
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
