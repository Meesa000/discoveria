class Player {
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity = 1;
        this.gravity = 1;
        this.width = 50;
        this.height = 50;
        }

        draw(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y,this.width,this.height);
        }
        update(){
            this.velocity += 1;
            this.position.y = this.position.y + this.velocity;
            
            
        }

    
}


