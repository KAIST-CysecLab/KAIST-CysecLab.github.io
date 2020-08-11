$(document).ready(function(){
	$('.sub_menu').css("display","none");
	$("#menu_research").hover(function(){
		// 애니메이션 되지 않는것은 slideDown 하고
		//$(".sub_menu").hide(0);
		$('.sub_menu').css("display","none");
		//$('#sub_research').css("display","block");
		$("#sub_research").slideDown("fast");
	},
	function(){
	});
	$("#menu_members").hover(function(){
		// 애니메이션 되지 않는것은 slideDown 하고
		//$(".sub_menu").hide(0);
		$('.sub_menu').css("display","none");
		$("#sub_members").slideDown("fast");
		//$('#sub_members').css("display","block");
	},
	function(){
	});
	$("#menu_publications").hover(function(){
		// 애니메이션 되지 않는것은 slideDown 하고
		//$(".sub_menu").hide(0);
		$('.sub_menu').css("display","none");
		$("#sub_publications").slideDown("fast");
		//$('#sub_publications').css("display","block");
	},
	function(){
	});
	$("#menu_course").hover(function(){
		// 애니메이션 되지 않는것은 slideDown 하고
		//$(".sub_menu").hide(0);
		$('.sub_menu').css("display","none");
	},
	function(){
	});
	$("#menu_software").hover(function(){
		// 애니메이션 되지 않는것은 slideDown 하고
		//$(".sub_menu").hide(0);
		$('.sub_menu').css("display","none");
	},
	function(){
	});
});