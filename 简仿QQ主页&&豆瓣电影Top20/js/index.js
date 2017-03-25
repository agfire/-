
document.write('<script src="js/jquery1.10.2.js"></script>')
document.write('<script src="js/jquery.mobile-1.4.5.min.js"></script>')
  $(document).ready(function(){
	$("#inser").blur(function(){
	var shr=showe;
	$("#showe").empty()	
    var vas =$(this).val()
	$.ajax({
				type:"get",
				async:false,
				url:"https://api.douban.com/v2/movie/search?q="+vas,	
				dataType:"jsonp",
			    jsonp:"callback",
			    success:function(data){
			    var q=null;
			    console.log(data)
              shows(shr,data)
      $("#showe ul li a").click(function(){
	  q=$(this).find("div").text()
	  
	  window.location.href='http://127.0.0.1:8020/%E9%AB%98%E4%BB%BFQQ%E7%95%8C%E9%9D%A2/detils.html'
	  window.sessionStorage.setItem("id",q)
	 	 })
	     },
	  
	 error:function(){
			    	
			    }

	});
	});
	
		
		var a=0.05;
		var timer=null
	$("#box3").click(function(e){
		console.log(a)
		$(".lists").fadeToggle()
	if(a<0.5000000000000002){
	 timer=setInterval(function(){
			a+=0.01
		$(".lists").css("-webkit-transform","scale("+a+")");
		if(a==0.5000000000000002){ 
			 clearInterval(timer)
			 a=0;
		}
		},5)
		}
	})
var len=$(".list li").length
 for(var i=0;i<len;i++){
 $(".list li").eq(i).on("swipeleft",function(){
 	alert("a")
   move($(this).index())
  }); 
$(".list li").eq(i).on("swiperight",function(){
   moveright($(this).index())
 });
 
 $(".list li").eq(i).find("div").eq(3).on("taphold",function(){
  	$(this).hide()
  })
 }
                        
 function move(inde){
 $(".list li").eq(inde).css("margin-left","-100px")
 $(".list li").eq(inde).find("div").eq(3).css("right","200px")
 $(".list li").eq(inde).find("div").eq(4).css("right","-2%")
 $(".list li").eq(inde).find("div").eq(2).css("right","200px")
 }
	
function moveright(inde){
 $(".list li").eq(inde).css("margin-left","0px")
 $(".list li").eq(inde).find("div").eq(3).css("right","5%")
 $(".list li").eq(inde).find("div").eq(4).css("right","-45%")
 $(".list li").eq(inde).find("div").eq(2).css("right","5%")
 }
	
	for(var b=0;b<len;b++){
	!function(b){
	$(".list li").eq(b).find("div").eq(4).find("td").eq(2).click(function(){
	 removes(b)
	})
	}(b)
	}
	
	function removes(b){
	$(".list li").eq(b+1).remove()
	}

$("#pagetwo .foot a").eq(1).click(function(){
	var shs=show
	$.ajax({
			type:"get", 
			async:false,
			url:"https://api.douban.com/v2/movie/top250",
			dataType:"jsonp",
			jsonp:"callback",
			
			success:function(data){ 
				$("#show").empty()
				var q=null;
				console.log(data)
				/*console.log(datas.title)
				console.log(datas.subjects[0].casts[0].alt)
			   	console.log(datas.subjects[0].alt) 详情页电影
			  console.log(datas.subjects[0].images.large) 图片*/
			 shows(shs,data)	
		 $("#show ul li a").click(function(){
	     q=$(this).find("div").text()
	     window.location.href='http://127.0.0.1:8020/%E9%AB%98%E4%BB%BFQQ%E7%95%8C%E9%9D%A2/detils.html'
	 	
	 	 window.sessionStorage.setItem("id",q)
	 	})	  
		},
			
	      error:function(el,err){
			alert(err)
			}
});
})
function shows(sh,data){
 for(var w=0;w<data.count;w++){ 
	var ul=document.createElement("ul");
			 var li=document.createElement("li")
		  var a=document.createElement("a")
			//  a.setAttribute("href","detils.html")
			  var img=document.createElement("img")
			 if(data.subjects[w].images.medium===undefined){
			 	img.setAttribute("src","图片/mtu.png");
			 }
			  else{
			  	img.setAttribute("src",""+data.subjects[w].images.medium+"");
			  }
			
			  var div=document.createElement("div")
			  div.setAttribute("class","show-div")
			  var div1=document.createElement("div")
			  
			  div1.innerHTML=data.subjects[w].title
			  var div2=document.createElement("div")
			  div2.innerHTML=data.subjects[w].original_title
			  var div3=document.createElement("div")
			  if(data.subjects[w].directors.length===0){
			  	   div3.innerHTML="未知导演"
			  }
			else{ 
			    div3.innerHTML=data.subjects[w].directors[0].name;
			}
			  var div4=document.createElement("div")
			  div4.innerHTML=data.subjects[w].id
			  var divs=document.createElement("div")
			  divs.innerHTML=data.subjects[w].rating.average
			  sh.appendChild(ul);
			  ul.appendChild(li)
			  li.appendChild(a)
			  a.appendChild(img)
			  li.appendChild(div)
			  div.appendChild(div1)
			  div.appendChild(div2)
			  div.appendChild(div3)
			  a.appendChild(div4)
			  divs.setAttribute("class","stat")
			  li.appendChild(divs)
           }
		}
	
})
