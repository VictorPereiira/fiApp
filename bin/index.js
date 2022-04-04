#!/usr/bin/env node

const { register, check_register } = require('../src/register.js');

(async () => {
    console.clear();
    console.log('> finance-app');
    console.log('> 1.0');
    console.log('\n');

    // const arr = ['a', 'b', 'c', 'd']
    // console.log(arr.splice(1, arr.length - 2))

    const reg = await register()
    const ckreg = await check_register(reg)
    console.log(ckreg)
    ckreg ? console.log('End') : console.log('Continue')
})()

