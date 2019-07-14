!function (){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        let id = setInterval(()=>{
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if (n>= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code = '.preview-wrapper{\n' +
        '    position: relative;\n' +
        '    width: 100%;\n' +
        '    height: 165px;\n' +
        '\n' +
        '}\n' +
        '/*先画皮卡丘的脸*/\n' +
        '.preview{\n' +
        '    width: 100%;\n' +
        '    height: 50vh;\n' +
        '    display: flex;\n' +
        '    justify-items: center;\n' +
        '    align-items: center;\n' +
        '    background: rgb(255,220,66);\n' +
        '}\n' +
        '/*再画皮卡丘的鼻子*/\n' +
        '.nose{\n' +
        '    width: 0;\n' +
        '    height: 0;\n' +
        '    border-style: solid;\n' +
        '    border-width: 12px;\n' +
        '    border-color: black transparent transparent;\n' +
        '    border-radius: 11px;\n' +
        '    margin-left: -12px;\n' +
        '    position: absolute;\n' +
        '    left: 50%;\n' +
        '    top: 48%;\n' +
        '}\n' +
        '/*再画眼睛*/\n' +
        '.eye{\n' +
        '    width: 49px;\n' +
        '    height: 49px;\n' +
        '    background: #2e2e2e;\n' +
        '    position: absolute;\n' +
        '    top: 20%;\n' +
        '    border-radius: 50%;\n' +
        '    border: 2px solid #000000;\n' +
        '}\n' +
        '.eye::before{\n' +
        '    content: \'\';\n' +
        '    display: block;\n' +
        '    width: 24px;\n' +
        '    height: 24px;\n' +
        '    background: white;\n' +
        '    position: absolute;\n' +
        '    border-radius: 50%;\n' +
        '    left: 6px;\n' +
        '    top: -2px;\n' +
        '    border: 2px solid #000;\n' +
        '}\n' +
        '.eye.left{\n' +
        '    left: 60%;\n' +
        '}\n' +
        '.eye.right{\n' +
        '    right: 60%;\n' +
        '}\n' +
        '/*再画脸蛋*/\n' +
        '.face{\n' +
        '    width: 68px;\n' +
        '    height: 69px;\n' +
        '    background: #FC0D1C;\n' +
        '    border: 2px solid black;\n' +
        '    border-radius: 50%;\n' +
        '    position: absolute;\n' +
        '    top: 95%;\n' +
        '}\n' +
        '.face.left{\n' +
        '    left: 80%;\n' +
        '}\n' +
        '.face.right{\n' +
        '    right: 80%;\n' +
        '}\n' +
        '/*再画嘴唇*/\n' +
        '.lip{\n' +
        '    position: absolute;\n' +
        '    top: 70%;\n' +
        '    width: 80px;\n' +
        '    height: 20px;\n' +
        '    background: rgb(255,220,66);\n' +
        '    border: 3px solid black;\n' +
        '    border-bottom-right-radius: 40px 20px;\n' +
        '    border-top: none;\n' +
        '    border-left: none;\n' +
        '    transform: rotate(18deg);\n' +
        '    z-index: 1;\n' +
        '}\n' +
        '.lips{\n' +
        '    position: absolute;\n' +
        '    top: 70%;\n' +
        '    width: 80px;\n' +
        '    height: 20px; z-index: ;\n' +
        '    background: rgb(255,220,66);\n' +
        '    border: 3px solid black;\n' +
        '    border-bottom-left-radius: 40px 20px;\n' +
        '    border-top: none;\n' +
        '    border-right: none;\n' +
        '    transform: rotate(-18deg);\n' +
        '    z-index: 1;\n' +
        '}\n' +
        '.lip.left{\n' +
        '    left: 50%;\n' +
        '}\n' +
        '.lips.right{\n' +
        '    right: 50%;\n' +
        '}\n' +
        '.lowerLipBox{\n' +
        '    position: absolute;\n' +
        '    top: 125px;\n' +
        '    left: 50%;\n' +
        '    margin-left: -90px;\n' +
        '    width: 180px;\n' +
        '    height: 140px;\n' +
        '    overflow: hidden;\n' +
        '}\n' +
        '/*最后加上舌头*/\n' +
        '.lowerLip{\n' +
        '    width: 180px;\n' +
        '    height: 2000px;\n' +
        '    background: rgb(166,20,18);\n' +
        '    border-radius: 180px/800px;\n' +
        '    border: 2px solid black;\n' +
        '    position: absolute;\n' +
        '    bottom: 0;\n' +
        '    left: 50%;\n' +
        '    margin-left: -90px;\n' +
        '}\n' +
        '/*我把这只胖胖的皮卡丘送给你  to:罗咪*/'
    writeCode('',code).call()
}.call()