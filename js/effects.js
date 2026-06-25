let rainInterval = null;

function toggleRain(){

    const layer = document.getElementById("effect-layer");
    if(!layer) return;

    if(layer.dataset.rain === "on"){

        layer.dataset.rain = "off";
        layer.style.display = "none";
        clearInterval(rainInterval);
        layer.innerHTML = "";
        return;
    }

    layer.dataset.rain = "on";
    layer.style.display = "block";

    rainInterval = setInterval(createRainDrop, 250);
}


function createRainDrop(){

    const layer =
    document.getElementById(
        "effect-layer"
    );

    if(!layer){
        return;
    }

    const drop =
    document.createElement(
        "div"
    );

    drop.className =
    "rain-drop";

    const x =
    Math.random()
    * layer.offsetWidth;

    const length =
    15 +
    Math.random() * 20;

    const speed =
    0.6 +
    Math.random() * 0.8;

    drop.style.left =
    x + "px";

    drop.style.top =
    "-40px";

    drop.style.height =
    length + "px";

    layer.appendChild(
        drop
    );

    let y = -40;

    const move =
    setInterval(()=>{

        y += speed;

        drop.style.top =
        y + "px";

        if(
            y >
            layer.offsetHeight
        ){

            clearInterval(
                move
            );

            drop.remove();

        }

    },16);

}

let snowInterval = null;

function toggleSnow(){

    const layer =
    document.getElementById(
        "effect-layer"
    );

    if(layer.dataset.snow==="on"){

        layer.dataset.snow="off";

        clearInterval(
            snowInterval
        );

        layer.innerHTML="";

        return;

    }

    layer.dataset.snow="on";

    layer.style.display=
    "block";

    snowInterval =
    setInterval(

        createSnow,

        1000

    );

}

function createSnow(){

    const layer =
    document.getElementById(
        "effect-layer"
    );

    const snow =
    document.createElement(
        "div"
    );

    snow.className =
    "snow-dot";

    snow.style.left =
    Math.random() *
    layer.offsetWidth +
    "px";

    snow.style.top =
    "-10px";

    layer.appendChild(
        snow
    );

    let y = -10;

    const move =
    setInterval(()=>{

        y += .6;

        snow.style.top =
        y + "px";

        if(
            y >
            layer.offsetHeight
        ){

            clearInterval(
                move
            );

            snow.remove();

        }

    },16);

}

function toggleNight(){
  document.body.classList.toggle("dark");
}

function togglePaper(){
    document.body.classList.toggle("paper-mode");
}