Page({
	data: {
	    globalData: 'I am global data',
        activityList: [
            {
                activityImg: '',
                activityName: '鲁能VS国安',
                activityLocation: '北京工人体育场',
                activityPoi: '',//留作接入腾讯地图
                activityDate: 1543759535822,
                activityPrice: '100元',
                activityStatus: 'apply',//报名状态：apply.可报名，registered，已报名，finished.已结束，underway.进行中
            },
            {
                activityImg: '',
                activityName: '鲁能VS权健',
                activityLocation: '海教园体育场',
                activityPoi: '',//留作接入腾讯地图
                activityDate: 1543759535822,
                activityPrice: 'AA制',
                activityStatus: 'apply',//报名状态：apply.可报名，registered，已报名，finished.已结束，underway.进行中
            },
            {
                activityImg: '',
                activityName: '鲁能VS泰达',
                activityLocation: '水滴',
                activityPoi: '',//留作接入腾讯地图
                activityDate: 1548759535822,
                activityPrice: '免费',
                activityStatus: 'apply',//报名状态：apply.可报名，registered，已报名，finished.已结束，underway.进行中
            },
            {
                activityImg: '',
                activityName: '鲁能VS国安',
                activityLocation: '北京工人体育场',
                activityPoi: '',//留作接入腾讯地图
                activityDate: 1543959535822,
                activityPrice: '100元',
                activityStatus: 'registered',//报名状态：apply.可报名，registered，已报名，finished.已结束，underway.进行中
            },
            {
                activityImg: '',
                activityName: '鲁能VS河北',
                activityLocation: '廊坊',
                activityPoi: '',//留作接入腾讯地图
                activityDate: 1543759535822,
                activityPrice: 'AA制',
                activityStatus: 'finished',//报名状态：apply.可报名，registered，已报名，finished.已结束，underway.进行中
            },
        ],
	},
    onLaunch: function () {
    	
    },
    onShow: function () {
		wx.setNavigationBarTitle({
	        title: "活动页面"
	    });     	
      	console.log('这是活动页面');
    },
    onHide: function () {
      	
    },
});