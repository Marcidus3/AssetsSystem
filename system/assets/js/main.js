

$(window).resize(function() {
    $("#width").text($(this).width());
   $("#height").text($(this).height());
		document.getElementById("change2").classList.remove("child2");	
document.getElementById("change2").classList.remove("child");

    if($(this).width() < 1600){
    	document.getElementById("change2").classList.add("child");
    }
    else{
    	document.getElementById("change2").classList.add("child2");
    }
});



$(window).resize(function() {
    $("#width").text($(this).width());
   $("#height").text($(this).height());
		document.getElementById("change1").classList.remove("child1");	
document.getElementById("change1").classList.remove("child");

    if($(this).width() < 1700){
    	document.getElementById("change1").classList.add("child");
    }
 
	else{
	document.getElementById("change1").classList.add("child1");	
		
	}
});



$(window).resize(function() {
    $("#width").text($(this).width());
   $("#height").text($(this).height());
		document.getElementById("change3").classList.remove("child3");	
document.getElementById("change3").classList.remove("child");

    if($(this).width() < 1600){
    	document.getElementById("change3").classList.add("child");
    }
    else{
    	document.getElementById("change3").classList.add("child3");
    }
});








(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();







document.getElementById('nav').innerHTML += ' <div class="header-section d-lg-block d-none" ><div class="header-bottom sticky-header" > <div class="container" >    <div class="row">    <div class="col-12">   <div class="main-menu" >   <nav>  <ul>  <li class="has-dropdown has-megaitem"> <a class="menu-title-name" target="_parent" href="theory_main.html">Теория <i class="fa fa-angle-down"></i></a>';
document.getElementById('nav').innerHTML +=		'  <div class="mega-menu"> <ul class="mega-menu-inner"> ';
document.getElementById('nav').innerHTML +=	'<li class="mega-menu-item">  <a class="mega-menu-item-title" style="width:170px">Высокополигональное моделирование</a>    <ul class="mega-menu-sub">    <li><a target="_parent" href="theory_pages/hpoly_theory1.html">О высокополигональном моделировании</a></li></ul> </li>';
document.getElementById('nav').innerHTML +=	'</ul></li></ul> </div>';
document.getElementById('nav').innerHTML +=		' </li>  </ul> </nav> </div></div></div></div></div></div> ';
  
$(function() {
  $('.hide1').hover(function() {
    $('body').css('background', 'red');
  }, function() {
    // on mouseout, reset the background colour
  $('body').css('background', '');
  });
});


//mega-menu

