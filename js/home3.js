$(document).ready(function(){
	$("body").removeClass("not_loaded");
	$(window).scroll(function(){
    	if($(this).scrollTop() > 1){
    		$(".fixed-top").addClass("sticky");
    	}
    	else{
    		$(".fixed-top").removeClass("sticky");
    	}
    	console.log("Item On view:");
    	var height_of_page = $(".content").outerHeight();
    	var page_index = Math.floor($(this).scrollTop()/height_of_page);
    	console.log(page_index); 
    	var present_content = $(".content").eq(page_index);
    	console.log(typeof(present_content));
    	$(".content").removeClass("present");
    	present_content.addClass("present");  
    	var texts=["Home",
    			   "About Us",
    			   "What We Do",
    			   "Our Cars",
    			   "Achievements",
    			   "Budget 2017",
    			   "Sponsors",
    			   "Sponsors",
    			   "Why Sponsor Us",
    			   "Team",
    			   "Contact Us"];
    	var present_title=texts[page_index];
    	$("#nav_ind").html(present_title);	
    });
	$(".contact_person").mouseenter(function(){
		$pseudo = $(this).find(".pseudo");
		$pseudo.addClass("contact_visible");
		console.log("Enter");
		$pseudo.animate({
			top:"10px",
		});
	});
	$(".contact_person").mouseleave(function(){
		$pseudo = $(this).find(".pseudo");
		console.log("leave");
		$pseudo.removeClass("contact_visible");
		$pseudo.animate({
			top:"230px",
		});
	});
	$(".content").click(function(){
		if($(".sidenav").hasClass("visible_navigation")){
			$(".sidenav").removeClass("visible_navigation");
		}
	});
	$(function(){
 		var obj = document.querySelectorAll('.nav-icon');
  		for(var i = obj.length -1;i>=0;i--){
      		var toggle = obj[i];
     		toggleactive(toggle);
  		}
  
  		function toggleactive(toggle) {
   			toggle.addEventListener("click",function() {
      
      			if(this.classList.contains("active") === true) {
      				$(".sidenav").toggleClass("visible_navigation");
        				this.classList.remove("active");
      				}
	      		else {
	        		this.classList.add("active");
	        		$(".sidenav").toggleClass("visible_navigation");
	      		}
    		});
    		$("body").addEventListener("click",function() {
     			if($(".sidenav").hasClass("visible_navigation")){
					$(".sidenav").removeClass("visible_navigation"); 
					this.classList.remove("active");
				}
    		});
  		}
	});
});