// Задача, у нас есть кассир, который продает билеты, у него на руках нет денег,
// определить сможет ли он дать сдачу всем, кто пришел купить билет. На входе массив
// из номиналов купюр у людей в очереди.

function fn(array) {
    var cashier = {
        '25': 0,
        '50': 0,
        '100': 0
    };
    if(!Array.isArray(array)) {
        console.error('not array');
        return false;
    }

    for (var i = 0; i < array.length; i++) {
        if(array[i] === 25) {
            cashier['25'] += 1;

        } else if(array[i] === 50) {
            if(cashier['25'] >= 1) {
                cashier['25'] -= 1;
                cashier['50'] += 1;

            } else {
                return false;
            }

        } else if (array[i] === 100) {
            if((cashier['25'] >= 1) && (cashier['50'] >= 1)) {
                cashier['50'] -= 1;
                cashier['25'] -= 1;
                cashier['100'] += 1;
            } else if(cashier['25'] >= 3) {
                cashier['25'] -= 3;
                cashier['100'] += 1;

            }  else {
                return false;
            }

        } else {
            return false;
        }
    }
    console.log(cashier);
    return true;
}

var x = fn([25, 25, 25, 50, 100]);
console.log(x);