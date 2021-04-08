const testCommonInterface = require('./testCommonInterface');

describe('my component', () => {
    testCommonInterface('my component', {})

    test('specific tests', () => {
        console.log('works');
    })
})