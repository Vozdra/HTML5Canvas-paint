window.onload = function() {
  let canvas = document.getElementById('cvs-board')
  let ctx = canvas.getContext('2d')
  let BrushColor = 'black'

  document.getElementById('color').oninput = function(e) {
    BrushColor = this.value
  }

  canvas.onmousedown = function(e) {
    canvas.onmousemove = function(e) {
      let x = e.offsetX
      let y = e.offsetY

      ctx.fillStyle = BrushColor
      ctx.fillRect(x-5,y-5,10,10)
      ctx.fill()
    }
    canvas.onmouseup = function(e) {
      canvas.onmousemove = null
    }
  }

  document.getElementById('clear-cvs').onclick = function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

}