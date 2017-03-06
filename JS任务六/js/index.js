window.onload=function(){
	var btn=document.getElementById("btn")
	var input=document.getElementById("input")
	var area=document.getElementById("area")
	var lists=document.getElementById("list")
	bt1.addEventListener('click',function(){   /*为按钮绑定事件*/
        var tex=area.value
		var lis=lists.childNodes[0]
		var nli=document.createElement("li")
		nli.innerHTML=tex
		
		lists.insertBefore(nli,lis)
  },false);
  bt2.addEventListener('click',function(){
  	
    	var tex=area.value
		var nli=document.createElement("li")
		nli.innerHTML=tex
		
		lists.appendChild(nli)
  },false);
  bt3.addEventListener('click',function(){
   var lis=lists.childNodes[0]
		lists.removeChild(lis)
		alert(lis.innerHTML)
  },false);
  bt4.addEventListener('click',function(){
   var lis=lists.lastChild
		lists.removeChild(lis)
		alert(lis.innerHTML)
  },false);
	var data=[]
	
	btn.onclick=function(){
		
	var val=input.value
	var tex=area.value
	data.push(val)
	var child=lists.getElementsByTagName("li")
	for(var i=0;i<child.length;i++){
	var num=child[i].innerHTML.indexOf(val)
	
		if(num!=-1)
		{
			child[i].style.backgroundColor="#91D4DA"
		}
	}
	
	}
}
