class OldCalc {
    operation(term1, term2, operation) {
        switch (operation) {
            case 'add':
                return term1 + term2;
            case 'sub':
                return term1 - term2;
            default:
                return NaN
        }
    }
}

class NewCalc {
    add(term1, term2) {
        return term1 + term2;
    }

    sub(term1, term2) {
        return term1 - term2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(term1, term2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(term1, term2);
            case 'sub':
                return this.calc.sub(term1, term2);
            default:
                return NaN
        }
    }
}

const oldCalc = new OldCalc();
console.log('Old Calc Class', oldCalc.operation(10, 2, 'add'));

const newCalc = new NewCalc()
console.log('New Calc Class', newCalc.add(10, 5));
const adapter = new CalcAdapter();
console.log('Adapter Calc Class', adapter.operations(2, 5, 'add'));
console.log('Adapter Calc Class', adapter.operations(3, 2, 'sub'));

