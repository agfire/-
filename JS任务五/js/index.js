window.onload=function(){
	
	var lists=document.getElementById("list")
	var in1=document.getElementById("in1") ;
	var input=document.getElementById("input")/*text*/
	var res=document.getElementById("re")
	in1.onclick=getnum
	function getnum(){
    var chilld=lists.getElementsByTagName("li").length
	 if(chilld<=60){
		var tex=input.value
		var li=document.createElement("li")
		li.innerHTML=tex
		li.style.height=tex+"px"
		lists.appendChild(li)
	
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
	/*for( var i=0;i<datas.length;i++){
		if(datas[i]>datas[i+1]){
		var temp;
		 temp=datas[i+1] 
		 datas[i+1]=datas[i]
		 datas[i]=temp;
		
		}
		else{
			datas[i]=datas[i]
		}
		*/
	}

	for( var s=0;s<datas.length;s++){
		alert(datas[s])
	 li[s].style.height=datas[s]+"px"
	 li[s].innerHTML=datas[s]
	}
}
}
