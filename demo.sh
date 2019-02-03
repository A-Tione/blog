if [ -d $1 ]; then
    echo "$1 已经存在了"
    exit 1
else
    mkdir $1
    cd $1
    mkdir css js
    echo '
    <!doctype>
    <title>Hello</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <script src="js/main.js"></script>
    <h1>Hi</h1>
    '>index.html
    echo '
    h1{color:red;}
    '>css/style.css
    echo '
    var string = "Hello word"
    alert(string)
    '>js/main.js
    exit 0
fi
