// index.js

const canvas 	= document.getElementById("game")
const ctx 		= canvas.getContext("2d")


// RECTÁNGULO
ctx.fillStyle = "purple"
// fillRect(x, y, width, height)
ctx.fillRect(260, 260, 30, 30)

ctx.fillStyle = "green"
ctx.fillRect(25,25,100,100)
ctx.clearRect(45, 45, 60, 60)
ctx.strokeRect(300,50,50,50)

// BORRAR TODO EL CANVAS
// ctx.clearRect(0,0, 500, 500)
// ctx.fillStyle = "red"
// ctx.fillRect(25,25,100,100)

// PATHS
ctx.beginPath()
	// INICIO DE POSICIÓN
	// moveTo(x,y)
	ctx.moveTo(450,150)
	// FIN DE POSICIÓN
	// lineTo(x,y)
	ctx.lineTo(450,50)
	// EJECUCIÓN DE PINTADO
	ctx.stroke()
ctx.closePath()
