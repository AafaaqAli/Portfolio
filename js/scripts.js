
    (function ($) {
        "use strict"; // Start of use strict
    
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top - 72,
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });
    
        //OnClick
    
    //facebook
            $(document.getElementById("sm_facebook")).click(
                function open(){
                    window.open('https://www.facebook.com/aafaqali/', '_blank')
    
                });
    
                $(document.getElementById("sm_instagram")).click(
                    function open(){
                        window.open('https://www.instagram.com/aafaqalee/', '_blank')
        
                    });
                    $(document.getElementById("sm_twitter")).click(
                        function open(){
                            window.open('https://twitter.com/AafaqAle', '_blank')
            
                        });
                            $(document.getElementById("sm_linked_in")).click(
                                function open(){
                                    window.open('https://www.linkedin.com/in/aafaaq-ali-232832130/', '_blank')
                    
                                });
                                $(document.getElementById("sm_stack_overflow")).click(
                                    function open(){
                                        window.open('https://stackoverflow.com/users/10003471/ali', '_blank')
                        
                                    });
                                    $(document.getElementById("sm_github")).click(
                                        function open(){
                                            window.open('https://github.com/AafaaqAli', '_blank')
                            
                                        });
                                        $(document.getElementById("sm_email")).click(
                                            function open(){
                                                window.open('https://www.facebook.com/aafaqali/', '_blank')
                                
                                            });
                                    
                                    
                
        // Closes responsive menu when a scroll trigger link is clicked
        $(".js-scroll-trigger").click(function () {
            $(".navbar-collapse").collapse("hide");
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $("body").scrollspy({
            target: "#mainNav",
            offset: 74,
        });
    
        // Collapse Navbar
        var navbarCollapse = function () {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
    })(jQuery); // End of use strict
    