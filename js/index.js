const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 1024;
canvas.height = 576;

// create the player from player class
const player1 = new Player();

// draw player using class method
player1.draw();

function animate(){
    window.requestAnimationFrame(animate);

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);   
    

}

animate();

