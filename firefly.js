class Firefly {
    constructor() {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.r = 10;
        this.speed = 0.2;
    }

    createFirefly() {
        noStroke();
        fill('rgb(255, 243, 161)');
        circle(this.x, this.y, this.r);
    }

    moveFirefly() {
        let number = random(0, 1);
        if (number < 0.25) {
            this.x += this.speed;
        } else if (number > 0.25 && number < 0.5) {
            this.y += this.speed;
        } else if (number > 0.5 && number < 0.75) {
            this.y -= this.speed;
        } else if (number > 0.75) {
            this.y -= this.speed;
        }
    }

    // blink() {
    //     if ()
    // }
}