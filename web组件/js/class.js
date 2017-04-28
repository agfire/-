window.onload=function(){
	var clasmaner={
	     
	   init:function(){
		this.img=$(".student table tr td").eq(0).children("img")
		this.td=document.querySelector(".student tr td:nth-child(2)")
		this.data=[] 
		this.namedata=["王港","hff","rrr","fe","drt","irt","eitt","wqirur","dwyr","swiur","ew7r","王港","hff","rrr","fe","drt","irt","eitt","wqirur","dwyr","swiur",]
		this.i=0
		for(let i=0;i<21;i++){
		this.data.push({img:"img/image"+i+".jpg",name:""+this.namedata[i]+""})
		}
  
		},
	 setInterstart:function(){ 
	    this.rand=parseInt(Math.random()*19,10)+1
	    console.log("判断什么时候停止的随机"+this.rand)
	 	var _this=this
	    var timer=setInterval(function(){
	    //img.css("background","url("+data[i].img+")")
    	//img.style.background="url("+data[i].img+")"
        //img.style.backgroundSize="100% 100%" 
		//img.setAttribute("src",data[i].img)
	 _this.img.attr("src",""+_this.data[_this.i].img+"")
			_this.td.innerHTML=_this.data[_this.i].name
			_this.i+=1
		if(_this.i===20){
			_this.i=0
		}
		if(_this.i===_this.rand){ 
			clearInterval(timer)
			_this.setTimesatar()
			}
		
	    },200)
	    
	 },
	 bind:function(){
	 _this=this
   
   $(".list li").eq(2).click(function(){
   $(".student table tr").eq(0).toggle()
   var f= $(".student table tr").eq(0).css("display")
    if(f==='table-row'){
       _this.setInterstart()	
    }
    else{
    	//clearInterval(timer)
    }

   	
   })
   $(".list li").eq(1).click(function(){
   	    $(".top").toggle()
    	$("#serch").fadeToggle()
    })
    $("#serch input").blur(function(){
    _this.tdtext=[]
     $(".gettext").each(function(){
		_this.tdtext.push($(this).text())
		
	})
	
		
	_this.findserch()
	
    })
	$(".list li").eq(0).click(function(){
   	    $(".dialog").toggle()
    	
    })
	$(".true").click(function(){
	var oimg=$(".dialog table tr").eq(2).find("td").eq(1).children("select").val()
	
	var name=$(".dialog table tr").eq(0).find("td").eq(1).children("input").val()
	
	var num=$(".dialog table tr").eq(1).find("td").eq(1).children("input").val()
		var s=$("<tr><td><img src=img/image"+oimg+".jpg></td><td class=gettext>"+name+"</td><td>"+num+"</td><td><ul><li><button class=but>x</button></li><li><button class=but>修改</button></li></ul></td></tr>")
		$(".student table").append(s)
		 $(".dialog").toggle()
		 
	 $(".but").click(function(){
	$(this).parent().parent().remove()
	})
	})
	 
	$(".rest").click(function(){
		var name=$(".dialog table tr").eq(0).find("td").eq(1).children("input")
	  name.val("")
		var num=$(".dialog table tr").eq(1).find("td").eq(1).children("input")
		num.val("")
	})
	
	$("#serch .buts").click(function(){
		$(".student table tr").eq(0).siblings().css("visibility","visible")
	})
	 },
	findserch:function(){
		
	var inval=$("#serch input").val()
	this.tdtext.forEach(function(val,index){
		if(inval===val){
			$(".student table tr").eq(index+1).siblings().css("visibility","hidden")
		
		}
	})
	},
	setTimesatar:function(){
	var s=this.rand+parseInt(Math.random()*100,10)
	if(s%2===0){
	 setTimeout(function(){
	 	 $(".dialogs").fadeIn()
	 },3000)
	 var rands=parseInt(Math.random()*20,10)
	 console.log("这是改变img的"+rands)
	 setTimeout(function(){
	 	$(".dialogs").fadeOut()
	 	 _this.img.attr("src","img/image"+rands+".jpg")
	 	 _this.td.innerHTML=_this.data[rands].name
	 	 
	 },5000)
	 
	}
		
	},
	
 
	}
	
	 $(".but").click(function(){
		 $(this).parent().parent().remove()
	})
		
		var clas={}
		clas.__proto__= clasmaner
		clas.init()
		clas.bind()
		
}
