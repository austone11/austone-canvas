function GetAustoneCanvas(){
    let A_Canvas = document.getElementById("austone_canvas")
    if(A_Canvas.localName == "canvas"){
        return A_Canvas
    }else{
        console.warn("Austone Canvas - Element with ID of 'austone_canvas' on a non-canvas object.")
    }
}

function ClearCanvas(){
    let A_Canvas = GetAustoneCanvas()
    if(!A_Canvas){
        return
    }

    const ctx = A_Canvas.getContext("2d");

    ctx.clearRect(0,0, A_Canvas.width, A_Canvas.height)
}

function Rect(xPos, yPos, xSize, ySize){
    let A_Canvas = GetAustoneCanvas()
    if(!A_Canvas){
        return
    }

    const ctx = A_Canvas.getContext("2d");

    ctx.fillRect(xPos, yPos, xSize, ySize)
}
