class Trinomial {
    constructor() {
        this.a;
        this.b;
        this.c;
        this.aTimesC = floor(random(1, 50));
        this.allFactorsOfATimesC;
        this.color = color("black");
    }

    getRandomABC() {
        // looping through 1 to num
        this.allFactorsOfATimesC = [];
        var randomPairOfFactors = [];
        if (this.aTimesC == 0) this.aTimesC = 12;
        for (var i = 1; i <= abs(this.aTimesC); i++) {
            let factor1;
            let factor2;

            // check if number is a factor
            if (this.aTimesC % i == 0) {
                factor1 = i;
                factor2 = this.aTimesC / i;
                this.allFactorsOfATimesC.push([factor1, factor2]);
            }
        }
        var randomIndex = floor(random(0, this.allFactorsOfATimesC.length - 1));
        this.a = this.allFactorsOfATimesC[randomIndex][0];
        this.c = this.allFactorsOfATimesC[randomIndex][1];
        randomIndex = floor(random(0, this.allFactorsOfATimesC.length - 1));
        var selector = floor(random(0, 2));
        if (selector == 0) this.b = this.allFactorsOfATimesC[randomIndex][0] + this.allFactorsOfATimesC[randomIndex][1];
        else if (selector == 1) this.b = this.allFactorsOfATimesC[randomIndex][0] + this.allFactorsOfATimesC[randomIndex][1];
        console.log(this.aTimesC);
        console.log(this.a, this.b, this.c);
        // console.log(allFactors);
    }

    drawTrinomial() {
        // console.log(`Fifteen`);
        let absValOfB = this.b;
        let absValOfC = this.c;
        let firstSign = "+";
        let secondSign = "+";

        if (this.b < 0) { // if b or c are < 0, take abs value and change the relevant sign so that it appears correct in latex.
            absValOfB *= -1;
            firstSign = "-";
        }
        if (this.c < 0) {
            absValOfC *= -1;
            secondSign = "-";
        }

        let equation = createTeX(`${this.a}x^2${firstSign}${absValOfB}x${secondSign}${absValOfC}`);

        equation.position(width * 4 / 11, height * 1 / 11);
        equation.size(48);
        // equation.size(50, 10);
        equation.stroke(color(`rgb(${this.color._getRed()}, ${this.color._getGreen()}, ${this.color._getBlue()})`));
        equation.fill(color(`rgb(${this.color._getRed()}, ${this.color._getGreen()}, ${this.color._getBlue()})`));
        // console.log(equation.position());
        equation.style("z-index", "2");
        equation.play("spinOut", 0, 2.5);
    }

    drawCirclesAndArrowsToABC() {
        push();

        var numDigitsOfA = 1;
        var numDigitsOfB = 1;
        var numDigitsOfC = 1;

        if (abs(this.))

            noFill();
        strokeWeight(3);
        stroke("red");
        if (this.a >= 10) xAdjustment += 40;
        rect(width * 4 / 11 - 2, height * 1.1 / 11, 28 + xAdjustment, 50); // around a value

        rect(width * 4.8 / 11 + xAdjustment, height * 1.1 / 11, 90 + xAdjustment, 50); // around b value
        // ellipse(width * 4.15 / 11, height * 1.5 / 11, 30 + xAdjustment, 40); // around c value

        pop();
    }

    // draw() {
    //     let v0 = createVector(50, 50);

    //     let v1 = createVector(50, 0);
    //     drawArrow(v0, v1, 'red');

    //     let v2 = createVector(mouseX - 50, mouseY - 50);
    //     drawArrow(v0, v2, 'blue');

    //     let angleBetween = v1.angleBetween(v2);
    //     noStroke();
    //     text(
    //         'angle between: ' +
    //         angleBetween.toFixed(2) +
    //         ' radians or ' +
    //         degrees(angleBetween).toFixed(2) +
    //         ' degrees',
    //         10,
    //         50,
    //         90,
    //         50
    //     );
    // }

    // draw an arrow for a vector at a given base position
    drawArrow(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(3);
        fill(myColor);
        translate(base.x, base.y);
        line(0, 0, vec.x, vec.y);
        rotate(vec.heading());
        let arrowSize = 7;
        translate(vec.mag() - arrowSize, 0);
        triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
        pop();
    }
}