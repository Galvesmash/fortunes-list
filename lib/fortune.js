const fortunes = require('../build');

var fortune = {};

fortune.fortune = function(key = null){
    if (key) {
        if (!fortunes.keys.includes(key)) return '';
        
        const list = fortunes.map[key];
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
