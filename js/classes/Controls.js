class Controls {
    constructor(){
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false
        }
        
    }
    move(){
        if (controls.keys.a == true) player.position.x -=5;
        else if (controls.keys.d == true) player.position.x += 5
    }
}

// to move left and right
addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            controls.keys.a = true;
            break
        case 'd':
            controls.keys.d = true;
            break
    }
})

// to stop moving left and right
addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            controls.keys.a = false;
            break
        case 'd':
            controls.keys.d = false;
            break
    }
})
