const width = 1920;
const height = 1080;

function setup() {
    createCanvas(width, height);
    noLoop();
}

function draw() {
    let x = width / 2;
    let y = height / 2;
    let amount = 0;
    let direction = 0
    let step = 5
    let cycleSize = 5
    let count = 0

    while (count < 50000) {

        if (count % 2 === 0) {
            amount++
        }
        for (let n = 0; n < amount; n++) {
            if (isPrime(count)) {
                ellipse(x, y, cycleSize, cycleSize);
            }

            switch (direction) {
                case 0:
                    x = x + step;
                    console.log(x)
                    break;
                case 1:
                    y = y - step;
                    break;
                case 2:
                    x = x - step;
                    break;
                case 3:
                    y = y + step;
                    break;
            }
            count++
        }

        if (direction < 3) {
            direction++
        } else {
            direction = 0
        }
    }
}

