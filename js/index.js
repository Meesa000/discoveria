const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 1024;
canvas.height = 576;

// create the player from player class
const player = new Player();

class Controls {
    constructor(){
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false
        }
    }
}
const controls = new Controls();

function animate(){
    window.requestAnimationFrame(animate);

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);   
    

    // draw player using class method
    player.draw();
    player.update();

    if (controls.keys.a == true) player.position.x -=5;
    else if (controls.keys.d == true) player.position.x += 5


}
addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'a':
            controls.keys.a = true;
            break
        case 'd':
            controls.keys.d = true;
            break
    }
})
addEventListener('keyup', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'a':
            controls.keys.a = false;
            break
        case 'd':
            controls.keys.d = false;
            break
    }
})


animate();

