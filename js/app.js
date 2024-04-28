// pre-loader
window.addEventListener('load', function () {
    document.querySelector('.pre-loader').style.display = "none";
})
//nav
document.querySelector('.navbtn').addEventListener('click', function () {
    document.querySelector('.nav-item').classList.toggle('nav-show')
})

//video play/pause
document.querySelector('.video-switch').addEventListener('click', function(){
    let btn = document.querySelector('.video-switch-btn');
    if (!btn.classList.contains('play-pause')){
        btn.classList.add('play-pause');
        document.querySelector('.video-items').pause();
    }
    else{
        btn.classList.remove('play-pause');
        document.querySelector('.video-items').play();
    }
})



