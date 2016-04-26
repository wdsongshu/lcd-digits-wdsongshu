function printReceipt(inputs) {

    var splitedString = buildSplitedString(inputs);

    var lcdNumberItems = loadAllItems();
    var printItems = buildPrintItems(splitedString, lcdNumberItems);

    var printText = buildPrint(printItems);

    console.log(printText);
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
    var flag = 0;

    for(var i = 0 ; i < printItems.length;i++) {
        var print = '';
        printItems.forEach(function (printItem) {
            var item = printItem.lcdNumber[flag];
            if(!print)
            {print+= item;}
            else
            {print += ' ' +item ;}

        });

        flag++;
        printText += print +'\n';
    }

    return printText;
}
