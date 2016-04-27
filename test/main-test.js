describe('lcd-digits', function () {
    var inputs;

    beforeEach(function () {
        inputs = '910';
    });

    describe('unit test', function () {
        describe('buildSplitedString teat', function () {
            it('return buildSplitedString', function () {
                var splitedString = buildSplitedString(inputs);

                var expectText = ['9', '1', '0'];

                expect(splitedString).toEqual(expectText);
            });
        });
        describe('buldPrintItems test', function () {
            it('return buldPrintItems', function () {
                var lcdNumberItems = loadAllItems();

                var splitedString = ['9', '1', '0'];

                var printIems = buildPrintItems(splitedString, lcdNumberItems);

                var expectText = [{
                    number: 9,
                    lcdNumber: ['._.', '|_|', '..|']
                },
                    {
                        number: 1,
                        lcdNumber: ['...', '..|', '..| ']
                    },
                    {
                        number: 0,
                        lcdNumber: ['._.', '|.|', '|_|']
                    }
                ];

                expect(printIems).toEqual(expectText);
            });
        });
    });

    describe('integration test', function () {
        describe('print test', function () {
            it('return print', function () {

                spyOn(console, 'log');

                printReceipt(inputs);

                var expectText =
                        '._. ... ._.\n' +
                        '|_| ..| |.|\n' +
                        '..| ..|  |_|\n'
                    ;
                expect(console.log).toHaveBeenCalledWith(expectText);
            });
        });
    });
});
