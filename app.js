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
      // {
      //   id: 0,
      //   date: "01/09/2019",
      //   description: "Deposit into account",
      //   amount: 700.5,
      // },
      // {
      //   id: 1,
      //   date: "02/17/2019",
      //   description: "Deposit into account",
      //   amount: 50.5,
      // },
      // {
      //   id: 2,
      //   date: "12/15/2019",
      //   description: "Deposit in account",
      //   amount: 20.98,
      // }
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
      if (data.receipts.length > 0) {
        //set ID to last item's id + 1
        ID = data.receipts[data.receipts.length - 1].id + 1;
      } else {
        //Create first item id
        ID = 0;
      }

      //  Parse date to string
      dateInput = dateInput.toString();

      //  Parase amount to a number
      amountInput = parseInt(amountInput);

      //  Create new Receipt item
      let newReceiptItem = new Receipt(
        ID,
        dateInput,
        descriptionInput,
        amountInput
      );

      //  Add to receipts data structure arr
      data.receipts.push(newReceiptItem);

      return newReceiptItem;
    },
    getTotalReceiptAmountData: function() {
      let total = 0;

      //  Loop through receipt items and add amounts
      data.receipts.forEach((item) => {
        total += item.amount;
      });

      //  Set total receipt amount in data structure
      data.totalReceipts = total;

      return data.totalReceipts;
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
      // {
      //   id: 0,
      //   date: "01/06/2019",
      //   description: "Withdrawal from account",
      //   amount: 300.5,
      // },
      // {
      //   id: 1,
      //   date: "02/11/2019",
      //   description: "Withdrawal from account",
      //   amount: 40.5,
      // },
      // {
      //   id: 2,
      //   date: "12/12/2019",
      //   description: "Withdrawal from account",
      //   amount: 500.98,
      // }
    ],
    currentDisbursement: null,
    totalDisbursements: 0,
  };

  //PUBLIC METHODS
  return {
    getDisbursementData: function () {
      return data.disbursements;
    },
    addDisbursementItemData: function (
      dateInput,
      descriptionInput,
      amountInput
    ) {
      let ID;

      //generate/autoincrement id
      //  Create ID
      if (data.disbursements.length > 0) {
        //set ID to last item's id + 1
        ID = data.disbursements[data.disbursements.length - 1].id + 1;
      } else {
        //Create first item id
        ID = 0;
      }
      //  Parse date to string
      dateInput = dateInput.toString();

      //  Parase amount to a number
      amountInput = parseInt(amountInput);

      //  Create new Disbursement item
      let newDisbursementItem = new Disbursement(
        ID,
        dateInput,
        descriptionInput,
        amountInput
      );

      //  Add to disburments data structure arr
      data.disbursements.push(newDisbursementItem);

      return newDisbursementItem;
    },
    getTotalDisbursementAmountData: function() {
      let total = 0;

      //loop through data and add up amounts
      data.disbursements.forEach((item) => {
        total += item.amount;
      });

      //  Set to total in data structure
      data.totalDisbursements = total;

      return data.totalDisbursements;
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
    receiptAddBtn: "#receipt-add-btn",
    receiptDateInput: "#receipt-date",
    receiptDescriptionInput: "#receipt-description",
    receiptAmountInput: "#receipt-amount",
    receiptAmountTotal: '.total-receipts',
    receiptUpdateBtn: '#receipt-update-btn',
    receiptDeleteBtn: '#receipt-delete-btn',
    receiptBackBtn: '#receipt-back-btn',
    disbursementList: "#disbursement-list",
    disbursementAddBtn: "#disbursement-add-btn",
    disbursementDateInput: "#disbursement-date",
    disbursementDescriptionInput: "#disbursement-description",
    disbursementAmountInput: "#disbursement-amount",
    disbursementAmountTotal: '.total-disbursements',
    disbursementUpdateBtn: '#disbursement-update-btn',
    disbursementDeleteBtn: '#disbursement-delete-btn',
    disbursementBackBtn: '#disbursement-back-btn'
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

      //  Insert Receipt items
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

      //  Insert Disbursement items
      document.querySelector(UISelectors.disbursementList).innerHTML = html;
    },
    getUISelectors: function () {
      return UISelectors;
    },
    getReceiptInput: function () {
      return {
        date: document.querySelector(UISelectors.receiptDateInput).value,
        description: document.querySelector(UISelectors.receiptDescriptionInput)
          .value,
        amount: document.querySelector(UISelectors.receiptAmountInput).value,
      };
    },
    getDisbursementInput: function () {
      return {
        date: document.querySelector(UISelectors.disbursementDateInput).value,
        description: document.querySelector(
          UISelectors.disbursementDescriptionInput
        ).value,
        amount: document.querySelector(UISelectors.disbursementAmountInput)
          .value,
      };
    },
    addUIReceiptListItem: function (newReceiptItem) {
      //  SHOW THE LIST (revert hideList())
      //so that list is visible once item added
      document.querySelector(UISelectors.receiptList).style.display = 'block';


      //CREATE/INSERT li item HTML
      //  Create li
      const li = document.createElement("li");
      //  Add class
      li.className = "list-group-item";
      //  Add ID
      li.id = `receipt-${newReceiptItem.id}`;
      //  Add html
      li.innerHTML = `
      <div class="row">
      <div class="col-md-2">
        <em>${newReceiptItem.date}</em>
      </div>
      <div class="col-md-6">
        <p>${newReceiptItem.description}</p>
      </div>

      <div class="col-md-3">
        <strong>$${newReceiptItem.amount}</strong>
      </div>
      <div class="col-md-1">
        <a href="#">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </div>
    </div>
      `;

      // Insert item
      //beforeend means last item of list
      document
        .querySelector(UISelectors.receiptList)
        .insertAdjacentElement("beforeend", li);
    },
    addUIDisbursementListItem: function (newDisbursementItem) {
      //  SHOW THE LIST (revert hideList())
      //so that list is visible once item added
      document.querySelector(UISelectors.disbursementList).style.display = 'block';

      //CREATE/INSERT dynamic list item html
      //  Create li
      const li = document.createElement("li");
      //  Add class
      li.className = "list-group-item";
      //  Add ID
      li.id = `receipt-${newDisbursementItem.id}`;
      //  Add html
      li.innerHTML = `
            <div class="row">
            <div class="col-md-2">
              <em>${newDisbursementItem.date}</em>
            </div>
            <div class="col-md-6">
              <p>${newDisbursementItem.description}</p>
            </div>
      
            <div class="col-md-3">
              <strong>$${newDisbursementItem.amount}</strong>
            </div>
            <div class="col-md-1">
              <a href="#">
                <i class="edit-item fa fa-pencil"></i>
              </a>
            </div>
          </div>
            `;

      // Insert item
      //beforeend means last item of list
      document
        .querySelector(UISelectors.disbursementList)
        .insertAdjacentElement("beforeend", li);
    },
    clearBothFormsInput: function() {
      //  Clear for receipt form inputs
      document.querySelector(UISelectors.receiptDateInput).value = '';
      document.querySelector(UISelectors.receiptDescriptionInput).value = '';
      document.querySelector(UISelectors.receiptAmountInput).value = '';
      //  Clear for disbursement form inputs
      document.querySelector(UISelectors.disbursementDateInput).value = '';      
      document.querySelector(UISelectors.disbursementDescriptionInput).value = '';      
      document.querySelector(UISelectors.disbursementAmountInput).value = '';
    },
    hideReceiptList: function() {
      document.querySelector(UISelectors.receiptList).style.display = 'none';
    },
    hideDisbursementList: function() {
      document.querySelector(UISelectors.disbursementList).style.display = 'none';
    },
    showUITotalReceiptAmount: function(totalReceipts) {
      document.querySelector(UISelectors.receiptAmountTotal).textContent = totalReceipts;
    },
    showUITotalDisbursementAmount: function(totalDisbursements) {
      document.querySelector(UISelectors.disbursementAmountTotal).textContent = totalDisbursements; 
    },
    clearBothEditStates: function() {
      //clear inputs
      UICtrl.clearBothFormsInput();

      //RECEIPTS
      //  Hide backBtn, updateBtn, deleteBtn
      document.querySelector(UISelectors.receiptUpdateBtn).style.display = 'none';
      document.querySelector(UISelectors.receiptDeleteBtn).style.display = 'none';
      document.querySelector(UISelectors.receiptBackBtn).style.display = 'none';
      //  Show addBtn
      document.querySelector(UISelectors.receiptAddBtn).style.display = 'inline';

      //DISBURSEMENTS
      //  Hide backBtn, updateBtn, deleteBtn
      document.querySelector(UISelectors.disbursementUpdateBtn).style.display = 'none';
      document.querySelector(UISelectors.disbursementDeleteBtn).style.display = 'none';
      document.querySelector(UISelectors.disbursementBackBtn).style.display = 'none';
      //  Show addBtn
      document.querySelector(UISelectors.disbursementAddBtn).style.display = 'inline';
    },
    showReceiptEditState: function() {
      //  Show back, update, delete
      document.querySelector(UISelectors.receiptUpdateBtn).style.display = 'inline';
      document.querySelector(UISelectors.receiptDeleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.receiptBackBtn).style.display = 'inline';
      //  hide add
      document.querySelector(UISelectors.receiptAddBtn).style.display = 'none';
    },
    showDisbursementEditState: function() {
      //  Show back, update, delete
      document.querySelector(UISelectors.disbursementUpdateBtn).style.display = 'inline';
      document.querySelector(UISelectors.disbursementDeleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.disbursementBackBtn).style.display = 'inline';
      //  hide add
      document.querySelector(UISelectors.disbursementAddBtn).style.display = 'none';
    }
  };
})();

//  App Controller
const AppCtrl = (function (ReceiptCtrl, DisbursementCtrl, UICtrl) {
  //PRIVATE
  //  Load initial event listeners
  const loadEventListeners = function () {
    //  Get UI Selectors from UICtrl
    const UISelectors = UICtrl.getUISelectors();

    //  Add receipt item event
    document
      .querySelector(UISelectors.receiptAddBtn)
      .addEventListener("click", receiptAddBtnEvent);
    //  Add disbursement item event
    document
      .querySelector(UISelectors.disbursementAddBtn)
      .addEventListener("click", disbursementAddBtnEvent);
  };

  //  Add receipt event
  const receiptAddBtnEvent = function (e) {
    //  Get receipt form input from UICtrl
    const receiptInput = UICtrl.getReceiptInput();

    //  Check that date, description, and amount are inputted
    if (
      receiptInput.date !== "" &&
      receiptInput.description !== "" &&
      receiptInput.amount !== ""
    ) {
      //  Add receipt
      const newReceipt = ReceiptCtrl.addReceiptItemData(
        receiptInput.date,
        receiptInput.description,
        receiptInput.amount
      );

      //  Add item to UI list
      UICtrl.addUIReceiptListItem(newReceipt);

      //  Get totalReceipt from data structure
      const totalReceiptAmount = ReceiptCtrl.getTotalReceiptAmountData();

      //  Add total receipt amount to UI
      UICtrl.showUITotalReceiptAmount(totalReceiptAmount);

      //  Clear form input
      UICtrl.clearBothFormsInput();
    }

    e.preventDefault();
  };

  //  Add Disbursement event
  const disbursementAddBtnEvent = function (e) {
    //  Get receipt form input from UICtrl
    const disbursementInput = UICtrl.getDisbursementInput();

    //  Check that date, description, and amount are inputted
    if (
      disbursementInput.date !== "" &&
      disbursementInput.description !== "" &&
      disbursementInput.amount !== ""
    ) {
      //  Add disbursement
      const newDisbursement = DisbursementCtrl.addDisbursementItemData(
        disbursementInput.date,
        disbursementInput.description,
        disbursementInput.amount
      );

      //  Add item to UI list
      UICtrl.addUIDisbursementListItem(newDisbursement);

      //  Get totalReceipt from data structure
      const totalDisbursementAmount = DisbursementCtrl.getTotalDisbursementAmountData();

      //  Add total receipt amount to UI
      UICtrl.showUITotalDisbursementAmount(totalDisbursementAmount);

      //  Clear form input
      UICtrl.clearBothFormsInput();
    }

    e.preventDefault();
  };

  //  PUBLIC METHODS
  return {
    init: function () {
      console.log("Intializing App");

      //  Clear edit state for both forms / set intial state
      UICtrl.clearBothEditStates();

      //FETCH DATA
      //  Fetch receiptItems from data structure
      const receiptItems = ReceiptCtrl.getReceiptData();
      //  Fetch disbursementItems from data structure
      const disbursementItems = DisbursementCtrl.getDisbursementData();

      //  CHECK if any receiptsItems in data
      if(receiptItems.length === 0) {
        //  If none in data, then none in UI
        //  hide receipt list
        UICtrl.hideReceiptList();
      } else {
        //  Populate list with receiptItems
        UICtrl.populateReceiptList(receiptItems);
      }

      //  CHECK if any disbursementItems in data
      if(disbursementItems.length === 0) {
        //  If none in data, hide list
        UICtrl.hideDisbursementList();
      } else {
        //  Populate list with disbursementItems
        UICtrl.populateDisbursementList(disbursementItems);
      }


      //  Load Event Listeners
      loadEventListeners();
    },
  };
})(ReceiptCtrl, DisbursementCtrl, UICtrl);

//  Intialize App
AppCtrl.init();
