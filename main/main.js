function printLcdNumber(inputs) {

    var splitedString = buildSplitedString(inputs);

    var lcdNumberItems = loadAllItems();
    var printItems = buildPrintItems(splitedString, lcdNumberItems);

    var printText = buildPrint(printItems);

}


function buildSplitedString(inputs) {

    var splitedString = inputs.split('');

    return splitedString;
}


function buildPrintItems(splitedString, lcdNumberItems) {
    var printItems = [];

    splitedString.forEach(function (splitedNumber) {
        var item = findLcdNumber(splitedNumber, lcdNumberItems);
        if (item) {
            printItems.push(item);
        }
    });

    return printItems;
}


function findLcdNumber(splitedNumber, lcdNumberItems) {
    var flag = false;

    lcdNumberItems.forEach(function (lcdNumberItem) {
        if (splitedNumber == lcdNumberItem.number) {
            flag = lcdNumberItem;
        }
    });

    return flag;
}


function buildPrint(printItems) {
    var printText = '';

    for (var i = 0; i < printItems.length; i++) {
        var print = '';
        printItems.forEach(function (printItem) {
            var item = printItem.lcdNumber[i];
            if (!print) {
                print += item;
            } else {
                print += ' ' + item;
            }
        });
        printText += print + '\n';
    }

    console.log(printText);
}
