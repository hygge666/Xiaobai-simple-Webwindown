$(function(){
    var tools=[
        {name:'此电脑',url:'http://hy123.ysepan.com/',icon:'./img/imageres_2.ico'},
        {name:'浏览器',url:'https://itab.hylove.top/',icon:'./img/k.webp'},
        {name:'早报-快讯',url:'https://www.woshipm.com/news',icon:'./img/zaobao.jpg'},
        {name:'每天1分钟知晓天下事',url:'https://www.123kk.cn/index/',icon:'./img/everyday60s.jpg'},
        {name:'小白top主页①',url:'https://one.hylove.top/',icon:'./img/a.webp'},
        {name:'小白时钟主页②',url:'https://xiaobai.hylove.top/',icon:'./img/firsthometop.png'},
        {name:'小白星空主页③',url:'https://all.hylove.top/',icon:'./img/c.webp'},
        {name:'小白樱花引导页④',url:'https://lead.hylove.top/',icon:'./img/d.webp'},
        {name:'旗下官网',url:'https://xb.hylove.top/',icon:'./img/website-allpage.jpg'},
        {name:'路遥空间',url:'https://ly1.hylove.top/',icon:'./img/luyaohome.jpg'},
        
        {name:'随机视频1',url:'https://97by.cn/sj/',icon:'./img/1girl.jpg'},
        {name:'随机视频2',url:'https://mm.hylove.top/',icon:'./img/2girl.jpg'},
        {name:'安全检测',url:'https://detail.aiuys.com/',icon:'./img/iphone-search.jpg'},
        {name:'工具箱',url:'https://tool.browser.qq.com/',icon:'./img/qbtool-latest.png'},
        {name:'站点监控',url:'http://status.hylove.top/',icon:'./img/status.png'},
        {name:'壁纸图片',url:'https://pic.netbian.com/',icon:'./img/j.webp'},

        
        {name:'游戏',url:'https://xingye.me/game/index.php',icon:'./img/g.webp'},
        {name:'影视',url:'https://www.foxiys.cc/',icon:'./img/h.webp'},
        {name:'直播',url:'./tool/ds',icon:'./img/l.webp'},
        {name:'音乐',url:'https://tools.liumingye.cn/music/?page=searchPage#/recent',icon:'./img/music.jpg'},
        {name:'mmplayer在线音乐播放器',url:'https://netease-music.fe-mm.com/#/music/playlist',icon:'./img/music3.jpg'},
        {name:'音乐解析',url:'https://music.wujiyan.cc/',icon:'./img/music4.jpg'},

        {name:'AIGC资讯',url:'https://www.1ai.net/kuaixun',icon:'./img/aigcnws.png'},
        {name:'综合热榜',url:'https://fre321.com/news/',icon:'./img/fre123hotnews.png'},
        {name:'吾爱破解52pj',url:'https://www.52pojie.cn/',icon:'./img/52.png'},
        {name:'哔哩哔哩bilibili',url:'http://bilibili.com/',icon:'./img/bilibili.png'},
        
        
        

    ]
    for(var i in tools){
        var tool=tools[i]
        var item="<li class='pc-icon desktoptools' data='"+JSON.stringify(tool)+"'>"+
        '<img class="mypc" src="'+tool.icon+'" />'+
        '<div>'+tool.name+'</div>'+
        '</li>';
        $('.desktop-list').append(item)
    }

   
    $('.desktoptools').click(function(){
        var data =JSON.parse($(this).attr('data'))
       // $('.right-top img').eq(0).click()
        layer.open({
            type: 2,
            title: data.name,
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['88%', '95%'],
            content: data.url
          });
    })



})
