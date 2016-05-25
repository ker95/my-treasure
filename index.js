var lunbo = document.getElementsByClassName("lunbo");
var aimg = document.querySelectorAll(".lunbo img")
var content = document.getElementById("content");
var li = content.getElementsByTagName("li");
var next = content.getElementsByClassName("next")[0];

var num1 = 0;
var arrimg1 = ['img/当天购物就送宝箱动态.gif', 'img/登陆就送宝箱动态.gif', 'img/惊喜宝箱动态.gif', 'img/满就送宝箱动态.gif', 'img/手淘万能动态.gif', 'img/心愿宝箱动态.gif', 'img/当天购物就送宝箱动态.gif', 'img/当天购物就送宝箱动态.gif', 'img/当天购物就送宝箱动态.gif']
var arrimg2 = ['img/当天购物就送宝箱静态.png', 'img/登陆就送宝箱静态.png', 'img/惊喜宝箱静态.png', 'img/满就送宝箱静态.png', 'img/手淘万能静态.png', 'img/心愿宝箱静态.png', 'img/当天购物就送宝箱静态.png', 'img/当天购物就送宝箱静态.png', 'img/当天购物就送宝箱静态.png']

var span = content.getElementsByTagName('span')[1];
var num3 = span.innerHTML;
var pun = true;

function fn1(){
	for (var j = 0; j < li.length; j++) {
		lunbo[j].style.display = "none";
		li[j].style.background = "#cdcbcb";
	}
	li[num1].style.background = "blue";
	lunbo[num1].style.display = "block";
}
fn1();
var num1=0;
for (var i = 0;i < li.length; i++) {
	li[i].index=i;
	li[i].onclick = function (){
		num1=this.index;
		fn1()
	}
}

next.onclick = function (){
	num1 ++;
	if (num1 > li.length - 1){
		num1=0;
	}
	fn1()
}

for(var i = 0;i < aimg.length;i ++){
	aimg[i].index = i;

	aimg[i].onclick = function(){
		if (num3 == 0) {
			pun = false;
			alert("宝箱已开完，请获取宝箱")
		}
		if (pun){
			var num2 = 0;	
			num2 = this.index;
			this.src = arrimg1[num2]
			setTimeout(function(){
				aimg[num2].src = arrimg2[num2];
			},1000)
			num3 --;
			span.innerHTML = num3;
		}
		
	}
}