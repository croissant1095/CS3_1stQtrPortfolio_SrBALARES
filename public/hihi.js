console.log("Hello World");
console.log("")
rl = require('readline');
rl1 = rl.createInterface({
    input: process.stdin,
})

rl1.on('line', display)

function display(line) {
    console.log("You are", line, "years old.")
    rl1.close()
}

rl1.on('close', () => {
    console.log("Try this again!")
})