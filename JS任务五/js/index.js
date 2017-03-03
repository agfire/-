window.onload=function(){
	var btn1=document.getElementById("bt1") /* 获取按钮 和输入框 和 ul 的id*/
	var btn2=document.getElementById("bt2")
	var btn3=document.getElementById("bt3")
	var btn4=document.getElementById("bt4")
	
	var lists=document.getElementById("list")
	var in1=document.getElementById("in1") ;
	var input=document.getElementById("input")/*text*/
	var res=document.getElementById("re")
	btn1.addEventListener('click',function(){   /*为按钮绑定事件*/
   var tex=input.value
		var lis=lists.childNodes[0]
		var nli=document.createElement("li")
		nli.innerHTML=tex
		nli.style.height=tex+"px"
		lists.insertBefore(nli,lis)
  },false);
  btn2.addEventListener('click',function(){
   	var tex=input.value
		var nli=document.createElement("li")
		nli.innerHTML=tex
		nli.style.height=tex+"px"
		lists.appendChild(nli)
  },false);
  btn3.addEventListener('click',function(){
   var lis=lists.childNodes[0]
		lists.removeChild(lis)
		alert(lis.innerHTML)
  },false);
  btn4.addEventListener('click',function(){
   var lis=lists.lastChild
		lists.removeChild(lis)
		alert(lis.innerHTML)
  },false);
 
	in1.onclick=getnum   
	function getnum(){
    var chilld=lists.getElementsByTagName("li").length
	 if(chilld<=60){
		var tex=input.value
		if(tex<100){
		var li=document.createElement("li")
		li.innerHTML=tex
		li.style.height=tex+"px"
		lists.appendChild(li)}
		else{
			alert("数字最大为100")
		}
	
	}
	else{
		alert("元素已经达到最大")
	}
	
	}
	var data=[];
	res.onclick=function(){ 
		if(data==""){
	var chillds=lists.getElementsByTagName("li")
		 for(var i=0;i<chillds.length;i++){
		 data.push(chillds[i].offsetHeight)
		}
		}
	 resert(data)
	 data.length=0;
	}
 
function resert(datas){

	var li=lists.getElementsByTagName("li")
	
	 for (var i=0;i<datas.length;i++)
            {
                for (var j=i;j<datas.length;j++)
                {
                    if(datas[i]>datas[j]){
	    	var temp;
		 temp=datas[j] 
		 datas[j]=datas[i]
		 datas[i]=temp;
                }
            }
	
	}
  for( var s=0;s<datas.length;s++){
  	 li[s].style.height=datas[s]+"px"
	 li[s].innerHTML=datas[s]
  }
	
}


	
}
