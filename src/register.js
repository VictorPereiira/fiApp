const { number } = require('prompts/dist/prompts');
const { question } = require('readline-sync');

async function register(params = false) {
    let res = null;

    if (params) {
        res = params
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
    const fp = ['S', 'T']
    const lp = ['-', '+']

    if (param.length > 7) return false;
    let newArray = param

    function verify() {
        newArray = newArray.slice(0, newArray.length - 1)
        !(+param[param.length - 2] >= 1) ? res = false : true;
        !lp.includes(param[param.length - 1]) ? res = false : true
    }

    const notNumber = () => {
        const nNbr = newArray.filter(el => +el >= 0)
        nNbr === [] || nNbr.length !== newArray.length ? res = false : true
    }

    switch (param[0]) {
        case 'T':
            newArray = newArray.slice(1);
            +param[3] > 0 ? verify() : true;
            notNumber()
            break;
        case 'S':
            newArray = newArray.slice(1);
            +param[4] > 0 ? verify() : true;
            notNumber()
            break;
        default:
            res = false
            break;
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