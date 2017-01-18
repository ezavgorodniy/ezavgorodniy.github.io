/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */

$(document).ready(function () {
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
});
