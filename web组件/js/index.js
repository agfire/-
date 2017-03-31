

window.onload=function(){
function Daiog(datas){
			this.datas=datas;
	        this.creatDiv();
	        this.binevent()
			
		}
	Daiog.prototype.creatDiv=function(){
			var body=document.body
			var div=document.createElement("div")
			this.div=div;//将div 添加到Daigo中
			body.appendChild(div)
			div.className="dialog";
			div.style.width=this.datas.width+"em"
		var buttonString=this.datas.buttons.map(function(text,itm){
			return`<button data-index=${itm}>${text}</button>`
		}).join("\n")
		var chabtn=`<button  data-index="3">${this.datas.cha}</button>`
		div.innerHTML=`<header>${this.datas.titile}${chabtn}</header><main>${this.datas.content}</main><footer>${buttonString}</footer>`
		document.querySelector(".dialog > header button").style.marginLeft=this.datas.width+"em"
		 document.body.appendChild(div)
			};
	Daiog.prototype.binevent=function(){
		var daiog=this
		console.log(daiog)
		this.div.addEventListener('click',function(e){
			if(e.target.tagName === 'BUTTON'){
			var index=parseInt(e.target.getAttribute('data-index'),10)
			if(index===0||index==3){
				daiog.closes()
			}
			
			}
		})
	}
	Daiog.prototype.closes=function(){
		this.div.parentNode.removeChild(this.div)
	}
	
		but.onclick=function(){
			var getarr=getnum()
		if(getarr[0]!==""&&getarr[1]!==""&&getarr[2]!==""){
			var daiogs=new Daiog({
				titile:getarr[0],
				content:getarr[1],
				width:getarr[2], 
				buttons:["确定","取消"],
				cha:"X", 
			})
		
		}
			else{
				alert("请输入正确的值")
			}
		
		}
		
	function getnum(){
		var arr=[];
		var text=document.querySelector("input:nth-child(1)").value
		var content=document.querySelector("input:nth-child(2)").value
		var w=document.querySelector("input:nth-child(3)").value
		arr.push(text)
		arr.push(content)
		arr.push(w)
		return arr
	}
	}