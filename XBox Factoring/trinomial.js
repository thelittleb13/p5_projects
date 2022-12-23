class Trinomial {
    constructor() {
        this.a;
        this.b;
        this.c;
        this.aTimesC = floor(random(-50, 50));
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
        equation.add();
    }

    drawCirclesAndArrowsToABCAndMoreLOL(aBoolean, bBoolean, cBoolean, aBoolean2, cBoolean2) { // booleans determines if a, b, and c have arrows drawn to them, respectively
        push();

        var numDigitsOfA = 1;
        var numDigitsOfB = 1;
        var numDigitsOfC = 1;
        var aAdjustment = 0;
        var bAdjustment = 0;
        var cAdjustment = 0;
        var widthOfOneCharacter = 25;

        aAdjustment += this.countDigits(this.a) * widthOfOneCharacter - widthOfOneCharacter;
        bAdjustment += this.countDigits(this.b) * widthOfOneCharacter - widthOfOneCharacter;
        cAdjustment += this.countDigits(this.c) * widthOfOneCharacter - widthOfOneCharacter;

        noFill();
        strokeWeight(3);
        stroke("red");
        if (aBoolean === true) rect(width * 4 / 11 - 2, height * 1.1 / 11, 28 + aAdjustment, 50); // around a value
        if (bBoolean === true) rect(width * 4.8 / 11 + aAdjustment, height * 1.1 / 11, 90 + bAdjustment, 50); // around b value
        if (cBoolean === true || cBoolean2 === true) rect(width * 6.1 / 11 + aAdjustment + bAdjustment, height * 1.1 / 11, 90 + cAdjustment, 50); // around c value
        if (aBoolean2 === true) {
            rect(width * 4 / 11 - 2, height * 0.9 / 11, width * .3 / 11 + aAdjustment + 50, height * 1 / 11);
        }

        let aBase = createVector(315, 35);
        let aVector = createVector(45, 20);
        let bBase = createVector(400 + aAdjustment, 35);
        let bVector = createVector(45, 20);
        let cBase = createVector(510 + aAdjustment + bAdjustment, 35);
        let cVector = createVector(45, 20);

        if (aBoolean === true) this.drawArrow(aBase, aVector, 'red'); // arrow to a
        if (bBoolean === true) this.drawArrow(bBase, bVector, 'red'); // arrow to b
        if (cBoolean === true) this.drawArrow(cBase, cVector, 'red'); // arrow to c

        if (aBoolean2 === true) {
            aBase.x += width * .85 / 11 + aAdjustment + 50;
            aBase.y += height * 1.3 / 11;
            aVector.x = (width * 6.23 / 11) - aBase.x - 4;
            aVector.y = height * 3.23 / 11 - aBase.y - 4;
            // console.log(aBase.x);
            // console.log((width * 6.23 / 11));

            this.drawArrow(aBase, aVector, 'red');

            noFill();
            stroke("red");
            rect(width * 6.23 / 11, height * 3.23 / 11, width * 1.55 / 11, height * 1.77 / 11);
        }

        stroke("red");
        strokeWeight(1);
        fill("red");
        textSize(30);
        textAlign(RIGHT);
        if (aBoolean === true) text("a", aBase.x - 5, 35);
        if (bBoolean === true) text("b", bBase.x - 5, 35);
        if (cBoolean === true) text("c", cBase.x - 5, 35);

        pop();
    }

    countDigits(num) {
        var numberOfDigits = 0;
        if (abs(num) >= 0 && abs(num) <= 9) numberOfDigits = 1; // eg 1, 3, 7
        if (abs(num) >= 10 && abs(num) <= 99) numberOfDigits = 2; // eg 11, 26, 99
        if (abs(num) >= 100 && abs(num) <= 999) numberOfDigits = 3; // eg 102, 345, 999
        if (abs(num) >= 1000 && abs(num) <= 9999) numberOfDigits = 4; // eg 1000, 5540, 9999
        return numberOfDigits;
    }

    // draw() {
    // let v0 = createVector(50, 50);

    // let v1 = createVector(50, 0);
    // drawArrow(v0, v1, 'red');

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