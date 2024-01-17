let MAX_CHAR = 26;

class Term {
  constructor(name, x, y, currentSide) {
    this.name = name;
    this.coefficient = this.getCoefficient();
    this.variable = this.getVariable();
    this.x = x;
    this.y = y;
    this.rectwidth = 50;
    this.rectheight = 50;
    this.shouldThisTermBeDragged = false;
    this.prevSide = currentSide;
    this.currentSide = currentSide;
    this.color = "";
  }

  drawTerm(colorDict) {
    push();

    thingy = this.sortedStrippedTerm();
    this.color = colorDict[thingy];

    fill(this.color);
    rect(this.x, this.y, this.rectwidth, this.rectheight);

    pop();

    this.addPlusSign();
    push();
    textSize(25);
    // text(this.coefficient + this.variable, this.x, this.y);
    if (this.coefficient < 0)
      text(this.coefficient + this.variable, this.x, this.y);
    else text(this.name[0] + this.coefficient + this.variable, this.x, this.y);
    pop();
  }

  sortedStrippedTerm() {
    var strippedTerm = "";
    for (var i = 0; i < this.name.length; i++) {
      if (this.name.charCodeAt(i) >= 65 && this.name.charCodeAt(i) <= 122)
        strippedTerm += this.name[i];
    }
    return this.sortString(strippedTerm);
  }

  drag() {
    if (this.shouldThisTermBeDragged == true) {
      this.x += movedX;
      this.y += movedY;
    }
  }

  isClicked(xpos, ypos) {
    return (
      xpos >= this.x - this.rectwidth / 2 &&
      xpos <= this.x + this.rectwidth / 2 &&
      ypos >= this.y - this.rectheight / 2 &&
      ypos <= this.y + this.rectheight / 2
    );
  }

  determineCurrentSide() {
    if (this.x < width / 2) this.currentSide = "left";
    else if (this.x > width / 2) this.currentSide = "right";
  }

  determineFlip() {
    if (this.prevSide != this.currentSide) {
      this.flipSign();
      this.prevSide = this.currentSide;
    }
  }

  flipSign() {
    var newName = "";
    if (this.name[0] == "-") newName += "+";
    else if (this.name[0] == "+") {
      newName += "-";
    } else {
      newName += "-";
      newName += this.name[0];
    }
    for (var i = 1; i < this.name.length; i++) {
      newName += this.name[i];
    }
    this.name = newName;
    this.coefficient = this.getCoefficient();
    this.variable = this.getVariable();
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
    if (this.name[0] != "-" && this.name[0] != "+") {
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
      if (this.name.charCodeAt(i) == 45) coefficient += this.name[i];
      if (this.name.charCodeAt(i) >= 48 && this.name.charCodeAt(i) <= 57)
        coefficient += this.name[i];
    }

    if (!isNaN(parseInt(coefficient))) return parseInt(coefficient);
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
