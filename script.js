var time =60;
var score = 0;
var hit;
function bubble(){
    var clutter = "";
    
    for (var i = 1; i <=136; i++) {
        clutter += `<div class="bubble">${Math.floor((Math.random()*10))}</div>`;       
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function timer(){
    var ti = setInterval(() => {
        if(time > 0 ){
            time--;
            document.querySelector(".time").textContent = time;
        }else{
           clearTimeout(ti);
           document.querySelector(".pbtm").innerHTML = `<h1>Game Over </h2><h1> Your Score ${score}`;
        }
    }, 1000);
}

function newhit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hit;

}

function increaseScore(){
    score +=10;
    document.querySelector(".score").textContent = score;
}

document.querySelector(".pbtm").addEventListener('click',function(elem){
  var cliclbubble = (Number(elem.target.textContent));
  if(hit == cliclbubble){
      increaseScore();
      newhit();
      bubble();
    }
});

bubble();
newhit();
timer();


