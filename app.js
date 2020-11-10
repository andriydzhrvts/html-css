$("#navToggle").on("click", function(event) {
    event.preventDefault();
        $("#nav").toggleClass("show")
        $(".burger__item").toggleClass("active")
        $(".doctors__nav").toggleClass("hide")
});
    
     

