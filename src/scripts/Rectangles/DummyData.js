/**
 * Created by yevhen.zavhorodnii on 20/12/2016.
 */
var dummyData = {
    labeledRectangles: [
        new LabeledRectangle({
            id: 1,
            label: '1',
            position: new Position({
                x: 10,
                y: 10
            }),
            size: new Size({
                width: 100,
                height: 50
            }),
            backgroundColor: "#FF0000",
            borderColor: "#000000",
            fontColor: "#000000"
        }),
        new LabeledRectangle({
            id: 1,
            label: '2',
            position: new Position({
                x: 120,
                y: 70
            }),
            size: new Size({
                width: 100,
                height: 50
            }),
            backgroundColor: "#00FF00",
            borderColor: "#00FFFF",
            fontColor: "#0000FF"
        })
    ]
};
