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


        equation.position(width * 2.5 / 11, height * 1 / 11);
        equation.size(48);
        // equation.size(50, 10);
        equation.stroke(color(`rgb(${this.color._getRed()}, ${this.color._getGreen()}, ${this.color._getBlue()})`));
        equation.fill(color(`rgb(${this.color._getRed()}, ${this.color._getGreen()}, ${this.color._getBlue()})`));

        equation.play("spinOut", 0, 2.5);
    }
}