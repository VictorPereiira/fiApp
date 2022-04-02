#!/usr/bin/env node

const { register, check_register } = require('../src/register.js');

(async () => {
    console.clear();
    console.log('> finance-app');
    console.log('> 1.0');
    console.log('\n');

    const reg = await register()
    const ckreg = await check_register(reg)
    ckreg ? console.log('End') : console.log('Continue')
})()

