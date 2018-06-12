/*
备注
city: 城市（在程序载入时获取一次）
count: 返回结果数量
baiduAK: 百度地图AK
apiList: api列表
hotKeyword: 搜索页热门关键词关键词
hotTag: 搜索页热门类型
bannerList: 首页（热映页）轮播图列表列表
skinList: “我的”页面背景列表
shakeSound: 摇一摇音效地址（带url表示远程地址）
shakeWelcomeImg: 摇一摇欢迎图片
*/
var url = 'https://static.sesine.com/wechat-weapp-movie'
module.exports = {
    city: '',
    count: 20,
    baiduAK: 'Y1R5guY8Y2GNRdDpLz7SUeM3QgADAXec',
    apiList: {
        popular: 'http://t.yushu.im/v2/movie/in_theaters',
        coming: 'http://t.yushu.im/v2/movie/coming_soon',
        top: 'http://t.yushu.im/v2/movie/top250',
        search: {
            byKeyword: 'http://t.yushu.im/v2/movie/search?q=', 
            byTag: 'http://t.yushu.im/v2/movie/search?tag='
        },
        filmDetail: 'http://t.yushu.im/v2/movie/subject/',
        personDetail: 'http://t.yushu.im/v2/movie/celebrity/',
        baiduMap: 'https://api.map.baidu.com/geocoder/v2/'
    },
    hotKeyword: ['这个杀手不太冷', '驴得水', '海贼王之黄金城', '西游伏妖片', '我在故宫修文物', '你的名字'],
    hotTag: ['动作', '喜剧', '爱情', '悬疑']
}