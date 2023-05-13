const vid = document.getElementById('videoBg');
const main = document.getElementById('mainContent');

vid.onended = function () {

    vid.style.visibility = 'hidden';
    main.style.visibility = 'visible';
    location.href = './home.html';
}



document.getElementById('heading').classList = 'animate__animated animate__lightSpeedInLeft';
document.getElementById('logo').classList = 'animate__animated animate__jackInTheBox';
    setTimeout(()=>{
        document.getElementById('heading').classList = 'animate__animated animate__bounceOutRight';      
        document.getElementById('logo').classList = 'animate__animated animate__bounceOutLeft';      
    }, 1750)

    setTimeout(()=>{
        main.style.backgroundPosition = "100% 100%";
    }, 3000)