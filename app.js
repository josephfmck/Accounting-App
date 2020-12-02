//  Storage Controller

//  Receipt Controller
const ReceiptCtrl = (function () {
  //IIFE
  //PRIVATE
  //  Receipt Constructor
  const Receipt = function (id, date, description, amount) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
  };

  //  Data Structure / State
  const data = {
    receipts: [
      {
        id: 0,
        date: "01/09/2019",
        description: "Deposit into account",
        amount: 700.5,
      },
      {
        id: 1,
        date: "02/17/2019",
        description: "Deposit into account",
        amount: 50.5,
      },
      {
        id: 2,
        date: "12/15/2019",
        description: "Deposit in account",
        amount: 20.98,
      },
    ],
    currentReceipt: null,
    totalReceipts: 0,
  };

  //PUBLIC METHODS
  return {
    getReceiptData: function () {
      return data.receipts;
    },
    logData: function () {
      //ReceiptCtrl.logData()
      return data;
    },
  };
})();

//  Disbursement Controller
const DisbursementCtrl = (function () {
  //PRIVATE
  //  Disbursement Constructor
  const Disbursement = function (id, date, description, amount) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
  };

  //  Data Structure / State
  const data = {
    disbursements: [
      {
        id: 0,
        date: "01/06/2019",
        description: "Withdrawal from account",
        amount: 300.5,
      },
      {
        id: 1,
        date: "02/11/2019",
        description: "Withdrawal from account",
        amount: 40.5,
      },
      {
        id: 2,
        date: "12/12/2019",
        description: "Withdrawal from account",
        amount: 500.98,
      },
    ],
    currentDisbursement: null,
    totalDisbursements: 0,
  };

  //PUBLIC METHODS
  return {
    getDisbursementData: function () {
      return data.disbursements;
    },
    logData: function () {
      //DisbursementCtrl.logData()
      return data;
    },
  };
})();

//  UI Controller
const UICtrl = (function () {
  //PRIVATE
  //  UISelectors replace hard-coded html selectors
  const UISelectors = {
    receiptList: "#receipt-list",
    receiptAddBtn: '#receipt-add-btn',
    receiptDateInput: '#receipt-date',
    receiptDescriptionInput: '#receipt-description',
    receiptAmountInput: '#receipt-amount',
    disbursementList: "#disbursement-list",
    disbursementAddBtn: '#disbursement-add-btn',
    disbursementDateInput: '#disbursement-date',
    disbursementDescriptionInput: '#disbursement-description',
    disbursementAmountInput: '#disbursement-amount'

  };

  //  PUBLIC METHODS
  return {
    populateReceiptList: function (receiptItems) {
      let html = "";

      receiptItems.forEach((item) => {
        //  Append lis to html
        html += `
                <li class="list-group-item" id="receipt-${item.id}">
                <div class="row">
                  <div class="col-md-2">
                    <em>${item.date}</em>
                  </div>
                  <div class="col-md-6">
                    <p>${item.description}</p>
                  </div>

                  <div class="col-md-3">
                    <strong>$${item.amount}</strong>
                  </div>
                  <div class="col-md-1">
                    <a href="#">
                      <i class="edit-item fa fa-pencil"></i>
                    </a>
                  </div>
                </div>
              </li>
                `;
      });

      //    Insert Receipt items
      document.querySelector(UISelectors.receiptList).innerHTML = html;
    },
    populateDisbursementList: function (disbursementItems) {
      let html = "";

      disbursementItems.forEach((item) => {
        //  Append lis to html
        html += `
        <li class="list-group-item" id="receipt-${item.id}">
        <div class="row">
          <div class="col-md-2">
            <em>${item.date}</em>
          </div>
          <div class="col-md-6">
            <p>${item.description}</p>
          </div>

          <div class="col-md-3">
            <strong>$${item.amount}</strong>
          </div>
          <div class="col-md-1">
            <a href="#">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </div>
        </div>
      </li>
        `;
      });

      //    Insert Disbursement items
      document.querySelector(UISelectors.disbursementList).innerHTML = html;
    },
    getUISelectors: function() {
        return UISelectors;
    }
  };
})();

//  App Controller
const AppCtrl = (function (ReceiptCtrl, DisbursementCtrl, UICtrl) {
  //PRIVATE
    //  Load initial event listeners
    const loadEventListeners = function() {
        //  Get UI Selectors from UICtrl
        const UISelectors = UICtrl.getUISelectors();

    }


  //  PUBLIC METHODS
  return {
    init: function () {
      console.log("Intializing App");
      //  Fetch receiptItems from data structure
      const receiptItems = ReceiptCtrl.getReceiptData();
      //  Fetch disbursementItems from data structure
      const disbursementItems = DisbursementCtrl.getDisbursementData();

      //  Populate list with receiptItems
      UICtrl.populateReceiptList(receiptItems);
      //  Populate list with disbursementItems
      UICtrl.populateDisbursementList(disbursementItems);
    },
  };
})(ReceiptCtrl, DisbursementCtrl, UICtrl);

//  Intialize App
AppCtrl.init();
