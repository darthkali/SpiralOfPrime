function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    let x = 200;
    let y = 200;
    let amount = 0;
    let direction = 0
    let step = 20
    let cycleSize = 10
    ellipse(x, y, cycleSize + 3, cycleSize + 3);
    ellipse(x, y, cycleSize, cycleSize);

    for (let count = 0; count < 35; count++) {

        if (count % 2 === 0) {
            amount++
        }
        for (let n = 0; n < amount; n++) {
            let xOld = x
            let yOld = y
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

            line(xOld, yOld, x, y);
            if (random(1) < 0.2) {
                ellipse(x, y, 10, 10);
            }
        }

        if (direction < 3) {
            direction++
        } else {
            direction = 0
        }
    }
    noLoop();

}

