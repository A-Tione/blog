var whiteWebSdk = new WhiteWebSdk();
var miniToken = 'WHITEcGFydG5lcl9pZD1DYzlFNTJhTVFhUU5TYmlHNWJjbkpmVThTNGlNVXlJVUNwdFAmc2lnPTE3Y2ZiYzg0ZGM5N2FkNDAxZmY1MTM0ODMxYTdhZTE2ZGQ3MTdmZjI6YWRtaW5JZD00JnJvbGU9bWluaSZleHBpcmVfdGltZT0xNTY2MDQwNjk4JmFrPUNjOUU1MmFNUWFRTlNiaUc1YmNuSmZVOFM0aU1VeUlVQ3B0UCZjcmVhdGVfdGltZT0xNTM0NDgzNzQ2Jm5vbmNlPTE1MzQ0ODM3NDYzMzYwMA';

var url = 'https://cloudcapiv4.herewhite.com/room?token=' + miniToken;
var requestInit = {
    method: 'POST',
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({
        name: '我的第一个 White 房间',
        limit: 100, // 房间人数限制
    }),
};


fetch(url, requestInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        return whiteWebSdk.joinRoom({
            uuid: json.msg.room.uuid,
            roomToken: json.msg.roomToken,
        });
    })
    .then(function(room) {
        room.bindHtmlElement(document.getElementById('whiteboard'));
        room.refreshViewSize();//刷新白板的尺寸,当白板所在的div尺寸发生变化时，必须通知SDK
        room.setMemberState({
            currentApplianceName: "pencil",//切换工具
            strokeWidth: 10//strokeWidth线条粗细
        });
        // 当前工具，修改它会切换工具。有如下工具可供挑选：
        // 1. selector 选择工具
        // 2. pencil 铅笔工具
        // 3. rectangle 矩形工具
        // 4. ellipse 椭圆工具
        // 5. eraser 橡皮工具
        // 6. text 文字工具
        // currentApplianceName: string;
        // 选择工具半径，越大选择工具越容易点选
        // selectorRadius: number;
        // 线条的颜色，将 RGB 写在一个数组中。形如 [255, 128, 255]。
        // strokeColor: [number, number, number];
        // 线条的粗细
        // strokeWidth: number;
        // 文字的字号
        // textSize: number;
    });
