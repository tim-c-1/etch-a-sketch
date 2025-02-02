const container = document.querySelector("#container");
const button = document.querySelector("button");

function createGrid(size=16, r=0, g=0, b=0){
    for (let i=0; i < size**2; i++){
        const div = document.createElement("div");
        div.addEventListener("pointerover", () => {
            let rgb = generateRandomRGB()
            r = rgb[0];
            g = rgb[1];
            b = rgb[2];
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
            if (parseInt(div.style.opacity) <= .9){
                div.style.opacity = +div.style.opacity + .1;
            }
        })

        container.appendChild(div);
        div.style = `width: calc(100%/${size}); height: calc(100%/${size})`;
        div.style.opacity = 0;
    }
}

button.addEventListener("click", () => {
    let size = parseInt(prompt("number of squares per side?"));
    if(size > 100){
        do {
        alert("pick a size 100 or less");
        size = parseInt(prompt("number of squares per side?"));
        } while (size > 100);
    }
    container.querySelectorAll("div").forEach(d => d.remove());
    createGrid(size);

})

function generateRandomRGB(){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return [r,g,b];
}

console.log(generateRandomRGB());

createGrid();