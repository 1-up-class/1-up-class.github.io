var mushroomVIPList = [];

function Mushroom(x, y){
    this.x = x;
    this.y = y;
    this.maxSize = 200;
    this.size = Math.random() * this.maxSize + 20;

    this.img = document.createElement("IMG");
    this.img.style.top = "-200px";
    this.img.style.left = "-200px";
    this.img.src = "img/mushroom.png";
    this.img.style.transform = "rotate(120deg)";
    this.img.style.width = this.size + "px";
    this.img.style.display = "block";
    this.img.style.position = "absolute";
    this.img.style.zIndex = Math.floor(this.size) + "";
    this.hueValue = (this.size / this.maxSize) * 360;
    this.img.style.filter = "hue-rotate(" + this.hueValue + "deg)";
    // console.log(this.img.style.filter);
    this.speed = this.size / this.maxSize;
    this.speedModifierX = 3;
    this.speedModifierY = 2;

    document.body.append(this.img);

    this.spawn = function(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }

    this.move = function(){
        this.x += this.speed * this.speedModifierX;
        this.y += this.speed * this.speedModifierY;
        this.hueValue = (this.x / window.innerWidth) * 360;
        this.img.style.filter = "hue-rotate(" + this.hueValue + "deg)";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.size + "px";
    }
}

function spawnMushroom(){
    mushroomVIPList.push(new Mushroom(Math.random() * 1000 * -1, Math.random() * 1000 * -1));
}

function draw(){
    for(var i = 0; i < mushroomVIPList.length; i++){
        mushroomVIPList[i].move();
    }
}

function setup(){
    setInterval(function(){draw();}, 16);
}

setup();