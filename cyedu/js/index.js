window.onload = function(){
	document.body.scrollTop = 0;
//	导航
	var oBody = document.getElementsByTagName('body')[0];
	var oWarp2 = document.getElementById('warp2');
	var aAnchor = document.getElementsByClassName('first_content');
	var oRnav = document.getElementById('rnav');
	var aLia = oRnav.getElementsByTagName('a');
	var m1 = 0;
	var m2 = 0;
	var end = 88;
	var timer1 = null;
	var timer2 = null;
	var rwidth = 0;
	var now = 0;
	var timer = null;
	
	for(var j=0;j<aLia.length;j++){	
		aLia[j].index = j;
		aLia[j].onmouseover = function(){
			clearInterval(timer1);
			var aLispan = aLia[this.index].getElementsByTagName('span')[0];
			rwidth = aLispan.offsetWidth;
			
			timer1 = setInterval(function(){
				m1++;
				aLispan.style.width = m1 +'px';
				m2 = m1;
				if(m1 >= end){
					m1 = 0;
					clearInterval(timer1);
				} 
		    },7); 
		}
		aLia[j].onmouseout = function(){
			
			var aLispan = aLia[this.index].getElementsByTagName('span')[0];
			rwidth = aLispan.offsetWidth;
			clearInterval(timer1);
			clearInterval(timer2);
			timer2 = setInterval(function(){
				m1 = 0;
				m2--;
				aLispan.style.width = m2 +'px';
				if(m2 < 1){
					m2 = 0;
					aLispan.style.width = m2 + 'px';
					clearInterval(timer2);
				} 
		    },5);
		}	
	}
	
	
	(function(){
		for(var j=0;j<aLia.length;j++){
			aLia[j].index = j;
			aLia[j].onclick = function(){
			
				if(this.index == 0 || this.index == 1){
					//var oScrollT = document.documentElement.scrollTop||document.body.scrollTop;
					//myscroll(now,this.index,oScrollT,aAnchor[this.index].offsetTop+400);
					oBody.scrollTop = aAnchor[this.index].offsetTop+400;
					//oBody.style.top = -(aAnchor[this.index].offsetTop+400)+'px';
				}else{
					//var oScrollT = document.documentElement.scrollTop||document.body.scrollTop;
					//myscroll(now,this.index,oScrollT,aAnchor[this.index].offsetTop);
					oBody.scrollTop = aAnchor[this.index].offsetTop;
					//oBody.style.top = -aAnchor[this.index].offsetTop+'px';
				}
				now = this.index;
			}
		}
		
//		function myscroll(old,newI,start,target){
//			var oScrollT = start;
//			clearInterval(timer);
//			timer = setInterval(function(){
//				var speed = target/30;
//				speed = speed>0?Math.ceil(speed):Math.floor(speed);
//				if(newI > old){
//					var speed = target/30;
//					speed = speed>0?Math.ceil(speed):Math.floor(speed);
//					oScrollT+=speed;
//					if(oScrollT >= target){
//						clearInterval(timer);
//					}
//				}else{
//					var speed = target/3;
//					speed = speed>0?Math.ceil(speed):Math.floor(speed);
//					oScrollT-=speed;
//					
//					if(oScrollT <= target ){
//						clearInterval(timer);
//					}
//				}
//				document.documentElement.scrollTop = oScrollT;
//				document.body.scrollTop = oScrollT;
//			},50);
//		}
	})()
	

	
//轮播图
	var oBa_a = document.getElementById('banner_all');
	var oBib = document.getElementById('ba_imgbox');
	var aBibl = oBib.children;
	var oBu = document.getElementById('ba_ul');
	var aBul = oBu.children;
	var iNow = 0;
	var oLi11 = aBibl[0];
	var zIndex = 1;
	var timer0 = null;
	for(var i=0;i<aBul.length;i++) {
	    aBul[i].index = i;
	    aBul[i].onclick = function(){
	        aBibl[this.index].style.zIndex = zIndex++;
	        iNow = this.index;
	        Fnlinear(this.index);
	    }
	}
	Fntimer0();
	
	oBa_a.onmouseover = function(){
		clearInterval(timer0);
	}
	oBa_a.onmouseout = function(){
		Fntimer0();
	}
	
	function Fntimer0(){
		timer0 = setInterval(function(){
		    iNow++;
		    if(iNow == aBul.length){
		        iNow = 0;
		    }
		    Fnlinear(iNow);
		},2000);
	}
	function Fnlinear(index){
//			console.log(this.index)
	        for(var i=0;i<aBul.length;i++){
	            aBul[i].className = '';//ol
	            aBibl[i].style.opacity = 0;//ali
	        }
	        aBul[index].className = 'show_color';
	        move(oLi11,{//ol
	            'opacity' : 0
	        },500,'linear');
	
	        move(aBibl[index],{//ali
	            'opacity' : 1
	        },500,'linear');
	        oLi11 = aBibl[index];
	    }
	
	
	
//	UI全栈设计师
	var oD_ico = document.getElementById('d_ico');
	var oPhrased_lt = document.getElementById('phrased_lt');
	var oPhrased_rt = document.getElementById('phrased_rt');
	var oPhrased_lb = document.getElementById('phrased_lb');
	var oPhrased_rb = document.getElementById('phrased_rb');
	var oLoops = document.getElementById('loops');
	var oSecurity_box = document.getElementById('security_box');
	var aPlt = document.getElementsByClassName('plt');
	
	drag(oD_ico,'top');
	
	oLoops.onmouseout = function(){
		oPhrased_lt.style.left = '0';
		oPhrased_lt.style.top = '0';
		oPhrased_rt.style.left = '585px';
		oPhrased_rt.style.top = '0';
		oPhrased_lb.style.left = '0';
		oPhrased_lb.style.top = '277px';
		oPhrased_rb.style.left = '585px';
		oPhrased_rb.style.top = '277px';
		oD_ico.style.top = '-50px';
	}
	
	function drag(obj,attr){
		obj.onmousedown = function(ev){
			var e = ev || event;   
			var disY = e.clientY - obj.offsetTop;
			if(obj.setCapture){
				obj.setCapture();
			}
			document.onmousemove = function(ev){
				var oEvent = ev || event;
				var oT = oEvent.clientY - disY;
				var oTn = -55;
				if(oT < 0){
					obj.style.top = oT + 'px';
				}
				if(oT <= oTn){
					obj.style.top = oTn + 'px';
				}
				
				if(oT >= 0){
					oPhrased_lt.style.left = '-585px';
					oPhrased_lt.style.top = '-277px';
					oPhrased_rt.style.left = '1170px';
					oPhrased_rt.style.top = '-277px';
					oPhrased_lb.style.left = '-585px';
					oPhrased_lb.style.top = '554px';
					oPhrased_rb.style.left = '1170px';
					oPhrased_rb.style.top = '554px';
				}
			}
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				if(obj.releaseCapture){
					obj.releaseCapture();
				}
			}
			return false;
		}
	}
	
//	课程大纲
	var oStack_c1 = document.getElementsByClassName('stack_c1')[0];
	var oStack_c2 = document.getElementsByClassName('stack_c2')[0];
	var oStack_c3 = document.getElementsByClassName('stack_c3')[0];
	var oStack_c4 = document.getElementsByClassName('stack_c4')[0];
	var oSc1_text1 = document.getElementById('sc1_text1');
	var oSc1_text2 = document.getElementById('sc1_text2');
	var oSc1_text3 = document.getElementById('sc1_text3');
	var oSc1_text4 = document.getElementById('sc1_text4');
	var oSc1_img1 = document.getElementById('sc1_img1');
	var oSc1_img2 = document.getElementById('sc1_img2');
	var oSc1_img3 = document.getElementById('sc1_img3');
	var oSc1_img4 = document.getElementById('sc1_img4');
		
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		addEvent(document,'DOMMouseScroll',domousewheel);
	}else{
		addEvent(document,'mousewheel',domousewheel);
	}
	
	function addEvent(obj,evType,evFn){
		if(obj.addEventListener){
			obj.addEventListener(evType,evFn,false);
		}else{
			obj.attachEvent('on'+evType,evFn);
		}
	}

	var otopnav = document.getElementById('topnav')
	
	window.onscroll = function(){
		domousewheel();
	}
	
	function domousewheel(){
		var it1 = oStack_c1.getBoundingClientRect().top;
		var it2 = oStack_c2.getBoundingClientRect().top;
		var it3 = oStack_c3.getBoundingClientRect().top;
		var it4 = oStack_c4.getBoundingClientRect().top;
		var ih1 = oStack_c1.clientHeight/2+20;
		
		if(it1 < ih1){
			oSc1_text1.style.top = '0';
			oSc1_img1.style.top = '0';
		}
		if(it3 < ih1){
			oSc1_text3.style.top = '0';
			oSc1_img3.style.top = '0';
		}
		if(it2 < ih1){
			oSc1_text2.style.opacity = '1';
			oSc1_img2.style.opacity = '1';
		}
		if(it4 < ih1){
			oSc1_text4.style.opacity = '1';
			oSc1_img4.style.opacity = '1';
		}
	}
	
//作品集锦
	var oCont_box = document.getElementById('container_box');
	var json3 = null;
	json3 = data3;
	//	var len=json3.length;//优化循环性能
	for(var n=0,len=json3.length;n<len;n++){
		var oLiwork = document.createElement('li');
		oLiwork.setAttribute("id","container");    
		oLiwork.innerHTML = '<div class="lower"><h1>'+json3[n].name+'</h1><p>'+json3[n].cont+'</p><p>'+json3[n].links+'<a href="javascript:;">'+json3[n].details+'</a></p></div><div class="upper"><img src="" alt="作品集锦"/></div>';
		
		oCont_box.appendChild(oLiwork);
		var oLiimg = oCont_box.getElementsByTagName('img');
		oLiimg[n].src = json3[n].src;
	}	

//	新闻资讯

	(function(){
		var oWu1 = document.getElementById('wnu_ul1');
		var oWu2 = document.getElementById('wnu_ul2');
		
		var json1 = null;
		var json2 = null;
	
		json1 = data;
		json2 = data;
		
		jsonN(oWu1,json1);
		jsonN(oWu2,json2);
		
		var aW1li = oWu1.children;
		var aW2li = oWu2.children;
		
		addImg(aW1li[1]);
		addImg(aW2li[4]);
		addImg(aW1li[2]);
		addImg(aW2li[5]);
		addImg(aW1li[3]);
		addImg(aW2li[6]);
		
		function addImg(adimg){
			for(var j=0;j<aW1li.length;j++){
				var oImgnew1 = document.createElement('img');
				oImgnew1.src = 'img/img_new.gif';	
			}
			adimg.appendChild(oImgnew1);
			adimg.appendChild(oImgnew1);
		}
		
		function jsonN(obj,json){
			for(var i=0;i<json1.length;i++){
				var oLinew1 = document.createElement('li');
				oLinew1.className = ('news_list clear');
				if(json[i]){
					oLinew1.innerHTML = '<a href="javascript:;">'+json[i].news+ '</a><span>'+json[i].data+'</span>';
					obj.appendChild(oLinew1);
				}
			}
		}
	})()

	//backtop
	var oRb_btn=document.getElementById('rb_btn');
	oRb_btn.onclick = function(){
		oBody.scrollTop = '0';
	}
	
	
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}	
}