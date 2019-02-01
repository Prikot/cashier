function isIsogram(str){
    var a = str.split('');
    var b = {};
    for(var i = 0; i < a.length; i++) {
        var c;
        c = a[i].toLowerCase();

        if(!b[c]) {
            b[c] = 1;
        } else {
            b[c] += 1;
        }

        for(var key in b) {
            var value = b[key];
            if(value > 1) {
                return false;
            }
        }
    }
return true;
}

console.log(isIsogram("zlevdtohrbgSfkmnyusjqi"));