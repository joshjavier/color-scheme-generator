const colorInput = document.getElementById("color-input")
const colorSchemeMode = document.getElementById("color-scheme-mode")
const button = document.getElementById("button")
const colorBlocks = document.querySelectorAll(".color-block")
const colorNames = document.querySelectorAll(".color-name")

let colors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
let seedColor = colorInput.value
let mode = colorSchemeMode.value

function handleClick(event) {
    event.preventDefault();
    getColorScheme(colorInput.value, colorSchemeMode.value)
}

async function getColorScheme(_seedColor, _mode) {
    // don't fetch if seedColor and mode hasn't been changed
    if (seedColor === _seedColor && mode === _mode) {
        console.log("Seed color and mode hasn't been changed.")
        return
    }
    
    seedColor = _seedColor
    mode = _mode

    let url = "https://www.thecolorapi.com/scheme";
    let options = "?hex=" + seedColor.slice(1) + "&mode=" + mode;
    url += options;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    colors = data.colors.map(item => item.hex.value)
    
    paint(colors)
}

function paint(colors) {
    for (let i = 0; i < colors.length; i++) {
        colorBlocks[i].style.backgroundColor = colors[i]
        colorNames[i].textContent = colors[i]
    }
}

button.addEventListener("click", handleClick);

// Paint initial colors
colorInput.value = colors[0]
paint(colors)
