const texts = ['designer', 'coder', 'artist'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 250);
})();


$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});
    