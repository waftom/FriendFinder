//var data = [];
var data = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(data);
    });

    app.post("/api/friends", function(req, res) {
        var r = req.body;

        if(data.length > 0) {
            var arr = [];
            var aux = 0;
            var val = 0;
            for(var i=0;i<data.length;i++) {
                for(var j=0;j<10;j++) {
                    aux = r.scores[j] - data[i].scores[j];
                    if(aux < 0) aux = aux * (-1);
                    val += aux;
                }
                console.log(data[i].name + ': ' + val);
                arr.push([val,i]);
                val = 0;
            }

            data.push(r);

            arr.sort(function(a, b) {
                if (a[0] === b[0]) return 0;
                else return (a[0] < b[0]) ? -1 : 1;
            });

            //console.log(data[arr[0][1]]);
            console.log('----------------------');

            res.send(data[arr[0][1]]);
        } else {
            data.push(r);
            res.send(r);
        }
    });
};
