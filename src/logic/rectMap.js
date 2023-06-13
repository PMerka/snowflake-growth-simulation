
// Use cellWidth and cellHeight aprox in ratio if hexagon width to hexagon height

// fill() method is drawing rows in y direction for pointy hexagon (rows and collumns are fliped)

/**
 * Class is used for drawing to canvas.
 */
class rectMap{
    constructor(canvas, size, displayNthFrame = 10){
        this.canvas = canvas
        this.size = size
        this.cellWidth=7
        this.cellHeight=8
        this.cellShift=4
        this.frameN=0
        this.displayNthFrame=displayNthFrame
        this.canvas.width = this.cellWidth * size + this.cellShift
        this.canvas.height = this.cellHeight * size
        this.ctx = canvas.getContext("2d");
    }

    clearCanvas = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    /**
     * fill the cell in row and column
     * @param {{column: number, row: number}} cell 
     */
    fill = (cell) => {
        const y = cell.column
        const x = cell.row
        this.ctx.fillStyle = cell.color;
        let shift = 0
        if (x%2 === 0){
            shift = this.cellShift
        }
        this.ctx.fillRect(this.cellWidth * x  , this.cellHeight*y + shift, this.cellWidth, this.cellHeight )
    }

    update = (grid) => {
        //Main drawing method
        this.frameN += 1;
        if (this.frameN % this.displayNthFrame !== 0) {
          return;
        }

        // uncoment for canvas clear in every display
        //this.clearCanvas()
        for (let row = 0; row < this.size; row += 1) {
            for (let column = 0; column < this.size; column += 1) {
              if (grid[row][column] >= 1) {
                this.fill({
                  column: column,
                  row: row,
                  color: `rgba(210, 235, 250, 0.4)`
                });
              }
            }
        }
    }

}

export default rectMap

