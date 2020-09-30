let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let strictEqual = require('../calculation')

describe('', () => {
    describe('strictEqual', () => {
        it('returns the sum of the numbers in the array provided', () => {
            let nums = [1, 2, 3, 4]

            let total = sumAll(nums)

            expect(total).to.equal(10)
        })
    })
})


