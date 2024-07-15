const crypto = require("crypto");


function generateSecret() {
    return crypto.randomBytes(32).toString("hex");
}

const secret = generateSecret();
console.log("Generated Secret:", secret);