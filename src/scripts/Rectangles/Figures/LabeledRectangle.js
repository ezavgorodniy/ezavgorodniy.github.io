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

    this.draw = function (ctx, deltaX, deltaY) {
        debugger;
        if (!deltaX) {
            deltaX = 0;
        }
        if (!deltaY) {
            deltaY = 0;
        }
        if (ctx) {
            var rectanglePositionX = this.position.x + deltaX;
            var rectanglePositionY = this.position.y + deltaY;
            ctx.fillStyle = this.backgroundColor;
            ctx.fillRect(rectanglePositionX, rectanglePositionY, this.size.width, this.size.height);

            var fontPosition = new Position({
                    x: rectanglePositionX + this.size.width / 2,
                    y: rectanglePositionY + this.size.height / 2
                });
            ctx.fillStyle = this.fontColor;
            ctx.fillText(this.label, fontPosition.x, fontPosition.y);
        }
        else {
            throw UserException("context is undefined for draw labeled rectangle");
        }
    }
}
