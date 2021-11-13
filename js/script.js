const startPage = document.getElementById('startPage');
const button = startPage.firstElementChild;
const poleGame = document.getElementById('poleGame');
const score = document.getElementById('score');
const scoreNumber = score.firstElementChild;
const time = document.getElementById('time');
const timeNumber = time.firstElementChild;
const poleImages = document.getElementById('poleImages');



let count;

const Bird = function (src, interval, point) {
    this.imageCreate = null;
    this.src = src;
    this.interval = interval;
    this.point = point;
}
const BirdFunction = {
    
    createBird: function(src, interval){
        this.imageCreate = document.createElement('img');        
        this.imageCreate.setAttribute("src",this.src=src);
        poleImages.append(this.imageCreate);
        this.imageCreate.style.position ='absolute';
        let int = setInterval(()=>{
            let poleImagesWidth = poleImages.getBoundingClientRect().width;
            let poleImagesHeight = poleImages.getBoundingClientRect().height;            
            this.imageCreate.setAttribute("src",this.src=src);
            this.imageCreate.style.top  = parseInt(Math.random()*poleImagesHeight)+'px'; 
            this.imageCreate.style.left = parseInt(Math.random()*poleImagesWidth) +'px';                       
        }, this.interval=interval)
    },
    pointsForBirds: function(point){
        this.imageCreate.addEventListener('click', ()=>{
            this.imageCreate.setAttribute("src","images/bang.png");
            let newScore = parseInt(scoreNumber.innerHTML)+point;            
            scoreNumber.innerHTML = newScore;
        })        
    },
    hide: function(){
        this.imageCreate.style.display = 'none';      
        clearInterval(this.interval);
    },
}

button.addEventListener('click', ()=>{
    
    startPage.style.display = 'none';
    poleGame.style.display = 'block';
    scoreNumber.innerHTML = 0;   
    count = 10;
    timeNumber.innerHTML = count;
    let int = setInterval(()=>{
        count--;        
        timeNumber.innerHTML = count;
        if(count == 0){
            clearInterval(int);
            bird_1.hide();
            bird_2.hide();
            bird_3.hide();
            bird_4.hide();
            if(scoreNumber.innerText>=100){
                poleGame.style.display = 'none';
                startPage.style.display = 'block';
                startPage.style.backgroundImage = 'url(../images/win.jpg)';  
                clearInterval(int);
            }
            else{
                poleGame.style.display = 'none';
                startPage.style.display = 'block';
                startPage.style.backgroundImage = 'url(../images/lose.jpg)';
                clearInterval(int);
            }
        }
    }, 1000)
    Bird.prototype = BirdFunction;
    let bird_1 = new Bird();
    let bird_2 = new Bird();
    let bird_3 = new Bird();
    let bird_4 = new Bird();
    bird_1.createBird("images/bird_10_points.png", 4000);
    bird_1.pointsForBirds(10)
    bird_2.createBird("images/bird_20_points.png", 3000);
    bird_2.pointsForBirds(20)
    bird_3.createBird("images/bird_50_points.png", 2000);
    bird_3.pointsForBirds(50)
    bird_4.createBird("images/pig_minus_100_points.png", 1000);
    bird_4.pointsForBirds(100)
})





















