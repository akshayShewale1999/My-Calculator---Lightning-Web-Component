import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track result;
    @track showResult;
    @track previousStoreResult = [];

    handleChange(event) {
        const field = event.target.name;
        if (field === 'fnum') {
            this.firstNumber = event.target.value;
        } else {
            this.secondNumber = event.target.value;
        }
    }

    calculation(event) {
        const fNum = parseInt(this.firstNumber);
        const sNum = parseInt(this.secondNumber);

        if (event.target.name === 'add') {
            this.result = 'Addition of ' + fNum + ' and ' + sNum + ' is ' + (fNum + sNum);
            this.previousStoreResult.push(this.result);
        } else if (event.target.name === 'sub') {
            this.result = 'Subtraction of ' + fNum + ' and ' + sNum + ' is ' + (fNum - sNum);
            this.previousStoreResult.push(this.result);
        } else if (event.target.name === 'mul') {
            this.result = 'Multiplication of ' + fNum + ' and ' + sNum + ' is ' + (fNum * sNum);
            this.previousStoreResult.push(this.result);
        } else if (event.target.name === 'div') {
            this.result = 'Division of ' + fNum + ' and ' + sNum + ' is ' + (fNum / sNum);
            this.previousStoreResult.push(this.result);
        }

        if(event.target.name==='preview'){
            this.showResult=true;
        }
    }
}
