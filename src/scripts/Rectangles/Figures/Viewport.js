/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

function Viewport() {
    var elements = [];
    var position = new Position({
        x: 0,
        y: 0
    });

    this.pushElement = function (el) {
        elements.push(el);
    };

    this.popElement = function (el) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] === el) {
                elements.splice(i, 1);
                break;
            }
        }
    };

    this.popElement = function (el) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] === el) {
                // TODO: implement removing
                return elements.splice(i, 1);
            }
        }
    };

    this.getPosition = function () {
        return position;
    };

    this.setPosition = function (pos) {
        if (pos) {
            position = pos;
        }
    };

    this.setCanvas = function (canvasObj) {
        if (canvasObj) {
            this.canvas = canvasObj;
            this.context = this.canvas.getContext("2d");
        }
    };

    this.clearViewport = function() {
        elements = [];
        this.update();
    };

    this.clearCanvas = function() {
        this.checkContext();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.checkContext = function() {
        if (this.context === undefined || this.context === null) {
            throw new UserException("Context is not initialized for viewport");
        }
    };

    this.update = function() {
        var currentPosition = this.getPosition();

        this.clearCanvas();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element) {
                var canDraw = true;
                if (element.getDrawingArea) {
                    var drawingArea = element.getDrawingArea(currentPosition.x, currentPosition.y, 1.0);
                    if ((drawingArea.right < 0 && drawingArea.left) ||
                        (drawingArea.top < 0 && drawingArea.bottom < 0) ||
                        (drawingArea.left > this.canvas.width && drawingArea.right > this.canvas.width) ||
                        (drawingArea.bottom > this.canvas.height && drawingArea.top > this.canvas.height)) {
                        canDraw = false;
                    }
                }

                if (canDraw && element.draw) {
                    element.draw(this.context, currentPosition.x, currentPosition.y, 1.0);
                }
            }
        }
    };

    this.reset = function() {
        this.setPosition(new Position({
            x: 0,
            y: 0
        }));
        this.update();
    }
}
