//  Storage Controller

//  Receipt Controller
const ReceiptCtrl = (function() {
    //PRIVATE
    //  Receipt Constructor
    const Receipt = function(id, date, description, amount) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.amount = amount;
    }

    const data = {
        disbursements: [
            {id: 0, date: 01/09/2019, description: 'Deposit into account', amount: 700.50},
            {id: 1, date: 02/17/2019, description: 'Deposit into account', amount: 50.50},
            {id: 2, date: 12/15/2019, description: 'Deposit in account', amount: 20.98}
        ]
    }


    //PUBLIC METHODS
    return {
        logData: function() { //ReceiptCtrl.logData()
            return
        }
    }

})();


//  Disbursement Controller
const DisbursementCtrl = (function() {
    //PRIVATE
    //  Disbursement Constructor
    const Disbursement = function(id, date, description, amount) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.amount = amount;
    }

    const data = {
        disbursements: [
            {id: 0, date: 01/06/2019, description: 'Withdrawal from account', amount: 300.50},
            {id: 1, date: 02/11/2019, description: 'Withdrawal from account', amount: 40.50},
            {id: 2, date: 12/12/2019, description: 'Withdrawal from account', amount: 500.98}
        ]
    }


    //PUBLIC METHODS
    return {
        logData: function() { //DisbursementCtrl.logData()
            return
        }
    }

})();


//  UI Controller
const UICtrl = (function() {
    //PRIVATE


    //  PUBLIC METHODS
    return {

    }
})();


//  App Controller
const AppCtrl = (function(ReceiptCtrl, DisbursementCtrl, UICtrl) {
    //PRIVATE

    //  PUBLIC METHODS
    return {
        init: function() {
            console.log('Intializing App');
        }
    }

})(ReceiptCtrl, DisbursementCtrl, UICtrl);


//  Intialize App
AppCtrl.init();