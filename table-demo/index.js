let head = '<tr>' +
    '<th>32</th>' +
    '<th>雅思写作</th>' +
    '<th>老师QA</th>' +
    '<th>助教A、助教B</th>' +
    '<th>创建时间</th>' +
    '<th>更新时间</th>' +
    '<th>更新人</th>' +
    '<th><button>新建录播课</button><button>编辑</button></th>' +
    '</tr>'

let data = '<tr>' +
    '<td>3</td>' +
    '<td>节名称</td>' +
    '<td>老师A</td>' +
    '<td>助教B</td>' +
    '<td>录播</td>' +
    '<td>上课开始-结束时间</td>' +
    '<td>上架</td>' +
    '<td><button>课件</button><button>编辑</button>' +
    '</td>' +
    '</tr>'

let tab = document.querySelector('#tableBox')

for (let i = 0; i < 3; i++) {
    $("#tableBox").append('<table id="table' + i + '">' + head + '</table>')
    for (let e = 0; e < 3; e++) {
        $("#table" + i).append(data)
    }
}