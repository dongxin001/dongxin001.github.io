var iScale = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no"/>');
var iWidth = document.documentElement.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize = iWidth / 16 + 'px';

window.onload = function(){
	var oB_box = document.getElementsByClassName('carousel'); 
	var obl_box = document.getElementById('bl_box');
	var aBlli = obl_box.getElementsByTagName('li');
	
	var Bw = aBlli.length*aBlli[0].offsetWidth;//动态获取一下轮播图盒子的宽度
	
	obl_box.style.width = Bw + 'px';
	
	document.ontouchmove = function(ev){
		ev.preventDefault();
	}
	
	var downX = 0;
	var downLeft = 0;
	obl_box.ontouchstat = function(ev){
		var touchs = ev.changedTouches[0];//在触屏上触摸屏幕的手指的集合
		downX = touchs.pageX; 
		downLeft = this.offsetLeft;
		obl_box.ontouchmove = function(ev){
			var touchs = ev.changedTouches[0];//在触屏上触摸屏幕的手指的集合
			this.style.left = touchs.pageX - downX + downLeft + 'px';
			console.log(this.style.left)
		}
		obl_box.ontouchend = function(){
			obl_box.ontouchmove = null;
			obl_box.ontouchend =null;
		}
	}
	
	
	
	
	
	
	
}
