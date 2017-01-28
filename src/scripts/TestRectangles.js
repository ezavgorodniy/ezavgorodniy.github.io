/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */
$.TestRectanglesApplication = $.TestRectanglesApplication || {};
$.TestRectanglesApplication.addMoveViewportEventHandlers = function() {
    var delta = 1;
    $("#btnDown").click(function() {
        $.TestRectanglesApplication.drawingArea.moveViewPortDown(delta);
    });

    $("#btnUp").click(function() {
        $.TestRectanglesApplication.drawingArea.moveViewPortUp(delta);
    });

    $("#btnLeft").click(function() {
        $.TestRectanglesApplication.drawingArea.moveViewPortLeft(delta);
    });

    $("#btnRight").click(function() {
        $.TestRectanglesApplication.drawingArea.moveViewPortRight(delta);
    });

    $("#btnStartTimer").click(function() {
        $("#spanTime").html("0");
        $.TestRectanglesApplication.currentTime = 0;

        var moveRectanglesInterval = parseInt($("#inputMovingInterval")[0].value);
        $.TestRectanglesApplication.wasMovingRight = true;
        $.TestRectanglesApplication.moveRectanglesInterval = setInterval(function() {
            var currentPosition = $.TestRectanglesApplication.drawingArea.viewport.getPosition();
            if ($.TestRectanglesApplication.wasMovingRight) {
                if (currentPosition.x > 0) {
                    $.TestRectanglesApplication.wasMovingRight = false;
                }
                $.TestRectanglesApplication.drawingArea.moveViewPortRight(1);
            }
            else {
                if (currentPosition.x < -10000) {
                    $.TestRectanglesApplication.wasMovingRight = true;
                }
                $.TestRectanglesApplication.drawingArea.moveViewPortLeft(1);
            }
        }, moveRectanglesInterval);

        $.TestRectanglesApplication.currentTime = 0;
        $.TestRectanglesApplication.secondsInterval = setInterval(function() {
            $("#spanTime").html($.TestRectanglesApplication.currentTime);
            $.TestRectanglesApplication.currentTime++;
        }, 1000);
    });

    $("#btnStopTimer").click(function() {
        clearInterval($.TestRectanglesApplication.secondsInterval);
        clearInterval($.TestRectanglesApplication.moveRectanglesInterval);
    });


    $("#btnRight").click(function() {
        $.TestRectanglesApplication.drawingArea.moveViewPortRight(delta);
    });

    $("#btnRegenerate").click(function() {
        $.TestRectanglesApplication.drawingArea.viewport.reset();
        $.TestRectanglesApplication.drawingArea.viewport.clearViewport();
        $.TestRectanglesApplication.generateElements();
        $.TestRectanglesApplication.drawingArea.viewport.update();

    });
};

$.TestRectanglesApplication.initializeApplication = function() {
    $.TestRectanglesApplication.drawingArea = new DrawingArea({
        canvas: $("#canvasRectangles")[0],
        viewport: new Viewport()
    });
};

$.TestRectanglesApplication.startApplication = function() {
    $.TestRectanglesApplication.initializeApplication();
    $.TestRectanglesApplication.generateElements();
    $.TestRectanglesApplication.drawingArea.viewport.update();
    $.TestRectanglesApplication.addMoveViewportEventHandlers();

    setInterval(function () {
    }, 20);
};

$.TestRectanglesApplication.generateElements = function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var rowsAmount =  parseInt($("#inputRowsAmount")[0].value);
    var margin =  parseInt($("#inputDistance")[0].value);
    var rectangleHeight =  parseInt($("#inputRectangleHeight")[0].value);
    var rowHeight = margin + rectangleHeight + margin;
    var viewportWidth =  parseInt($("#inputViewportWidth")[0].value);
    var minRectangleWidth =  parseInt($("#inputMinRectangleWidth")[0].value);
    var maxRectangleWidth =  parseInt($("#inputMaxRectangleWidth")[0].value);
    var defaultBorderColor = "#000000";
    var defaultFontColor = "#000000";
    var availableColors = [
        "#CD5C5C", "#F08080", "#FA8072", "#E9967A", "#FFA07A", "#DC143C", "#FF0000", "#B22222", "#8B0000",
        "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#C71585", "#DB7093",
        "#FFA07A", "#FF7F50", "#FF6347", "#FF4500", "#FF8C00", "#FFA500",
        "#FFD700", "#FFFF00", "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B",
        "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#6A5ACD", "#483D8B",
        "#FFF8DC", "#FFEBCD", "#FFE4C4", "#FFDEAD", "#F5DEB3", "#DEB887", "#D2B48C", "#BC8F8F", "#F4A460", "#DAA520", "#B8860B", "#CD853F", "#D2691E", "#8B4513", "#A0522D", "#A52A2A", "#800000",
        "#ADFF2F", "#7FFF00", "#7CFC00", "#00FF00", "#32CD32", "#98FB98", "#90EE90", "#00FA9A", "#00FF7F", "#3CB371", "#2E8B57", "#228B22", "#008000", "#006400", "#9ACD32", "#6B8E23", "#808000", "#556B2F", "#66CDAA", "#8FBC8F", "#20B2AA", "#008B8B", "#008080",
        "#00FFFF", "#E0FFFF", "#AFEEEE", "#7FFFD4", "#40E0D0", "#48D1CC", "#00CED1", "#5F9EA0", "#4682B4", "#B0C4DE", "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#7B68EE", "#4169E1", "#0000FF", "#0000CD", "#00008B", "#000080", "#191970"
    ];

    var rectangleNumber = 1;
    for (var rowNumber = 0; rowNumber < rowsAmount; rowNumber++)
    {
        var rowY = rowNumber * rowHeight + margin;
        var previousX = margin;
        while (previousX < viewportWidth)
        {
            var marginFromPreviousX = getRandomInt(minRectangleWidth, maxRectangleWidth);
            var rectangleWidth = getRandomInt(minRectangleWidth, maxRectangleWidth);
            var backgroundColor = availableColors[getRandomInt(0, availableColors.length)];

            var newX = previousX + marginFromPreviousX;
            if (newX + rectangleWidth < viewportWidth)
            {
                $.TestRectanglesApplication.drawingArea.viewport.pushElement(new LabeledRectangle({
                    label: rectangleNumber,
                    position: new Position({
                        x: newX,
                        y: rowY
                    }),
                    size: new Size({
                        width: rectangleWidth,
                        height: rectangleHeight
                    }),
                    backgroundColor: backgroundColor,
                    borderColor: defaultBorderColor,
                    fontColor: defaultFontColor
                }));
                rectangleNumber++;
            }

            previousX = newX + rectangleWidth;
        }
    }

    $("#spanRectanglesAmount").html(rectangleNumber);
};
