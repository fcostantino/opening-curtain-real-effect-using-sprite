function openCurtain(id){
	var m = $("#"+id).data("frame");
	$("#"+id).css("z-index", "300");
		var nome = $("#"+id).attr("class").replace(/[0-9]/g,"");
		//var n = nome.replace(/[^0-9]/g,"");
	var i = 0;
	if(id == "siparioLeft"){
	$("#"+id).transition({x : "280"},8010,"easeOutExpo");
	}else{
		$("#"+id).transition({x : "-280"},8010,"easeOutExpo");
		}
	 (function loop(){
		var zero ="";
		if(i<=m){
			
	var count = i.toString().length;
	
		for(j=count;j<4;j++){
			zero+="0";
			}
		

$("#"+id).removeClass($("#"+id).attr("class")).addClass(nome+zero+i);
		setTimeout(loop,1000 / 25);
		i++;
		}
	
		
		})();
	
	}
$(function(){
	$("#bk").delay(2000).fadeTo("slow",0).hide();
	$("body").on("click",function(){
		openCurtain("siparioLeft");
		openCurtain("siparioRight");
		});
	});