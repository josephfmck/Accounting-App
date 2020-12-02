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
    addReceiptItemData: function (dateInput, descriptionInput, amountInput) {
      let ID;

      //generate/autoincrement id
      //  Create ID
      if(data.receipts.length > 0) {
        //set ID to last item's id + 1
        ID = data.receipts[data.receipts.length -1].id + 1;
      } else {
        //Create first item id
        ID = 0;
      }
      //  Parse date to string
      dateInput = dateInput.toString();

      //  Create new Receipt item
      let newReceiptItem = new Receipt(ID, dateInput, descriptionInput, amountInput);

      //  Add to receipts data structure arr
      data.receipts.push(newReceiptItem);

      return newReceiptItem;
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
    addDisbursementItemData: function(dateInput, descriptionInput, amountInput) {
      let ID;

      //generate/autoincrement id
      //  Create ID
      if(data.disbursements.length > 0) {
        //set ID to last item's id + 1
        ID = data.disbursements[data.disbursements.length -1].id + 1;
      } else {
        //Create first item id
        ID = 0;
      }
      //  Parse date to string
      dateInput = dateInput.toString();

      //  Create new Disbursement item
      let newDisbursementItem = new Disbursement(ID, dateInput, descriptionInput, amountInput);

      //  Add to disburments data structure arr
      data.disbursements.push(newDisbursementItem);

      return newDisbursementItem;
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
    },
    getReceiptInput: function() {
      return {
        date: document.querySelector(UISelectors.receiptDateInput).value,
        description: document.querySelector(UISelectors.receiptDescriptionInput).value,
        amount: document.querySelector(UISelectors.receiptAmountInput).value
      }
    },
    getDisbursementInput: function() {
      return {
        date: document.querySelector(UISelectors.disbursementDateInput).value,
        description: document.querySelector(UISelectors.disbursementDescriptionInput).value,
        amount: document.querySelector(UISelectors.disbursementAmountInput).value
      }
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


        //  Add receipt item event
        document.querySelector(UISelectors.receiptAddBtn).addEventListener('click', receiptAddBtnEvent);
        //  Add disbursement item event
        document.querySelector(UISelectors.disbursementAddBtn).addEventListener('click', disbursementAddBtnEvent);
    }

    //  Add receipt event
    const receiptAddBtnEvent = function(e) {
      //  Get receipt form input from UICtrl
      const receiptInput = UICtrl.getReceiptInput();

      //  Check that date, description, and amount are inputted
      if(receiptInput.date !== '' && receiptInput.description !== '' && receiptInput.amount !== '') {
        //  Add receipt 
        const newReceipt = ReceiptCtrl.addReceiptItemData(receiptInput.date, receiptInput.description, receiptInput.amount);

      }

      e.preventDefault();
    }

    //  Add Disbursement event
    const disbursementAddBtnEvent = function(e) {
      //  Get receipt form input from UICtrl
      const disbursementInput = UICtrl.getDisbursementInput();

      //  Check that date, description, and amount are inputted
      if(disbursementInput.date !== '' && disbursementInput.description !== '' && disbursementInput.amount !== '') {
        //  Add disbursement
        const newDisbursement = DisbursementCtrl.addDisbursementItemData(disbursementInput.date, disbursementInput.description, disbursementInput.amount);

      }

      e.preventDefault();
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

      //  Load Event Listeners
      loadEventListeners();
    },
  };
})(ReceiptCtrl, DisbursementCtrl, UICtrl);

//  Intialize App
AppCtrl.init();
