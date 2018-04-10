$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		$('.metro_select_a').not(this).removeClass('is_active');
		$(this).addClass('is_active');
	});
});

$(document).ready(function() {
	var pageHref = window.location.pathname;

	$('.top_menu_nav_anim').each(function(){
		var linkHref = $(this).attr('href');
		if (pageHref == linkHref){
			$(this).addClass('top_menu_nav_anim_is_active');
			$('.top_menu_nav_anim').not(this).removeClass('top_menu_nav_anim_is_active');
		}
	})
});

$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		var a = $(this).text();
		console.log(a);


		if(a == 'ПРЕОБРАЖЕНСКАЯ ПЛОЩАДЬ'){
			$('#salon_1').show();
			$('.ssi').not('#salon_1').hide();
			$('#salon_i_1').show();
			$('.ssi_i').not('#salon_i_1').hide();

		}
		else
		if(a == 'ЭЛЕКТРОЗАВОДСКАЯ'){
			$('#salon_2').show();
			$('.ssi').not('#salon_2').hide();
			$('#salon_i_2').show();
			$('.ssi_i').not('#salon_i_2').hide();
		}
		else
		if(a == 'КРАСНЫЕ ВОРОТА'){
			$('#salon_3').show();
			$('.ssi').not('#salon_3').hide();
			$('#salon_i_3').show();
			$('.ssi_i').not('#salon_i_3').hide();
		}
		else
		if(a == 'ТАГАНСКАЯ'){
			$('#salon_4').show();
			$('.ssi').not('#salon_4').hide();
			$('#salon_i_4').show();
			$('.ssi_i').not('#salon_i_4').hide();
		}
		else
		if(a == 'РАМЕНКИ'){
			$('#salon_5').show();
			$('.ssi').not('#salon_5').hide();
			$('#salon_i_5').show();
			$('.ssi_i').not('#salon_i_5').hide();
		}
		else
		if(a == 'УНИВЕРСИТЕТ'){
			$('#salon_6').show();
			$('.ssi').not('#salon_6').hide();
			$('#salon_i_6').show();
			$('.ssi_i').not('#salon_i_6').hide();
		}
		else
		if(a == 'ПРОСПЕКТ ВЕРНАДСКОГО'){
			$('#salon_7').show();
			$('.ssi').not('#salon_7').hide();
			$('#salon_i_7').show();
			$('.ssi_i').not('#salon_i_7').hide();
		}
		else
		if(a == 'КАШИРСКАЯ'){
			$('#salon_8').show();
			$('.ssi').not('#salon_8').hide();
			$('#salon_i_8').show();
			$('.ssi_i').not('#salon_i_8').hide();
		}
	})
});

//скрипт на услуги мобилка
$(document).ready(function() {
	$('#a_burger').on( "click", function() {
		$('#a_burger').addClass('hamburger_is_active');
		$("#p_myNav_a").css("width", "100%");
	});
});
$(document).ready(function() {
	$("#p_myNav_a:not(a)").on( "click", function() {
		$("#p_myNav_a").css("width", "0%");
		$('#a_burger').removeClass('hamburger_is_active');
	});
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var b = $('#a_burger');
		var o = $(".overlay-content_a"); // тут указываем ID элемента
		if (!o.is(e.target) // если клик был не по нашему блоку
		    && o.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#myNav").css("width", "0%"); // скрываем его
		};
		if (b.is(e.target) // если клик был не по нашему блоку
		    ) { // и не по его дочерним элементам
			$("#myNav_1").css("width", "0%"); // скрываем его
		};
	});
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var b = $('#a_burger');
		var o = $(".overlay-content_a"); // тут указываем ID элемента
		if (!o.is(e.target) // если клик был не по нашему блоку
		    && o.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#p_myNav_a").css("width", "0%"); // скрываем его
		};
		if (b.is(e.target) // если клик был не по нашему блоку
		    ) { // и не по его дочерним элементам
			$("#p_myNav_a").css("width", "0%"); // скрываем его
		};
	});
});


$(document).ready(function(){

	$(".wr_price_select_a a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
$(document).ready(function(){

	$(".wr_service_select_a a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
$(document).ready(function() {
	$('.th_class_a').on( "click", function() {
		var a = $(this).attr("id");
		if(a == 'th_1_a'){
			$('.th_1').css("display", "block");
			$('.th_class').not('.th_1').css("display", "none");
		}
		else
		if(a == 'th_2'){
			$('.th_2').css("display", "block");
			$('.th_class').not('.th_2').css("display", "none");
		}
		else
		if(a == 'th_3'){
			$('.th_3').css("display", "block");
			$('.th_class').not('.th_3').css("display", "none");
		}
		else
		if(a == 'th_4'){
			$('.th_4').css("display", "block");
			$('.th_class').not('.th_4').css("display", "none");
		}
		else
		if(a == 'th_5'){
			$('.th_5').css("display", "block");
			$('.th_class').not('.th_5').css("display", "none");
		}
		else
		if(a == 'th_6'){
			$('.th_6').css("display", "block");
			$('.th_class').not('.th_6').css("display", "none");
		}
		else
		if(a == 'th_7'){
			$('.th_7').css("display", "block");
			$('.th_class').not('.th_7').css("display", "none");
		}
		else
		if(a == 'th_8'){
			$('.th_8').css("display", "block");
			$('.th_class').not('.th_8').css("display", "none");
		}
		else
		if(a == 'th_9'){
			$('.th_9').css("display", "block");
			$('.th_class').not('.th_9').css("display", "none");
		}
		else
		if(a == 'th_10'){
			$('.th_10').css("display", "block");
			$('.th_class').not('.th_10').css("display", "none");
		}
		else
		if(a == 'th_11'){
			$('.th_11').css("display", "block");
			$('.th_class').not('.th_11').css("display", "none");
		}
		else
		if(a == 'th_12'){
			$('.th_12').css("display", "block");
			$('.th_class').not('.th_12').css("display", "none");
		}
		else
		if(a == 'th_13'){
			$('.th_13').css("display", "block");
			$('.th_class').not('.th_13').css("display", "none");
		}
		else
		if(a == 'th_14'){
			$('.th_14').css("display", "block");
			$('.th_class').not('.th_14').css("display", "none");
		}
		else
		if(a == 'th_15'){
			$('.th_15').css("display", "block");
			$('.th_class').not('.th_15').css("display", "none");
		}
		else
		if(a == 'th_16'){
			$('.th_16').css("display", "block");
			$('.th_class').not('.th_16').css("display", "none");
		}
		else
		if(a == 'th_17'){
			$('.th_17').css("display", "block");
			$('.th_class').not('.th_17').css("display", "none");
		}
		else
		if(a == 'th_18'){
			$('.th_18').css("display", "block");
			$('.th_class').not('.th_18').css("display", "none");
		}
		else
		if(a == 'th_19'){
			$('.th_19').css("display", "block");
			$('.th_class').not('.th_19').css("display", "none");
		}
		else
		if(a == 'th_20'){
			$('.th_20').css("display", "block");
			$('.th_class').not('.th_20').css("display", "none");
		}
		else
		if(a == 'th_21'){
			$('.th_21').css("display", "block");
			$('.th_class').not('.th_21').css("display", "none");
		}
		else
		if(a == 'th_22'){
			$('.th_22').css("display", "block");
			$('.th_class').not('.th_22').css("display", "none");
		}
		else
		if(a == 'th_23'){
			$('.th_23').css("display", "block");
			$('.th_class').not('.th_23').css("display", "none");
		}
		else
		if(a == 'th_24'){
			$('.th_24').css("display", "block");
			$('.th_class').not('.th_24').css("display", "none");
		}
		else
		if(a == 'th_25'){
			$('.th_25').css("display", "block");
			$('.th_class').not('.th_25').css("display", "none");
		}
		else
		if(a == 'th_26'){
			$('.th_26').css("display", "block");
			$('.th_class').not('.th_26').css("display", "none");
		}
		else
		if(a == 'th_27'){
			$('.th_27').css("display", "block");
			$('.th_class').not('.th_27').css("display", "none");
		}
		else
		if(a == 'th_28'){
			$('.th_28').css("display", "block");
			$('.th_class').not('.th_28').css("display", "none");
		}
		else
		if(a == 'th_29'){
			$('.th_29').css("display", "block");
			$('.th_class').not('.th_29').css("display", "none");
		}
		else
		if(a == 'th_30'){
			$('.th_30').css("display", "block");
			$('.th_class').not('.th_30').css("display", "none");
		}
		else
		if(a == 'th_31'){
			$('.th_31').css("display", "block");
			$('.th_class').not('.th_31').css("display", "none");
		}
		else
		if(a == 'th_32'){
			$('.th_32').css("display", "block");
			$('.th_class').not('.th_32').css("display", "none");
		}
		else
		if(a == 'th_33'){
			$('.th_33').css("display", "block");
			$('.th_class').not('.th_33').css("display", "none");
		}
		else
		if(a == 'th_34'){
			$('.th_34').css("display", "block");
			$('.th_class').not('.th_34').css("display", "none");
		}
		else
		if(a == 'th_35'){
			$('.th_35').css("display", "block");
			$('.th_class').not('.th_35').css("display", "none");
		}
		else
		if(a == 'th_36'){
			$('.th_36').css("display", "block");
			$('.th_class').not('.th_36').css("display", "none");
		}
		else
		if(a == 'th_37'){
			$('.th_37').css("display", "block");
			$('.th_class').not('.th_37').css("display", "none");
		}
		else
		if(a == 'th_38'){
			$('.th_38').css("display", "block");
			$('.th_class').not('.th_38').css("display", "none");
		}
		else
		if(a == 'th_39'){
			$('.th_39').css("display", "block");
			$('.th_class').not('.th_39').css("display", "none");
		}
		else
		if(a == 'th_40'){
			$('.th_40').css("display", "block");
			$('.th_class').not('.th_40').css("display", "none");
		}
		else
		if(a == 'th_41'){
			$('.th_41').css("display", "block");
			$('.th_class').not('.th_41').css("display", "none");
		}
		else
		if(a == 'th_42'){
			$('.th_42').css("display", "block");
			$('.th_class').not('.th_42').css("display", "none");
		}
		else
		if(a == 'th_43'){
			$('.th_43').css("display", "block");
			$('.th_class').not('.th_43').css("display", "none");
		}
		else
		if(a == 'th_44'){
			$('.th_44').css("display", "block");
			$('.th_class').not('.th_44').css("display", "none");
		}
		else
		if(a == 'th_45'){
			$('.th_45').css("display", "block");
			$('.th_class').not('.th_45').css("display", "none");
		}
		else
		if(a == 'th_46'){
			$('.th_46').css("display", "block");
			$('.th_class').not('.th_46').css("display", "none");
		}
		else
		if(a == 'th_47'){
			$('.th_47').css("display", "block");
			$('.th_class').not('.th_47').css("display", "none");
		}
		else
		if(a == 'th_48'){
			$('.th_48').css("display", "block");
			$('.th_class').not('.th_48').css("display", "none");
		}
		else
		if(a == 'th_49'){
			$('.th_49').css("display", "block");
			$('.th_class').not('.th_49').css("display", "none");
		}
		else
		if(a == 'th_50'){
			$('.th_50').css("display", "block");
			$('.th_class').not('.th_50').css("display", "none");
		}
		else
		if(a == 'th_51'){
			$('.th_51').css("display", "block");
			$('.th_class').not('.th_51').css("display", "none");
		}
		else
		if(a == 'th_52'){
			$('.th_52').css("display", "block");
			$('.th_class').not('.th_52').css("display", "none");
		}
		else
		if(a == 'th_53'){
			$('.th_53').css("display", "block");
			$('.th_class').not('.th_53').css("display", "none");
		}
		else
		if(a == 'th_54'){
			$('.th_54').css("display", "block");
			$('.th_class').not('.th_54').css("display", "none");
		}
		else
		if(a == 'th_55'){
			$('.th_55').css("display", "block");
			$('.th_class').not('.th_55').css("display", "none");
		}
		
		
	});
});




// конец мобилки услуги

$(document).ready(function() {
	$('#burger').on( "click", function() {
		$('#burger').addClass('hamburger_is_active');
		$("#myNav").css("width", "100%");
	});
});
$(document).ready(function() {
	$("#myNav:not(a)").on( "click", function() {
		$("#myNav").css("width", "0%");
		$('#burger').removeClass('hamburger_is_active');
	});
});

$(document).ready(function() {
	$('.call_back_button').on( "click", function() {
		$("#myNav_1").css("width", "100%");
	});
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var b = $('#burger');
		var o = $(".overlay-content"); // тут указываем ID элемента
		if (!o.is(e.target) // если клик был не по нашему блоку
		    && o.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#myNav").css("width", "0%"); // скрываем его
		};
		if (b.is(e.target) // если клик был не по нашему блоку
		    ) { // и не по его дочерним элементам
			$("#myNav_1").css("width", "0%"); // скрываем его
		};
	});
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var b = $('#burger');
		var o = $(".overlay-content"); // тут указываем ID элемента
		if (!o.is(e.target) // если клик был не по нашему блоку
		    && o.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#myNav_1").css("width", "0%"); // скрываем его
		};
		if (b.is(e.target) // если клик был не по нашему блоку
		    ) { // и не по его дочерним элементам
			$("#myNav_1").css("width", "0%"); // скрываем его
		};
	});
});



jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".m_overlay-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#myNav_2").css("width", "0%"); // скрываем его
		}
	});
});
$(document).ready(function(){

	$(".wr_price_select a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
$(document).ready(function(){

	$(".wr_service_select a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
$(document).ready(function() {
	$('.th_class_a').on( "click", function() {
		var a = $(this).attr("id");
		if(a == 'th_1'){
			$('.th_1').css("display", "block");
			$('.th_class').not('.th_1').css("display", "none");
		}
		else
		if(a == 'th_2'){
			$('.th_2').css("display", "block");
			$('.th_class').not('.th_2').css("display", "none");
		}
		else
		if(a == 'th_3'){
			$('.th_3').css("display", "block");
			$('.th_class').not('.th_3').css("display", "none");
		}
		else
		if(a == 'th_4'){
			$('.th_4').css("display", "block");
			$('.th_class').not('.th_4').css("display", "none");
		}
		else
		if(a == 'th_5'){
			$('.th_5').css("display", "block");
			$('.th_class').not('.th_5').css("display", "none");
		}
		else
		if(a == 'th_6'){
			$('.th_6').css("display", "block");
			$('.th_class').not('.th_6').css("display", "none");
		}
		else
		if(a == 'th_7'){
			$('.th_7').css("display", "block");
			$('.th_class').not('.th_7').css("display", "none");
		}
		else
		if(a == 'th_8'){
			$('.th_8').css("display", "block");
			$('.th_class').not('.th_8').css("display", "none");
		}
		else
		if(a == 'th_9'){
			$('.th_9').css("display", "block");
			$('.th_class').not('.th_9').css("display", "none");
		}
		else
		if(a == 'th_10'){
			$('.th_10').css("display", "block");
			$('.th_class').not('.th_10').css("display", "none");
		}
		else
		if(a == 'th_11'){
			$('.th_11').css("display", "block");
			$('.th_class').not('.th_11').css("display", "none");
		}
		else
		if(a == 'th_12'){
			$('.th_12').css("display", "block");
			$('.th_class').not('.th_12').css("display", "none");
		}
		else
		if(a == 'th_13'){
			$('.th_13').css("display", "block");
			$('.th_class').not('.th_13').css("display", "none");
		}
		else
		if(a == 'th_14'){
			$('.th_14').css("display", "block");
			$('.th_class').not('.th_14').css("display", "none");
		}
		else
		if(a == 'th_15'){
			$('.th_15').css("display", "block");
			$('.th_class').not('.th_15').css("display", "none");
		}
		else
		if(a == 'th_16'){
			$('.th_16').css("display", "block");
			$('.th_class').not('.th_16').css("display", "none");
		}
		else
		if(a == 'th_17'){
			$('.th_17').css("display", "block");
			$('.th_class').not('.th_17').css("display", "none");
		}
		else
		if(a == 'th_18'){
			$('.th_18').css("display", "block");
			$('.th_class').not('.th_18').css("display", "none");
		}
		else
		if(a == 'th_19'){
			$('.th_19').css("display", "block");
			$('.th_class').not('.th_19').css("display", "none");
		}
		else
		if(a == 'th_20'){
			$('.th_20').css("display", "block");
			$('.th_class').not('.th_20').css("display", "none");
		}
		else
		if(a == 'th_21'){
			$('.th_21').css("display", "block");
			$('.th_class').not('.th_21').css("display", "none");
		}
		else
		if(a == 'th_22'){
			$('.th_22').css("display", "block");
			$('.th_class').not('.th_22').css("display", "none");
		}
		else
		if(a == 'th_23'){
			$('.th_23').css("display", "block");
			$('.th_class').not('.th_23').css("display", "none");
		}
		else
		if(a == 'th_24'){
			$('.th_24').css("display", "block");
			$('.th_class').not('.th_24').css("display", "none");
		}
		else
		if(a == 'th_25'){
			$('.th_25').css("display", "block");
			$('.th_class').not('.th_25').css("display", "none");
		}
		else
		if(a == 'th_26'){
			$('.th_26').css("display", "block");
			$('.th_class').not('.th_26').css("display", "none");
		}
		else
		if(a == 'th_27'){
			$('.th_27').css("display", "block");
			$('.th_class').not('.th_27').css("display", "none");
		}
		else
		if(a == 'th_28'){
			$('.th_28').css("display", "block");
			$('.th_class').not('.th_28').css("display", "none");
		}
		else
		if(a == 'th_29'){
			$('.th_29').css("display", "block");
			$('.th_class').not('.th_29').css("display", "none");
		}
		else
		if(a == 'th_30'){
			$('.th_30').css("display", "block");
			$('.th_class').not('.th_30').css("display", "none");
		}
		else
		if(a == 'th_31'){
			$('.th_31').css("display", "block");
			$('.th_class').not('.th_31').css("display", "none");
		}
		else
		if(a == 'th_32'){
			$('.th_32').css("display", "block");
			$('.th_class').not('.th_32').css("display", "none");
		}
		else
		if(a == 'th_33'){
			$('.th_33').css("display", "block");
			$('.th_class').not('.th_33').css("display", "none");
		}
		else
		if(a == 'th_34'){
			$('.th_34').css("display", "block");
			$('.th_class').not('.th_34').css("display", "none");
		}
		else
		if(a == 'th_35'){
			$('.th_35').css("display", "block");
			$('.th_class').not('.th_35').css("display", "none");
		}
		else
		if(a == 'th_36'){
			$('.th_36').css("display", "block");
			$('.th_class').not('.th_36').css("display", "none");
		}
		else
		if(a == 'th_37'){
			$('.th_37').css("display", "block");
			$('.th_class').not('.th_37').css("display", "none");
		}
		else
		if(a == 'th_38'){
			$('.th_38').css("display", "block");
			$('.th_class').not('.th_38').css("display", "none");
		}
		else
		if(a == 'th_39'){
			$('.th_39').css("display", "block");
			$('.th_class').not('.th_39').css("display", "none");
		}
		else
		if(a == 'th_40'){
			$('.th_40').css("display", "block");
			$('.th_class').not('.th_40').css("display", "none");
		}
		else
		if(a == 'th_41'){
			$('.th_41').css("display", "block");
			$('.th_class').not('.th_41').css("display", "none");
		}
		else
		if(a == 'th_42'){
			$('.th_42').css("display", "block");
			$('.th_class').not('.th_42').css("display", "none");
		}
		else
		if(a == 'th_43'){
			$('.th_43').css("display", "block");
			$('.th_class').not('.th_43').css("display", "none");
		}
		else
		if(a == 'th_44'){
			$('.th_44').css("display", "block");
			$('.th_class').not('.th_44').css("display", "none");
		}
		else
		if(a == 'th_45'){
			$('.th_45').css("display", "block");
			$('.th_class').not('.th_45').css("display", "none");
		}
		else
		if(a == 'th_46'){
			$('.th_46').css("display", "block");
			$('.th_class').not('.th_46').css("display", "none");
		}
		else
		if(a == 'th_47'){
			$('.th_47').css("display", "block");
			$('.th_class').not('.th_47').css("display", "none");
		}
		else
		if(a == 'th_48'){
			$('.th_48').css("display", "block");
			$('.th_class').not('.th_48').css("display", "none");
		}
		else
		if(a == 'th_49'){
			$('.th_49').css("display", "block");
			$('.th_class').not('.th_49').css("display", "none");
		}
		else
		if(a == 'th_50'){
			$('.th_50').css("display", "block");
			$('.th_class').not('.th_50').css("display", "none");
		}
		else
		if(a == 'th_51'){
			$('.th_51').css("display", "block");
			$('.th_class').not('.th_51').css("display", "none");
		}
		else
		if(a == 'th_52'){
			$('.th_52').css("display", "block");
			$('.th_class').not('.th_52').css("display", "none");
		}
		else
		if(a == 'th_53'){
			$('.th_53').css("display", "block");
			$('.th_class').not('.th_53').css("display", "none");
		}
		else
		if(a == 'th_54'){
			$('.th_54').css("display", "block");
			$('.th_class').not('.th_54').css("display", "none");
		}
		else
		if(a == 'th_55'){
			$('.th_55').css("display", "block");
			$('.th_class').not('.th_55').css("display", "none");
		}
		
		
	});
});


$(document).ready(function() {
	$('#p_burger').on( "click", function() {
		$('#p_burger').addClass('hamburger_is_active');
		$("#p_myNav").css("width", "100%");
	});
});
$(document).ready(function() {
	$("#p_myNav:not(a)").on( "click", function() {
		$("#p_myNav").css("width", "0%");
		$('#p_burger').removeClass('hamburger_is_active');
	});
});

$(document).ready(function() {
	$('.overlay-content a').on( "click", function() {
		var a = $(this).text();
		console.log(a);


		if(a == 'ПРЕОБРАЖЕНСКАЯ ПЛОЩАДЬ'){
			$('#wrpmin_1').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_1').css("display", "none");
		}
		else
		if(a == 'ЭЛЕКТРОЗАВОДСКАЯ'){
			$('#wrpmin_2').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_2').css("display", "none");
		}
		else
		if(a == 'КРАСНЫЕ ВОРОТА'){
			$('#wrpmin_3').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_3').css("display", "none");
		}
		else
		if(a == 'ТАГАНСКАЯ'){
			$('#wrpmin_4').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_4').css("display", "none");
		}
		else
		if(a == 'РАМЕНКИ'){
			$('#wrpmin_5').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_5').css("display", "none");
		}
		else
		if(a == 'УНИВЕРСИТЕТ'){
			$('#wrpmin_6').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_6').css("display", "none");
		}
		else
		if(a == 'ПРОСПЕКТ ВЕРНАДСКОГО'){
			$('#wrpmin_7').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_7').css("display", "none");
		}
		else
		if(a == 'КАШИРСКАЯ'){
			$('#wrpmin_8').css("display", "inline-block");
			$('.wr_p_metro_info_name').not('#wrpmin_8').css("display", "none");
		}
	})
});

$(document).ready(function(){

var a1 = $("gallery").offsetWidth - $("gallery").clientWidth;
$("gallery").css("padding", "a1");

});

ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.64666482,
        longitude: 37.65757014,
        hintContent: '<div class="map__hint">Каширская</div>'
    },
    {
        latitude: 55.76789020,
        longitude: 37.64687425,
        hintContent: '<div class="map__hint">Красные ворота</div>'
    },
    {
        latitude: 55.73968735,
        longitude: 37.66354516,
        hintContent: '<div class="map__hint">Таганская</div>'
    },
    {
        latitude: 55.79381913,
        longitude: 37.71318389,
        hintContent: '<div class="map__hint">Преображенская</div>'
    },
    {
        latitude: 55.67263962,
        longitude: 37.51466752,
        hintContent: '<div class="map__hint">Проспект Вернадского</div>'
    },
    {
        latitude: 55.69929719,
        longitude: 37.50364948,
        hintContent: '<div class="map__hint">Раменки</div>'
    },
    {
        latitude: 55.68845755,
        longitude: 37.53442280,
        hintContent: '<div class="map__hint">Университет</div>'
    },
    {
        latitude: 55.78172420,
        longitude: 37.70706000,
        hintContent: '<div class="map__hint">Электрозавдоская</div>'
    },
], geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [55.75409081, 37.61745814],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag', 'dblClickZoom']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/logolo.png',
                iconImageSize: [40, 40],
                iconImageOffset: [-23, -57]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/logolo.png',
                size: [70, 70],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
};

