let nightModeButton = $('#nightModeButton')
let body = $('body')
let nightModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function nightModeToggle() {
    body.toggleClass('nightMode');
    if (body.hasClass('nightMode')){
        nightModeButton.text("Light Mode");
    }else{
        nightModeButton.text("Dark Mode");
    }
    console.log("Night mode toggled");
}

if (nightModeMediaQuery.matches){
    nightModeToggle();
}

nightModeButton.click(function(){
    nightModeToggle();
});

nightModeMediaQuery.addEventListener('change', (e) => {
    nightModeToggle();
});