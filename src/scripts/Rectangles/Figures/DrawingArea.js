/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

function DrawingArea(cfg) {
    var defaultWidth = 680;
    var defaultHeight = 470;
    var defaultElementInsertBefore = document.body.childNodes[0];

    if (cfg.canvas) {
        this.canvas = cfg.canvas;
    }
    else {
        throw new UserException("No canvas for drawing area");
    }
    if (typeof(cfg.canvasWidth)  === "number") {
        this.canvas.width = cfg.canvasWidth;
    }
    else {
        this.canvas.width = defaultWidth;
    }

    if (typeof(cfg.canvasHeight)  === "number") {
        this.canvas.height = cfg.canvasHeight;
    }
    else {
        this.canvas.height = defaultHeight;
    }

    if (cfg.viewport) {
        this.viewport = cfg.viewport;
        this.viewport.setCanvas(this.canvas);
    }
    else {
        throw new UserException("No viewport for drawing area");
    }

    var elementInsertBefore = cfg.elementInsertBefore ? cfg.elementInsertBefore : defaultElementInsertBefore;
    document.body.insertBefore(this.canvas, elementInsertBefore);
}