class Trinomial {
    constructor() {
        this.aTimesC = floor(random(1, 50));
        this.allFactorsOfATimesC;
        this.a;
        this.b;
        this.c;
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
}