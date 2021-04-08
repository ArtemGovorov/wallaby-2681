module.exports = function testCommonInterface(prefix, ...params) {
    test(prefix + ' something', () => {
        throw new Error('1')
    })
    test(prefix + ' the other', () => {
        throw new Error('2')
    })

}