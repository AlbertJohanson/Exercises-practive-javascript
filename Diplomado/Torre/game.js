const height = "40px";

var body;

var square1 = new Square(true);
var square2 = new Square(false);
var square3 = new Square(false);

function createDiv(){
    var box = document.createElement("div");
    return box
}


function FillContent(){
    var content =  new Array();

    for (var i = 0; i < 5; i++) {
        content[i] = new Fill();
    }


    return content
}


function FillTokens(){
    var content = new Array();

    content[0] = new Fill();
    content[1] = new TokensS();
    content[2] = new TokensM();
    content[3] = new TokensL();
    content[4] = new TokensXL();


    return content
}


function TokensS(){
    this.box = createDiv();
    this.box.style.width = "10%";
    this.box.style.height = height;
    this.box.style.backgroundColor = "#0088CC";
    this.box.style.marginLeft = "auto";
    this.box.style.marginRight = "auto";
}

function TokensM(){
    this.box = createDiv();
    this.box.style.width = "30%";
    this.box.style.height = height;
    this.box.style.backgroundColor = "#979797";
    this.box.style.marginLeft = "auto";
    this.box.style.marginRight = "auto";
}

function TokensL(){
    this.box = createDiv();
    this.box.style.width = "50%";
    this.box.style.height = height;
    this.box.style.backgroundColor = "#66666666";
    this.box.style.marginLeft = "auto";
    this.box.style.marginRight = "auto";
}

function TokensXL(){
    this.box = createDiv();
    this.box.style.width = "70%";
    this.box.style.height = height;
    this.box.style.backgroundColor = "black";
    this.box.style.marginLeft = "auto";
    this.box.style.marginRight = "auto";
}

function Fill(){
    this.box = createDiv();
    this.box.style.width = "100%";
    this.box.style.height = height;
}

function Square(InitialBox){
    this.box = createDiv();
    this.box.style.width = "28%";
    this.box.style.height = "200px";
    this.box.style.marginLeft = "4%";
    this.box.style.borderWidth = "2%";
    this.box.style.border = "solid black";
    this.box.style.float = "left";
    this.content;

    if(InitialBox){
        this.content = FillTokens();
    } else {
        this.content = FillContent()
    }

    for (var i = 0; i < this.content.length; i++) {
        this.box.appendChild(this.content[i].box);
    }
}



function start(){
    body = document.getElementsByTagName("body")[0];
    
    body.appendChild(square1.box);
    body.appendChild(square2.box);
    body.appendChild(square3.box);
}


window.addEventListener("load", start, false);

