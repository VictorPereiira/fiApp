const { question } = require('readline-sync');

async function register(params = false) {
    let res = null;

    if (params) {
        res = params.testValue
    } else {
        res = question('Register: ')
    }

    res = res.split(' ')
    if (res.length < 3) {
        interface(1)
        console.log('Alert! less 4 params')
        console.log('\n');
        await register()
    }

    return res
};

async function check_register(param) {
    let res = true

    if (param.length > 7) {
        res = false
    } else if (param[0] !== 'T' || param[0] !== 'S') {
        res = false
    } else if (param.length === 4 && param[3] > 0 && !param[4]) {
        res = false
    }

    return res
}

function interface(param) {
    switch (param) {
        case 1:
            console.clear();
            console.log('> finance-app');
            console.log('> 1.0');
            console.log('\n')
            break;
    }
}

module.exports = {
    register,
    check_register
}