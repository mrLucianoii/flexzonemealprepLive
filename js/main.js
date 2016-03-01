

jQuery(document).ready(function ($) {

   
    if( $(window).width() < 768 ) {
        $('#inner2 .col-md-4').addClass('text-center');   
    }
    
    $(".blk-OverlayLFT").on('mouseover', function () {
        $("img#head1").toggleClass("centerME");
    });

    
    $(".blk-OverlayRT").on('mouseover', function () {
        $("img#head2").toggleClass("centerME");
    });

     $('.navbar a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash,
            menu = target,
        $target = $(target);
			
         
		
		if ( target != window.location.hash ){
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top-60
	        }, 500, 'swing', function () {
	        });
		}
       
    });
    
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        
        var st = $(this).scrollTop(),
            $navLogo = $("img#solid-logo");
       
        if (st > lastScrollTop){
            $navLogo.addClass('small');
        } else if ( st == 0 ){
            $navLogo.removeClass('small');

        } 
        
        lastScrollTop = st;
        
    });
                    console.log("details Luciano Zero");

    // Pannel Controls
    $("a#item0").click(function(e) {
        e.preventDefault();
        $(".order-pannel0").toggleClass('expandMe'); 
        $(".order-pannel0 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel0 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box0").toggleClass('expandMe');


    });
    $("a#item1").click(function(e) {
        e.preventDefault();
        $(".order-pannel1").toggleClass('expandMe'); 
        $(".order-pannel1 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel1 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box1").toggleClass('expandMe');
        
    });
    $('a#item2').click(function(e) {
        e.preventDefault();
        $(".order-pannel2").toggleClass('expandMe'); 
        $(".order-pannel2 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel2 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
        $("#meal-box2").toggleClass('expandMe');
        
    });
    

    // Detail Button Controls
    $("button#details0").click(function(e) {
        console.log("details Zero");
        e.preventDefault();
        $(".order-pannel0").toggleClass('expandMe'); 
        $(".order-pannel0 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel0 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');

    });
    $("#details1").click(function(e) {
        e.preventDefault();
        $(".order-pannel1").toggleClass('expandMe'); 
        $(".order-pannel1 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel1 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
    });
    $("#details2").click(function(e) {
       e.preventDefault();
        $(".order-pannel2").toggleClass('expandMe'); 
        $(".order-pannel2 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel2 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');
    });
    
      $("button#details0").click(function(e) {
        console.log("details Zero");
        e.preventDefault();
        $(".order-pannel0").toggleClass('expandMe'); 
        $(".order-pannel0 button.btn.btn-success").toggleClass('expandMe');
        $(".order-pannel0 img").toggleClass('expandMe');
        $(".nutrition").toggleClass('expandMe');
        $(".qty").toggleClass('expandMe');

    });

    

    
    $('button.plus').click(function() {
    var sp = parseFloat($(this).prev('span').text());
    $(this).prev('input').text(sp + 1);
    });

 $('button.minus').click(function() {
    var sp = parseFloat($(this).next('span').text());
    $(this).next('input').text(sp - 1);
 });
    
});