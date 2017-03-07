window.onload=function(){
	var text=[]
text[0]='{-webkit-transition: all .3s;transition: all .3s;}'+
'#show{ position:absolute;width:400px ; height:auto;background: blanchedalmond; top: 6%; left:56%;overflow: auto;box-shadow: 5px 5px 4px coral; border-radius: 50px; line-height: 30px;}'+
'#box{background: rgb(0,43,54);color: rgb(222,222,222); }'+
'#box{padding:20px; border:1px solid;overflow:auto;width:50%;height:auto;line-height: 30px;border-radius: 50px;}'+
'html{ -webkit-perspective: 1000px;perspective: 1000px;}'+
'#box{position:fixed;left:2%;top:2%; -webkit-transition: none;  transition: none; -webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px);font-family: "微软雅黑";}'+
'p{color:red}'
	
	
	
text[1]='Hello My name is 王港</br> 年龄：20岁</br> 性别：男</br>现为一名大二程序猿,为人风趣幽默、待人友善、知节知理、</br>'+
	'技能：熟练CSS、Htlm 会市面上主流的布局方法，有过bootstrap等第三方框架的经验，对Jqurey使用熟悉、对原生JS有中等水平。接触过Vue.js 浅知Node.js</br>有过微信小程序的开发体验'+
	'<p>特长：王者荣耀贼六！顺风浪 逆风投。主玩刺客 和法师  ID：手Q劣人Online_ 欢迎Boss切磋</p></br>'+
	'校园经历：在大一有过多种校外兼职经历，有一定的社会经验，在上学期成为耳语APP校园大使  宣传并建立本校在耳语上的站点，有一定的推广经验。</br>'+
	'项目经历：<ol><li>利用Canvas 实现页面炫酷效果 地址：</br></li><li> 主流网站布局Demo 地址：<a href="http://htmlpreview.github.io/?https://github.com/agfire/-/blob/master/任务七/index.html">预览</a></li><br>'+
	'我的github的地址：<a href="https://github.com/agfire">https://github.com/agfire</a></br>'+
	'感觉这个简历不怎么美观，来 给它加点样式！</br>'+
	'现在来 弄一个CSS的编辑器'
	
	
	var n=0	
   var time=setInterval(function(){
	    box.innerHTML=text[1].substring(0,n)
	 
	  if(n==text[1].length){
	  	clearInterval(time)
	  	creat()
	  	n=0
	  }
	  else{
	  	n=n+1
	  }
	},50)


function creat(){
show.style.display='block';
	var times=setInterval(function(){
	    show.innerHTML=text[0].substring(0,n)
	    style.innerHTML=text[0].substring(0,n)
	 
	  if(n==text[0].length){
	  	clearInterval(times)
	  	showimg()
	  }
	  else{
	  	n=n+1
	  }
	},100)
}
	
	var a=0
function showimg(){
	
	img.style.background="url(img/IMG_20150730_210526.jpg)";
	img.style.width=180+"px"
	img.style.height=220+"px"
	img.style.borderRadius=50+'px'
	img.style.backgroundSize="100% 100%"
	img.style.transform="scale(0.5)" 
	img.style.position='absolute'; 
	img.style.left='40%';
	img.style.top=-50+'px'
	img.style.opacity=0;
	
	var timess=setInterval(function(){
		img.style.opacity=a
		if(a==1){
		clearInterval(timess)
		}
		else{
			a=a+0.1;
		}
	},1000)
	
	
}
	
	
}
