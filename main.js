var mushroom = document.getElementById("mushroom");
var mushroomVIPList = [];


function Mushroom(x, y){
    this.x = x;
    this.y = y;
    this.size = Math.random() * 200 + 20;
    this.img = document.createElement("IMG");
    this.img.style.top = "-200px";
    this.img.style.left = "-200px";
    this.img.src = "img/1-up-mushroom.png";
    this.img.style.width = "";
    // this.img.onload = function(){
    //     console.log(this.width);
    //     // this.img.width = "200px";
    // }
    this.img.style.width = this.size + "px";
    this.img.style.display = "block";
    this.img.style.position = "absolute";
    this.img.style.zindex = "-1";

    document.body.append(this.img);
    this.spawn = function(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }

    this.move = function(){
        this.x += 4;
        this.y += 4;
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.size + "px";
    }
}

function spawnMushroom(){
    mushroomVIPList.push(new Mushroom(Math.random() * 1000 * -1, Math.random() * 1000 * -1));
}

function mushroomRain(){


}

function draw(){
    for(var i = 0; i < mushroomVIPList.length; i++){
        mushroomVIPList[i].move();
    }
}

function setup(){
    // var mushroom = document.getElementById("mushroom");
    // mushroom.style.left = "0px";
    // mushroom.style.top = "0px";
    setInterval(function(){draw();}, 16);

}




setup();