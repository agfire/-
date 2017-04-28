
	function Data_w(){
				this.init();
				//alert(this.day)// 构造函数能拿到初始化的值  其他函数能拿到值
				this.render();
				
				
			}
		
		Data_w.prototype={
		 init:function(){
		    var dates=this.dates=new Date()
		    this.year=dates.getFullYear()
		    this.moth=dates.getMonth()+1
		   // dates.setDate(1)//获取这个月第一天
		    this.day=dates.getDate()
			},
	   setdata:function(){
	    this.data=[]
		var daynum=this.getdaynum()
		//alert(this.moth)
	   // alert(daynum)
		var nulldate=this.getFiristday()
		//var lastnuldate=this.getlastday()//获取最后一天是星期几
		for(var i=0;i<nulldate;i++){
			this.data[i]= " "
		
		} 
		var j=1
		for(;i<daynum+nulldate;i++){
			this.data[i]=j;
			//alert(data[i])
            j++;
		}
		//console.log(lastnuldate)
		for(;i<daynum+nulldate+7;i++)
		{
			this.data[i]=""
		}
	/*	this.data.forEach(function(value,index){
			console.log(value)
			console.log(index)
		})*/
		return this.data
	},
	  render:function(){ 
	  	var elme=this.elempt()
	    var  divheader=elme
			var datepick=document.querySelector(".data")
			datepick.innerHTML=divheader
		    this.bind()
			this.bindtd()
 		    },
	 bind:function(){ 
		 var eldate=this
		 var arrow=document.querySelector(".data .header .arrow-left")
		 var arrowr=document.querySelector(".data .header .arrow-right")
		 arrow.addEventListener("click",function(){
		   
		   	eldate.moth-=1
		   	if(eldate.moth==0){
		   	eldate.year-=1
		   	eldate.moth=12
		   	}
		   eldate.restshow()
		   eldate.render()
		   },false)
		arrowr.addEventListener("click",function(){
		   	eldate.moth+=1
		  
	    if(eldate.moth==13){
		   	eldate.year+=1
		   	eldate.moth=1
		   }
		  eldate.restshow()
		  eldate.render()
		
		},false)
     },	  
     restshow:function(){
        var rest=document.querySelector(".data .header .main")
		rest.innerHTML=""
		rest.innerHTML+=`<span>${this.year}-</span><span>${this.moth}-</span><span>${this.day}</span>`
         },
		getdaynum:function(){ 
		 var day = new Date(this.year,this.moth,1); 
		 day.setDate(0)
	   return day.getDate() //获取这个月的总天数
		},
	 getFiristday:function(){
	 	var resdate=new Date(this.year,this.moth,0)
	 	 resdate.setDate(1)
	 	 return resdate.getDay()
	 	 
	 },
	 /*getlastday:function(){
	 	var lasdate=new Date(this.year,this.moth,1)
	 	var getdate=new Date(lasdate.getTime()-1000*60*60*24);
	 	var lastday=getdate.setDate(getdate.getDate())
	     return getdate.getDay()
	 },*/
	 restdiv:function(){
     var resdiv=$("<div></div>")
         resdiv.innerHTML=this.elempt()
      var firstdiv=$(".data div").eq(0)
      resdiv.replaceAll(firstdiv)
      //this.restd()
	  }, 
     elempt:function(){
     var restdata=this.setdata()
     	var elempt=`
      <input class="input" placeholder="请选择日期" />
     <div class="header">
				<div class="arrow-left"></div>
				<div class="main"><span>${this.year}-</span><span>${this.moth}-</span><span>${this.day}</span></div>
				<div class="arrow-right"></div>
			</div>
			<div class='mian--content'>
				<table>
					<tr>
						<td>日</td>
						<td>一</td>
						<td>二</td>
						<td>三</td> 
						<td>四</td>
						<td>五</td>
						<td>六</td>
					</tr>
					<tr>
						<td>${restdata[0]}</td>
						<td>${restdata[1]}</td>
						<td>${restdata[2]}</td>
						<td>${restdata[3]}</td>
						<td>${restdata[4]}</td>
						<td>${restdata[5]}</td>
						<td>${restdata[6]}</td>
					</tr>	
					<tr>
						<td>${restdata[7]}</td>
						<td>${restdata[8]}</td>
						<td>${restdata[9]}</td>
						<td>${restdata[10]}</td>
						<td>${restdata[11]}</td>
						<td>${restdata[12]}</td>
						<td>${restdata[13]}</td>
					</tr>	
				<tr>
						<td>${restdata[14]}</td>
						<td>${restdata[15]}</td>
						<td>${restdata[16]}</td>
						<td>${restdata[17]}</td>
						<td>${restdata[18]}</td>
						<td>${restdata[19]}</td>
						<td>${restdata[20]}</td>
					</tr>	
					<tr>
						<td>${restdata[21]}</td>
						<td>${restdata[22]}</td>
						<td>${restdata[23]}</td>
						<td>${restdata[24]}</td>
						<td>${restdata[25]}</td>
						<td>${restdata[26]}</td>
						<td>${restdata[27]}</td>
					</tr>	
					<tr>
						<td>${restdata[28]}</td>
						<td>${restdata[29]}</td>
						<td>${restdata[30]}</td>
						<td>${restdata[31]}</td>
						<td>${restdata[32]}</td>
						<td>${restdata[33]}</td>
						<td>${restdata[34]}</td>
					</tr>
				    <tr>
						<td >${restdata[35]}</td>
						<td ></td>
						<td></td>
						<td></td>
					    <td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
	           `
			return elempt 
     }, 
      bindtd:function(){
      	 _this=this
      	var inputtext=$(".data input")
      	var pcik=[]
        pick[0]=this.year;pick[1]=this.moth
       for(let i=7;i<42;i++){
       	  var tds=$(".data .mian--content td").eq(i)
       	 // console.log(_this.day)
       	  if(tds.text()==_this.day){
             
       	  	tds.addClass("bule")
       	  }
       	  
       }
   
       
      	$(".data .mian--content table tr td").click(function(){
      	 pick[2]=$(this).text()	
          var datepick=""+pick[0]+":"+pick[1]+":"+pick[2]+""	
          inputtext.val(datepick)

      	})
      },
      
      
	}