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
