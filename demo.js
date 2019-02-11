let fs = require('fs');
let dirName = process.argv[2];
fs.mkdirSync('./'+dirName);
process.chdir('./'+dirName);
fs.mkdirSync('css');
fs.mkdirSync('js');

fs.writeFileSync('./index.html','<!doctype>\n' +
    '    <title>Hello</title>\n' +
    '    <link href="css/style.css" rel="stylesheet" type="text/css">\n' +
    '    <script src="js/main.js"></script>\n' +
    '    <h1>Hi</h1>');
fs.writeFileSync('css/style.css','h1{color:red;}\n' +
    '    \'>css/style.css');
fs.writeFileSync('js/main.js',' var string = "Hello word"\n' +
    '    alert(string)');

process.exit(0);