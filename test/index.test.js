/* Examples menssage
should add 2 numbers together
should be able to handle 1 number 
 */

const { expect } = require('chai')
const { register, check_register } = require('../src/register.js')

const data = [
    'T 0.33 0 0', 'S 23 0.33 0 0', 'T 0.33 0 0',
    'T 0.33 0 5 1 +', 'T 0.33 0 5 1 -', 'T 0.33 0 20 2 +',
    'T 0.33 0 20 2 -'
]

const cr_data_false_case = [
    {
        phase: 'should be function return false for array value max',
        value: '1 2 3 4 5 6 7 8'
    },
    {
        phase: 'should be the first paramer is S or T',
        value: 'X 0.33 0 0'
    },
    {
        phase: 'should be intermediated params group is number type in T mode',
        value: 'T 0.33 P 5 1 -'
    },
    {
        phase: 'should be intermediated params group is number type in S mode',
        value: 'S 23.03 0.33 P 5 1 -'
    },
    {
        phase: 'should be end params',
        value: 'T 0.33 0 5'
    },
    {
        phase: 'should be end param + or -',
        value: 'T 0.33 0 5 1 &'
    }
]

describe('Main Routine', () => {

    it('should be function return an array with length less five', async () => {
        const res = await register(data[0])
        // console.log(res);
        expect(res)
            .to.be.an('array')
            .that.have.lengthOf(4)
    })

    describe('Function chek_register', () => {
        data.forEach(req => {
            it(`should be function return true for ${req}`, async () => {
                const regis = await register(req)
                const res = await check_register(regis)
                // console.log(regis) 
                // console.log(res)
                expect(res).to.be.true;
            })
        })

        cr_data_false_case.forEach(el => {
            it(el.phase, async () => {
                const regis = await register(el.value)
                const res = await check_register(regis)
                // console.log(regis) 
                // console.log(res)
                expect(res).to.be.false;
            })
        })
    })
})

