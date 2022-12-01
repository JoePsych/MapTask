let Brushon = true;
const canvas = document.getElementById('ExpCanvas');
const ctx = canvas.getContext('2d');
let width = 0;let height = 0;
let offset = 0.8;
let xmargin = 10;let ymargin = 10;
let modW = 0;let modH = 0;

addEventListener("resize", (event) => {});
onresize = (event) => {reDraw();};

addEventListener('mousemove',(e) => {});
onmousemove = (e) => {if (e.buttons==1 & Brushon){clickControl(e.x,e.y);};}

function reDraw(){
    width = window.innerWidth*offset;
    height = window.innerHeight*offset;

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    trials();
};


let trialNum = 1;
let colourMaps = "https://github.com/JoePsych/MapTask/blob/main/Images/1.1ORIGINAL%20TRIAL.png"

function trials(){
    var img = new Image;
    img.onload = function(){
        modW = img.naturalWidth;modH = img.naturalHeight;
        ratio = modH/modW;screenRatio = height/width;
        if (ratio/screenRatio < 1){modW = width;modH = width * ratio;}
        else{modW = height / ratio;modH = height;}
        ctx.drawImage(img,0,0,modW,modH);
        console.log(ctx.toDataURL);
    };
    img.src = colourMaps;
};

function clickControl(x,y){
    canvasBounds = [xmargin+modW,ymargin+modH]
    if(x>10 & x<canvasBounds[0] & y>10 & y<canvasBounds[1]){
        console.log("WITHIN")
    }
};

reDraw();
