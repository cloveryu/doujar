function BookShelfCtrl($scope) {
  $scope.categories = [
	{
		"name": "软件技术",
		"books": [
		    {"title": "Hadoop in Action",
		     "isbn": "9781935182191",
			 "douban_id": "4049942", 
			 "cover_url": "http://img3.douban.com/lpic/s8512763.jpg"},
		    {"title": "Statistical Analysis with R",
		     "isbn": "9781849512084",
			 "douban_id": "5347142",
			 "cover_url": "http://img3.douban.com/lpic/s7041795.jpg"},
		    {"title": "Agile Software Requirements",
		     "isbn": "9780321635846",
			 "douban_id": "5385883",
			 "cover_url": "http://img3.douban.com/lpic/s7080344.jpg"}
		]
	},
	{
		"name": "管理财经",
		"books": [
		    {"title": "精益医院",
		     "isbn": "9787111338536",
			 "douban_id": "6307962", 
			 "cover_url": "http://img5.douban.com/lpic/s5779859.jpg"},
		    {"title": "麦肯锡工具",
		     "isbn": "9787111283553",
			 "douban_id": "4200631",
			 "cover_url": "http://img3.douban.com/lpic/s6111753.jpg"}
		]
	},
	{
		"name": "哲学人文",
		"books": [
		    {"title": "Justice",
		     "isbn": "9780374180652",
			 "douban_id": "4050041", 
			 "cover_url": "http://img3.douban.com/lpic/s4222801.jpg"},
		    {"title": "黑天鹅",
		     "isbn": "9787508630304",
			 "douban_id": "6854525",
			 "cover_url": "http://img3.douban.com/lpic/s8478918.jpg"},
		    {"title": "思考，快与慢",
		     "isbn": "9787508633558",
			 "douban_id": "10785583",
			 "cover_url": "http://img5.douban.com/lpic/s10345719.jpg"},
		    {"title": "民族与古代中国史",
		     "isbn": "9787543446298",
			 "douban_id": "1031240",
			 "cover_url": "http://img3.douban.com/lpic/s1453606.jpg"}
		]
	},
	{
		"name": "休闲阅读",
		"books": [
		    {"title": "日本漫画为什么有趣",
		     "isbn": "9787513304672",
			 "douban_id": "7060214", 
			 "cover_url": "http://img3.douban.com/lpic/s8817576.jpg"},
		    {"title": "巴别塔之犬",
		     "isbn": "9787544237017",
			 "douban_id": "2139305",
			 "cover_url": "http://img3.douban.com/lpic/s2609483.jpg"}
		]
	}
  ];
}