function loading(){
	x=$(".loading").width()/2-75;
	y=$(".loading").height()/2-150;
	$(".loading").children().each(function(){
		$(this).css("left",x);
		$(this).css("top",y);
		$(this).css("opacity","0");
	});
	$(".word").css("opacity","1");
	$(".word").css("top",y-50);
	$(".word").css("left",x+12);
	$(".side1").css("opacity","1");
	//-------------------
	
	setTimeout(function(){

		$(".side2").css("opacity","1");
		$(".side3").css("opacity","1");
		$(".side4").css("opacity","1");
		$(".side2").css("-webkit-transform","rotate(90deg)");
		$(".side3").css("-webkit-transform","rotate(90deg)");
		$(".side2").css("left",(x-45)+"px");
		$(".side3").css("left",(x+44)+"px");
		$(".side2").css("top",(y+45)+"px");
		$(".side3").css("top",(y+44)+"px");
		$(".side4").css("top",(y+90)+"px");
	},1000);
	//----------------------
	setTimeout(function(){

		$(".side5").css("opacity","1");
		$(".side6").css("opacity","1");
		$(".side7").css("opacity","1");

		$(".side8").css("opacity","1");

		$(".side9").css("opacity","1");
		$(".side10").css("opacity","1");
		$(".side11").css("opacity","1");
		$(".side12").css("opacity","1");

		$(".side8").css("left",x+49);
		$(".side8").css("top",y+50);
		$(".side5").css("-webkit-transform","rotate(90deg)");
		$(".side6").css("-webkit-transform","rotate(90deg)");
		$(".side5").css("left",(x+6)+"px");
		$(".side6").css("left",(x+92)+"px");
		$(".side5").css("top",(y+96)+"px");
		$(".side6").css("top",(y+95)+"px");
		$(".side7").css("left",x+49);
		$(".side7").css("top",(y+142)+"px");

		$(".side9").css("width","75px");
		$(".side10").css("width","75px");
		$(".side11").css("width","75px");
		$(".side12").css("width","75px");
		$(".side9").css("-webkit-transform","rotate(45deg)");
		$(".side10").css("-webkit-transform","rotate(45deg)");
		$(".side11").css("-webkit-transform","rotate(45deg)");
		$(".side12").css("-webkit-transform","rotate(45deg)");
		
		$(".side9").css("left",x-11);
		$(".side9").css("top",y+23);
		
		$(".side10").css("left",x+79);
		$(".side10").css("top",y+23);

		$(".side11").css("left",x-10);
		$(".side11").css("top",y+116);

		$(".side12").css("left",x+82);
		$(".side12").css("top",y+115);

	},2000);
}
$(".loading").ready(function(){
	loading();
	loadingloop = setInterval(loading,3000);
});

loaded = false;
$(window).load(function(){
	if(!loaded){
		width = $(".left").css("width");
		left  = $(".left").css("left");
		
		$(".loading").fadeOut(1500);
		clearInterval(loadingloop);
		loaded = true;
	}
});


setTimeout(function(){
	if(!loaded){
		width = $(".left").css("width");
		left  = $(".left").css("left");
		
		$(".loading").fadeOut(1500);
		clearInterval(loadingloop);
		loaded = true;
	}
},60000)

var s;
function chnageQuestion(){
	s = parseInt(Math.random()*4);
	for(i=0;i<4;i++){
		if(s!=i){
			console.log($(".question > article > div")[i]);
			$(".question > article")[i].style.display = "none";
		}
	}
}

if(localStorage.statut == undefined) localStorage.statut="false";
if(localStorage.statut == "false"){
	chnageQuestion();
}else{
	$(".question-holder").hide();
}

$('html').click(function() {
	$(".question-holder").hide();
	$(".speaker-detail").fadeOut();
});

$('article').click(function(event){
    event.stopPropagation();
});

$('.trapeze').click(function(event){
    event.stopPropagation();
});

$('.infos').click(function(event){
    event.stopPropagation();
});

$('.question').click(function(event){
    event.stopPropagation();
});


$("#dontshowcheckbox").change(function(){
	localStorage.statut = document.getElementById("dontshowcheckbox").checked;
});


$(".name1").height($(".name1").width());

function animate(){
	$(".dark-bg").children().each(function() {
		x = Math.random()*($(".dark-bg").width()/2);
		y = Math.random()*($(".dark-bg").height());
		$(this).css("left",x+"px");
		$(this).css("top",y+"px");
		z = Math.random()*360;
		$(this).css("-webkit-transform","rotate("+z+"deg)");
	});
}
animate();
setInterval(animate,20000);	

testmenu = false;
$(".menu-s").hide();

$(".close-menu").click(function(){
		$(".menu-slider").css("left","-100%");
});
$(".menu").click(function(){
	if($("body").width()<721){
		$(".menu-slider").css("left",0);
	}
	if(whereami==1){
		if(!testmenu){
		$(".not-menu").each(function(){
			$(this).fadeOut(300);
		});
		setTimeout(function(){
			$(".menu-s").fadeIn(300);
		},300);
		testmenu=true;
	}else{
		$(".menu-s").fadeOut(300,function(){
			$(".not-menu").each(function(){
				$(this).fadeIn(300);
			});
			animate();setInterval(animate,20000);	
		});
		
		testmenu=false;
	}
	}else{
		animate();setInterval(animate,20000);	
		$(".not-menu").each(function(){
			$(this).fadeOut(300);
		});
		setTimeout(function(){
			$(".menu-s").fadeIn(300);
		},300);

		if(!testmenu) {
			$(".left").css("left","-10%");
			testmenu = true;
		}
		else {
			$(".left").css("left","-100%");
			testmenu=false;
		}
	}
	
	
});


/*$(".place").click(function(){
	$(".map-holder").fadeIn(500);
	$(".map").fadeIn(500);
});*/

$(".close-map").click(function(){
	$(".map-holder").fadeOut(500);
	$(".map").fadeOut(500);
});
$(".close-question").click(function(){
	$(".question-holder").fadeOut(500);
	$(".question").fadeOut(500);
});


function add(q,c){
var x = ((q-1)*2)+(c-1);
	message = "I think this is a " + $(".question > article > div > div")[x].innerText + " what about you? ";
	    	photo = document.getElementById("photo"+s).src;
	    	console.log(photo);
	    	sendAnswer(message,photo);
	    	/*
	xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", "./add.php?q="+q+"&c="+c, true );
    xmlHttp.send();
    xmlHttp.onload = function(){
    	xmlHttp2 = new XMLHttpRequest(); 
	    xmlHttp2.open( "GET", "./get.php?q="+q+"&c="+c, true );
	    xmlHttp2.send();
	    xmlHttp2.onload = function(){
	    	
	    	message = "I'm one of the " + parseInt(xmlHttp2.response) + "%" +
	    	" who think this is a " + $(".question > article > div > div")[x].innerText;
	    	photo = document.getElementById("photo"+s).src;
	    	console.log(photo);
	    	sendAnswer(message,photo);
	    }
    }*/
}


function moveto(id){
	normalscroll = false;
	$(".menu-slider").css("left","-100%");
	$(window).scrollTop($("#s"+id).offset().top);
	if(id==1) {
		$(".right").fadeIn(1000);
	}else if(id==4){
		$(".name1").height($(".name1").width());
	}
	else{
		$(".map-holder").fadeOut(500);
		$(".map").fadeOut(500);
	}
	setTimeout(function(){
		normalscroll = true;
	},100);
}

whereami = 1;

function trans(id){
	whereami = id;
	testmenu = false;

	$(".left").css("transition","all 1s");
	
	$(".left").children().each(function(){
		$(this).hide()
	});
	$(".socials").hide();
	$(".left").css("width",$(".section").width()*2+"px");
		

	setTimeout(function(){
		$(".left").css("left","120%");
		moveto(id);
		timeout = setTimeout(function(){
			$(".left").css("transition","none");
			$(".left").css("width","32%");
			$(".left").css("left","-100%");
			if(id==1) { 
				setTimeout(function(){ $(".left").css("transition","all 1s");$(".left").css("left","-10%"); },300);
				$(".left").children().each(function(){
					$(this).show();
				});

				$(".socials").show();
				$(".menu-s").hide();
			}
			else { 
				$(".left").children().each(function(){$(this).hide()});
				$(".menu-s").hide();
			}
			
			animate();setInterval(animate,20000);	

			$(".left").css("transition","all 1s");
		},1000);
		setTimeout(function(){
			$(".left").css("transition","all 1s");
		},1000);
	},1100);
	
	

}

$(".artists").width( ( $("body").width()/6 ) * $(".artists").children().length );
$(".artist").width($("body").width()/6);


go_x = 0;
function go_right(){
	go_x++;
	if(go_x > ($(".artists").children().length-6) ){
		go_x--;
	}
	if(go_x == ($(".artists").children().length-6) ){
		$(".go-right").fadeOut();
		$(".go-left").fadeIn();
	}
	$(".artists").css("margin-left",-(go_x*$("body").width()/6));
}

function go_left(){
	go_x--;
	if(go_x < 0 ){
		go_x++;
	}
	if(go_x == 0 ){
		$(".go-right").fadeIn();
		$(".go-left").fadeOut();
	}
	$(".artists").css("margin-left",-(go_x*$("body").width()/6));
}

$(".go-left").fadeOut();

gr_hover = false;
gl_hover = false;
gr=function(){
	gr_hover = true;
	if(gr_hover) go_right();
	setTimeout(function(){
		if(gr_hover) gr();
	},1000);
}
gl=function(){
	gl_hover = true;
	if(gl_hover) go_left();
	setTimeout(function(){
		if(gl_hover) gl();
	},900);

}
$(".go-right").on("mouseover",gr);

$(".go-right").on("mouseout",function(){
	gr_hover = false;
});	


$(".go-left").mouseover(gl);
$(".go-left").on("mouseout",function(){
	gl_hover = false;
});

normalscroll = true;
last =$("body").scrollTop();
document.onscroll = scrollTest;

function scrollTest(){ 
	if(normalscroll){
		w = $(window).scrollTop() / $(".left").height() + 1;
		if(w>1){
			$(".right").fadeOut(1000);
			$(".left").css("left","-100%");
			whereami = parseInt(w);
		}else{
			$(".left").children().each(
				function(){$(this).show()
			});

			$(".socials").fadeIn(300);
			$(".menu-s").hide();
			$(".left").css("transition","all 1s");
			whereami = 1;
			$(".left").css("left","-10%");
			$(".right").fadeIn(1000);
		}
	}
} 

timeout=null;
document.onkeydown = function(e){
	console.log(e.keyCode);
	if(e.keyCode == 40){
		clearTimeout(timeout);
		e.preventDefault() ;
		if(whereami<10)
			trans(whereami+1);
	}else if(e.keyCode == 38){
		clearTimeout(timeout);
		e.preventDefault() ;
		if(whereami>1)
		trans(whereami-1);
	}else if(e.keyCode == 39){
		g_right();
		ch_right();
	}else if(e.keyCode == 37){
		g_left();
		ch_left();
	}
}


$(".ch-photo").width($(".map").width()*$(".ch-photo").children().length);
$(".ch-photo article").width($(".map").width());
$(".ch-photo section").width($(".map").width());
$(".map-holder").hide(); // !important
ch_x = 0;

function ch_move(x){
	$(".ch-photo").css("margin-left",-x*$(".map").width())
}
function ch_left(){
	ch_x--;
	if(ch_x<0) ch_x=$(".ch-photo").children().length -1 ;
	ch_move(ch_x);
}

function ch_right(){
	ch_x++;
	if(ch_x >  ( $(".ch-photo").children().length -1 ) )
		ch_x = 0;
	ch_move(ch_x);
}


$(".g-photo").width($("body").width()*$(".g-photo").children().length);
$(".g-photo article").width($("body").width());
$(".g-photo section").width($("body").width());

g_x = 0;

function g_move(x){
	$(".g-photo").css("margin-left",-x*$("body").width())
}
function g_left(){
	g_x--;
	if(g_x<0) g_x=$(".g-photo").children().length -1;
	g_move(g_x);
}

function g_right(){
	g_x++;
	if(g_x >  ( $(".g-photo").children().length -1 ) )
		g_x=0;
	g_move(g_x);
}



