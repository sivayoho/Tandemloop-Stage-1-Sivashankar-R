class Calculator {
    constructor(a,b,operation) {
        this.a = a;
        this.b = b;
        this.operation = operation.toLowerCase();
    }

    claculate () {
        switch(this.operation){
            case 'add':
                return this.a + this.b;
            
            case 'sub':
                return this.a - this.b;

            case 'mul':
                return this.a * this.b;

            case 'div':
                return this.a / this.b 
                
            default:
                return "Invalid operation"
        }
    }
}

const add = new Calculator(55,88,'add');
console.log(add.claculate());

const sub = new Calculator(100,25,'sub');
console.log(sub.claculate());

const mul = new Calculator(10,30,'mul');
console.log(mul.claculate());

const div = new Calculator(224,56, 'div');
console.log(div.claculate());