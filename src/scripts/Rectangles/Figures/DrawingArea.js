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

    this.moveViewPortDown = function(delta) {
        this.moveViewPort(0, -delta);
    };
    this.moveViewPortUp = function(delta) {
        this.moveViewPort(0, delta);
    };
    this.moveViewPortLeft = function(delta) {
        this.moveViewPort(-delta, 0);
    };
    this.moveViewPortRight = function(delta) {
        this.moveViewPort(delta, 0);
    };
    this.moveViewPort = function(deltaX, deltaY)
    {
        var viewport = this.viewport;
        var position = viewport.getPosition();

        this.viewport.setPosition(new Position({
            x: position.x + deltaX,
            y: position.y + deltaY
        }));
        this.viewport.update();
    };
}