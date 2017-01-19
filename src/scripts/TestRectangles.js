/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

$(document).ready(function () {
    TestCanvasApplication = {};
    var viewport = new Viewport();
    var canvas = document.createElement("canvas");

    var drawingArea = new DrawingArea({
        canvas: canvas,
        viewport: viewport
    });

    var testLabeledRectanglesCollection = dummyData.labeledRectangles;
    for (var i = 0; i < testLabeledRectanglesCollection.length; i++) {
        viewport.pushElement(testLabeledRectanglesCollection[i]);
    }

    viewport.update();

    var delta = 1;
    $("#btnDown").click(function() {
        TestCanvasApplication.drawingArea.moveViewPortDown(delta);
    });

    $("#btnUp").click(function() {
        TestCanvasApplication.drawingArea.moveViewPortUp(delta);
    });

    $("#btnLeft").click(function() {
        TestCanvasApplication.drawingArea.moveViewPortLeft(delta);
    });

    $("#btnRight").click(function() {
        TestCanvasApplication.drawingArea.moveViewPortRight(delta);
    });

    TestCanvasApplication.drawingArea = drawingArea;
});
