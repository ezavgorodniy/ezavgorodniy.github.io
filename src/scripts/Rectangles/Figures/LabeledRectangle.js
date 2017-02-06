/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

function LabeledRectangle(cfg) {
    this.id  = cfg.id;
    this.label = cfg.label;
    this.position = cfg.position;
    this.size = cfg.size;
    this.backgroundColor = cfg.backgroundColor ? cfg.backgroundColor : "#FF0000";
    this.borderColor = cfg.borderColor ? cfg.borderColor : "#000000";
    this.fontColor = cfg.fontColor ? cfg.fontColor : "#000000";

    this.draw = function (ctx, deltaX, deltaY, zoomLevel) {
        if (!deltaX) {
            deltaX = 0;
        }
        if (!deltaY) {
            deltaY = 0;
        }
        if (!zoomLevel) {
            zoomLevel = 1.0;
        }

        if (ctx) {
            var rectanglePositionX = this.position.x + deltaX;
            var rectanglePositionY = this.position.y + deltaY;
            var rectangleWidth = this.size.width;
            var rectangleHeight = this.size.height;

            var labelPositionX = rectanglePositionX + rectangleWidth / 2;
            var labelPositionY = rectanglePositionY + rectangleHeight / 2;


            rectanglePositionX *= zoomLevel;
            rectanglePositionY *= zoomLevel;
            rectangleWidth *= zoomLevel;
            rectangleHeight *= zoomLevel;
            labelPositionX *= zoomLevel;
            labelPositionY *= zoomLevel;

            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(rectanglePositionX, rectanglePositionY, rectangleWidth, rectangleHeight);

            var fontPosition = new Position({
                    x: labelPositionX,
                    y: labelPositionY
                });
            ctx.fillStyle = this.fontColor;
            ctx.fillText(this.label, fontPosition.x, fontPosition.y);
        }
        else {
            throw UserException("context is undefined for draw labeled rectangle");
        }
    };

    this.getDrawingArea = function (deltaX, deltaY, zoomLevel) {
        if (!deltaX) {
            deltaX = 0;
        }
        if (!deltaY) {
            deltaY = 0;
        }
        if (!zoomLevel) {
            zoomLevel = 1.0;
        }


        var rectanglePositionX = this.position.x + deltaX;
        var rectanglePositionY = this.position.y + deltaY;
        var rectangleWidth = this.size.width;
        var rectangleHeight = this.size.height;

        return {
            left: rectanglePositionX * zoomLevel,
            right: (rectanglePositionX + rectangleWidth) * zoomLevel,
            top: rectanglePositionY * zoomLevel,
            bottom: (rectanglePositionY + rectangleHeight) * zoomLevel
        };
    };
}
