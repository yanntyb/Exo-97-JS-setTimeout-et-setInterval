let button = document.getElementById("timeout");
let button2 = document.getElementById("interval-start");
let button3 = document.getElementById("interval-stop");

button.addEventListener("click",function(){
    setTimeout(function(){
        let div = document.createElement("div");
        div.innerHTML = "ok";
        div.style.backgroundColor = "red";
        document.getElementById("timeout-div").appendChild(div);
    },1000)
})

button2.addEventListener("click",function(){
    let time = 0;
    let interval = setInterval(function(){
        button3.addEventListener("click",function(){
            clearInterval(interval);
        })
        let div = document.getElementById("interval-div");
        div.innerHTML = time;
        time++;
    },1000)
})