document.write(' <script src="jquery-3.0.0.js"> </script>')
$(document).ready(function(){
	$(".mask_4 >ul>li").eq(1).find("div").children("ul").children("li").mouseover(function(){
		var a=$(this).index()+2
		
			$(this).css("background-color","#BFBFBE").siblings().css("background-color","#F5F5F5")
			$(".mask_4 ul li").eq(0).find(" div").animate({backgroundPositionY:"650px"},500).css({"background":"url(./img/"+a+".png)","background-size":"100% 100%"})
	})
})