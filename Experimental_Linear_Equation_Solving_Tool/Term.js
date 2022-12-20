let MAX_CHAR = 26;

class Term {
  constructor(
    name,
    x,
    y,
    side,
    firstParenthPos,
    secondParenthPos,
    thirdParenthPos,
    fourthParenthPos
  ) {
    this.name = name;
    this.coefficient = this.getCoefficient();
    this.variable = this.getVariable();
    this.tex = ``;
    this.x = x;
    this.y = y;
    this.rectwidth = 50;
    this.rectheight = 30;
    this.side = side;
    this.color = "";
    this.division = false;
    this.multiplication = false;
    this.firstParenthPos = firstParenthPos;
    this.secondParenthPos = secondParenthPos;
  }

  drawTerm(colorDict) {
    if (this.name != "" && this.coefficient != 0) {
      push();

      if (this.division == true || this.multiplication == true)
        this.color = "white";
      else this.color = colorDict[this.variable];

      fill(this.color);
      rect(this.x, this.y, this.rectwidth, this.rectheight);

      pop();

      this.addPlusSign();
      // text(this.name, this.x, this.y);

      push();

      textSize(16);
      if (this.coefficient < 0)
        text(round(this.coefficient, 2) + this.variable, this.x, this.y + 3);
      else
        text(
          this.name[0] + round(this.coefficient, 2) + this.variable,
          this.x,
          this.y + 3
        );

      pop();

      if (this.division == true) {
        push();
        strokeWeight(4);
        line(this.x - 25, this.y - 25, this.x + 25, this.y - 25);
        pop();
      }

      if (this.multiplication == true) {
        push();

        textSize(30);
        
        text(
          "(",
          this.firstParenthPos,
          this.y + 2
        );
        text(
          ")",
          this.secondParenthPos,
          this.y + 2
        );

        pop();
      }
    }
  }

  sortString(str) {
    var sortedString = "";
    // Hash array to keep count of characters.
    let letters = new Array(MAX_CHAR);
    for (let i = 0; i < MAX_CHAR; i++) {
      letters[i] = 0;
    }

    // Traverse string and increment
    // count of characters
    for (let x = 0; x < str.length; x++) {
      // 'a'-'a' will be 0, 'b'-'a' will be 1,
      // so for location of character in count
      // array we will do str[i]-'a'.
      letters[str[x].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    // Traverse the hash array and print
    // characters
    for (let i = 0; i < MAX_CHAR; i++) {
      for (let j = 0; j < letters[i]; j++) {
        sortedString += String.fromCharCode(i + "a".charCodeAt(0));
      }
    }
    return sortedString;
  }

  addPlusSign() {
    var newName = "";
    if (this.name != "" && this.name[0] != "-" && this.name[0] != "+") {
      newName += "+";
      newName += this.name[0];
      for (var i = 1; i < this.name.length; i++) {
        newName += this.name[i];
      }
      this.name = newName;
    }
  }

  getCoefficient() {
    var coefficient = "";
    for (var i = 0; i < this.name.length; i++) {
      if (this.name.charCodeAt(i) == 45 || this.name.charCodeAt(i) == 46)
        coefficient += this.name[i];
      if (this.name.charCodeAt(i) >= 48 && this.name.charCodeAt(i) <= 57)
        coefficient += this.name[i];
    }

    if (!isNaN(parseFloat(coefficient))) return parseFloat(coefficient);
    else if (this.name[0] == "-") return -1;
    else return 1;
  }

  getVariable() {
    var variable = "";
    for (var i = 0; i < this.name.length; i++) {
      if (this.name.charCodeAt(i) >= 65 && this.name.charCodeAt(i) <= 122)
        variable += this.name[i];
    }
    return this.sortString(variable);
  }
}
