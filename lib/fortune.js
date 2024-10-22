var fortunes = require('../build');

(function(){
    var fortune = {};

    fortune.fortune = function(key = null){
        if (key) {
            const list = fortunes[key];
            const r = Math.floor(Math.random() * list.length);
            return list[r];
        }

        const r = Math.floor(Math.random() * fortunes.list.length);
        return fortunes.list[r];
    };

    fortune.keys = function(){
        return fortunes.keys;
    };

    module.exports = fortune;
})();
