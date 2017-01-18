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

    this.setPosition = function (pos) {
        if (pos) {
            position = pos;
        }
    }

    this.setCanvas = function (canvasObj) {
        if (canvasObj) {
            this.canvas = canvasObj;
            this.context = this.canvas.getContext("2d");
        }
    }

    this.clearViewport = function() {
        this.checkContext();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.checkContext = function() {
        if (this.context === undefined || this.context === null) {
            throw new UserException("Context is not initialized for viewport");
        }
    }

    this.update = function() {
        this.clearViewport();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element && element.draw) {
                element.draw(this.context);
            }
        }
    }
}
