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
    getReceiptDataByID: function(uiItemID) {
      let found = null;
      //  Loop receipt items
      data.receipts.forEach((item) => {
        //compare data items id to id passed in
        if(item.id === uiItemID) {
          //set when id's same
          found = item;
        }
      });
      return found;
    },
    setCurrentReceiptData: function(receiptItemFromData) {
      //set currentReceipt data prop to item from editBtn event
      data.currentReceipt = receiptItemFromData;
    },
    getCurrentReceiptData: function() {
      return data.currentReceipt;
    },
    updateReceiptItemData: function(dateInput, descriptionInput, amountInput) {
      //  Parse date to string
      dateInput = dateInput.toString();

      //  Parse amount to a number
      amountInput = parseInt(amountInput);

      let found = null;

      //  loop
      data.receipts.forEach((item) => {
        //  check id = item id we clicked editbtn on
        if(item.id === data.currentReceipt.id) {
          //  update/set that items data
          item.date = dateInput;
          item.description = descriptionInput;
          item.amount = amountInput;
          //  set found to this item
          found = item;
        }
      });

      return found; //  receipt item updated
    },
    deleteReceiptItemData: function(currentReceiptID) {
      //  Get IDS in Arr
      //map like foreach but returns new arr
      let ids = data.receipts.map((item) => {
        return item.id;
      }); //returns [0,1, ....];

      //  Get index of currentID
      //returns index position of currentID found in IDS arr
      const index = ids.indexOf(currentReceiptID);

      //  Remove receipt
      //remove 1 at index position 
      data.receipts.splice(index, 1);
    },
    clearAllReceipts: function() {
      data.receipts = [];
    },
    logData: function () {
      //ReceiptCtrl.logData()
      return data;
    }
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
    getDisbursementDataByID: function(uiItemID) {
      let found = null;
      //  Loop disbursement items
      data.disbursements.forEach((item) => {
        //compare data items id to id passed in
        if(item.id === uiItemID) {
          //set when id's same
          found = item;
        }
      });
      return found;
    },
    setCurrentDisbursementData: function(disbursementItemFromData) {
      //set currentDisbursement data prop to item from editBtn event
      data.currentDisbursement = disbursementItemFromData;
    },
    getCurrentDisbursementData: function() {
      return data.currentDisbursement;
    },
    updateDisbursementItemData: function(dateInput, descriptionInput, amountInput) {
      //  Parse date to string
      dateInput = dateInput.toString();

      //  Parse amount to a number
      amountInput = parseInt(amountInput);

      let found = null;

      //  loop
      data.disbursements.forEach((item) => {
        //  check id = item id we clicked editbtn on
        if(item.id === data.currentDisbursement.id) {
          //  update/set that items data
          item.date = dateInput;
          item.description = descriptionInput;
          item.amount = amountInput;
          //  set found to this item
          found = item;
        }
      });

      return found; //  receipt item updated
    },
    deleteDisbursementItemData: function(currentDisbursementID) {
      //  Get IDS in Arr
      //map like foreach but returns new arr
      let ids = data.disbursements.map((item) => {
        return item.id;
      }); //returns [0,1, ....];

      //  Get index of currentID
      //returns index position of currentID found in IDS arr
      const index = ids.indexOf(currentDisbursementID);

      //  Remove disbursement
      //remove 1 at index position 
      data.disbursements.splice(index, 1);
    },
    clearAllDisbursements: function() {
      data.disbursements = [];
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
    receiptListItems: '#receipt-list li',
    disbursementList: "#disbursement-list",
    disbursementAddBtn: "#disbursement-add-btn",
    disbursementDateInput: "#disbursement-date",
    disbursementDescriptionInput: "#disbursement-description",
    disbursementAmountInput: "#disbursement-amount",
    disbursementAmountTotal: '.total-disbursements',
    disbursementUpdateBtn: '#disbursement-update-btn',
    disbursementDeleteBtn: '#disbursement-delete-btn',
    disbursementBackBtn: '#disbursement-back-btn',
    disbursementListItems: '#disbursement-list li',
    clearBtn: '#clear-btn'
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
      <div class="col-md-5">
        <p>${newReceiptItem.description}</p>
      </div>

      <div class="col-md-3">
        <strong>$${newReceiptItem.amount}</strong>
      </div>
      <div class="col-md-2">
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
      li.id = `disbursement-${newDisbursementItem.id}`;
      //  Add html
      li.innerHTML = `
            <div class="row">
            <div class="col-md-2">
              <em>${newDisbursementItem.date}</em>
            </div>
            <div class="col-md-5">
              <p>${newDisbursementItem.description}</p>
            </div>
      
            <div class="col-md-3">
              <strong>$${newDisbursementItem.amount}</strong>
            </div>
            <div class="col-md-2">
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
    },
    addCurrentReceiptToForm: function() {
      //Adds currentReceipt data from editBtn into the forms inputs
      document.querySelector(UISelectors.receiptDateInput).value = ReceiptCtrl.getCurrentReceiptData().date;
      document.querySelector(UISelectors.receiptDescriptionInput).value = ReceiptCtrl.getCurrentReceiptData().description;
      document.querySelector(UISelectors.receiptAmountInput).value = ReceiptCtrl.getCurrentReceiptData().amount;

      UICtrl.showReceiptEditState();
    },
    addCurrentDisbursementToForm: function() {
      //Adds currentDisbursement data from editBtn into the forms inputs
      document.querySelector(UISelectors.disbursementDateInput).value = DisbursementCtrl.getCurrentDisbursementData().date;
      document.querySelector(UISelectors.disbursementDescriptionInput).value = DisbursementCtrl.getCurrentDisbursementData().description;
      document.querySelector(UISelectors.disbursementAmountInput).value = DisbursementCtrl.getCurrentDisbursementData().amount;

      UICtrl.showDisbursementEditState();
    },
    updateReceiptItemUI: function(updatedReceipt) {
      let listReceiptItems = document.querySelectorAll(UISelectors.receiptListItems);

      //  Convert Node list to arr
      listReceiptItems = Array.from(listReceiptItems);

      listReceiptItems.forEach((listItem) => {
        //  Get id for each item
        const itemID = listItem.getAttribute('id');

        //  Check itemID = id of updatedReceipt passed in
        if(itemID === `receipt-${updatedReceipt.id}`) {
          //  Update that item's html
          document.querySelector(`#${itemID}`).innerHTML = `
          <div class="row">
          <div class="col-md-2">
            <em>${updatedReceipt.date}</em>
          </div>
          <div class="col-md-5">
            <p>${updatedReceipt.description}</p>
          </div>
    
          <div class="col-md-3">
            <strong>$${updatedReceipt.amount}</strong>
          </div>
          <div class="col-md-2">
            <a href="#">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </div>
        </div>
          `;
        }
      });
    },
    updateDisbursementItemUI: function(updatedDisbursement) {
      let listDisbursementItems = document.querySelectorAll(UISelectors.disbursementListItems);

      //  Convert Node list to arr
      listDisbursementItems = Array.from(listDisbursementItems);

      listDisbursementItems.forEach((listItem) => {
        //  Get id for each item
        const itemID = listItem.getAttribute('id');

        //  Check itemID = id of updatedReceipt passed in
        if(itemID === `disbursement-${updatedDisbursement.id}`) {
          //  Update that item's html
          document.querySelector(`#${itemID}`).innerHTML = `
          <div class="row">
          <div class="col-md-2">
            <em>${updatedDisbursement.date}</em>
          </div>
          <div class="col-md-5">
            <p>${updatedDisbursement.description}</p>
          </div>
    
          <div class="col-md-3">
            <strong>$${updatedDisbursement.amount}</strong>
          </div>
          <div class="col-md-2">
            <a href="#">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </div>
        </div>
          `;
        }
      });
    },
    deleteReceiptListItemUI: function(currentReceiptID) {
      console.log(currentReceiptID);

      //  Create ID literal from currentID
      const receiptLiItemID = `#receipt-${currentReceiptID}`;
      //  Get receipt item li from this id
      const liItem = document.querySelector(receiptLiItemID);

      liItem.remove();
    },
    deleteDisbursementListItemUI: function(currentDisbursementID) {
      //  Create ID literal from currentID
      const disbursementLiItemID = `#disbursement-${currentDisbursementID}`;
      //  Get disbursement item li from this id
      const liItem = document.querySelector(disbursementLiItemID);

      liItem.remove();
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

    //  Disable submit on enter key, prevents submission when in edit state
    document.addEventListener('keypress', function(e) {
      if(e.charCode === 13 || e.keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });

    //EDIT ICON EVENTS
    //  Edit icon receipt event
    //have to use event delegation so grab parent element list
    document.querySelector(UISelectors.receiptList).addEventListener('click', receiptEditBtnEvent);

    //  Edit icon disbursement event
    document.querySelector(UISelectors.disbursementList).addEventListener('click', disbursementEditBtnEvent);

    //UPDATE BTN EVENTS
    //  Update Btn Receipt event
    document.querySelector(UISelectors.receiptUpdateBtn).addEventListener('click', receiptUpdateBtnEvent);

    //  Update Btn Disbursement event
    document.querySelector(UISelectors.disbursementUpdateBtn).addEventListener('click', disbursementUpdateBtnEvent);

    //BACK BTN EVENTS
    //  Back Btn receipt event
    document.querySelector(UISelectors.receiptBackBtn).addEventListener('click', UICtrl.clearBothEditStates);
    //  Back Btn disbursement event
    document.querySelector(UISelectors.disbursementBackBtn).addEventListener('click', UICtrl.clearBothEditStates);

    //DELETE BTN EVENTS
    //  Delete Btn receipt event
    document.querySelector(UISelectors.receiptDeleteBtn).addEventListener('click', receiptDeleteBtnEvent);
    //  Delete Btn receipt event
    document.querySelector(UISelectors.disbursementDeleteBtn).addEventListener('click', disbursementDeleteBtnEvent);

    //  CLEAR ALL BTN EVENT
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearBtnEvent);

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
      //  Add receipt to Data Structure
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

  const receiptEditBtnEvent = function(e) {
    //event delegation, grabbed parent element list
    //check if target edit icon has class 'edit-item'
    if(e.target.classList.contains('edit-item')) {
      console.log('clicked');

      //  Get list item id ("receipt-0" etc.)
      //parent = atag, parent = div, parent = row, parent = li
      const listID = e.target.parentNode.parentNode.parentNode.parentNode.id;
      console.log(listID);

      //  Break into an array
      //split by the -
      const listIDArr = listID.split("-");
      console.log(listIDArr); //['receipt', '0']

      //  Get the actual id #
      const id = parseInt(listIDArr[1]);

      //  Get receipt with id from data 
      const receiptItemToEdit = ReceiptCtrl.getReceiptDataByID(id);
      console.log(receiptItemToEdit);

      //  Set currentReceipt data prop
      ReceiptCtrl.setCurrentReceiptData(receiptItemToEdit);

      //  Populate inputs with currentReceipt data
      UICtrl.addCurrentReceiptToForm();
    }

    e.preventDefault();
  };

  const disbursementEditBtnEvent = function(e) {
    //event delegation, grabbed parent element list
    //check if target edit icon has class 'edit-item'
    if(e.target.classList.contains('edit-item')) {
      //  Get list item id ("disbursement-0" etc.)
      //parent = atag, parent = div, parent = row, parent = li
      const listID = e.target.parentNode.parentNode.parentNode.parentNode.id;
      console.log(listID);

      //  Break into an array
      //split by the -
      const listIDArr = listID.split("-");
      console.log(listIDArr); //['disbursement', '0']

      //  Get the actual id #
      const id = parseInt(listIDArr[1]);

      //  Get disbursement with id from data 
      const disbursementItemToEdit = DisbursementCtrl.getDisbursementDataByID(id);
      console.log(disbursementItemToEdit);

      //  Set currentDisbursement data prop
      DisbursementCtrl.setCurrentDisbursementData(disbursementItemToEdit);

      //  Populate inputs with currentDisbursement data
      UICtrl.addCurrentDisbursementToForm();
    }

    e.preventDefault();
  };

  //  Update Receipt Event
  const receiptUpdateBtnEvent = function(e) {
    //  Get receipt input
    const input = UICtrl.getReceiptInput();
  
    //  Update receipt in data structure
    const updatedReceipt = ReceiptCtrl.updateReceiptItemData(input.date, input.description, input.amount);

    console.log(updatedReceipt);

    //  Update UI with updatedReceipt
    UICtrl.updateReceiptItemUI(updatedReceipt);
  
    //  Update Total Receipt Amount
    //  Get total receipt amount
    const totalReceiptAmount = ReceiptCtrl.getTotalReceiptAmountData();

    //  Add total amount to UI
    UICtrl.showUITotalReceiptAmount(totalReceiptAmount);

    UICtrl.clearBothEditStates();

    e.preventDefault();
  };

  //  Update Disbursement Event
  const disbursementUpdateBtnEvent = function(e) {
    //  Get disbursement input
    const input = UICtrl.getDisbursementInput();

    //  Update disbursement in data structure
    const updatedDisbursement = DisbursementCtrl.updateDisbursementItemData(input.date, input.description, input.amount);

    console.log(updatedDisbursement);

    //  Update UI with updatedDisbursement
    UICtrl.updateDisbursementItemUI(updatedDisbursement);

    //  Update Total Disbursement Amount
    //  Get total disbursement amount
    const totalDisbursementAmount = DisbursementCtrl.getTotalDisbursementAmountData();

    //  Add total amount to UI
    UICtrl.showUITotalDisbursementAmount(totalDisbursementAmount);

    UICtrl.clearBothEditStates();

    e.preventDefault();
  };

  //  Delete Btn event
  const receiptDeleteBtnEvent = function(e) {
    //  Get current receipt
    const currentItem = ReceiptCtrl.getCurrentReceiptData();

    //  Delete from data structure
    ReceiptCtrl.deleteReceiptItemData(currentItem.id);
    //  Delete receipt li from UI
    UICtrl.deleteReceiptListItemUI(currentItem.id);

    //  Update total amount
    //  Get total amount
    const totalAmount = ReceiptCtrl.getTotalReceiptAmountData();
    //  Update total amount UI
    UICtrl.showUITotalReceiptAmount(totalAmount);


    //  Clear when finished edit
    UICtrl.clearBothEditStates();

    e.preventDefault();
  };

    //  Delete Btn event
  const disbursementDeleteBtnEvent = function(e) {
    //  Get current disbursement
    const currentItem = DisbursementCtrl.getCurrentDisbursementData();

    //  Delete from data structure
    DisbursementCtrl.deleteDisbursementItemData(currentItem.id);
    //  Delete disbursement li from UI
    UICtrl.deleteDisbursementListItemUI(currentItem.id);

    //  Update total amount
    //  Get total amount
    const totalAmount = DisbursementCtrl.getTotalDisbursementAmountData();
    //  Update total amount UI
    UICtrl.showUITotalDisbursementAmount(totalAmount);


    //  Clear when finished edit
    UICtrl.clearBothEditStates();

    e.preventDefault();
  };

  //  Clear all items event
  const clearBtnEvent = function() {
    //  Delete all receipts from data 
    ReceiptCtrl.clearAllReceipts();
    //  Delete all disbursements from data
    DisbursementCtrl.clearAllDisbursements();
    
    //  Update total amounts
    //  Get totals
    const totalReceipts = ReceiptCtrl.getTotalReceiptAmountData();
    const totalDisbursements = DisbursementCtrl.getTotalDisbursementAmountData();
    //  Add totals UI
    UICtrl.showUITotalReceiptAmount(totalReceipts);
    UICtrl.showUITotalDisbursementAmount(totalDisbursements);


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

      //  GET TOTAL AND SHOW UI
      //  Get total receipts
      const totalReceipts = ReceiptCtrl.getTotalReceiptAmountData();
      //  Add total receipts UI
      UICtrl.showUITotalReceiptAmount(totalReceipts);

      //  Get total disbursements
      const totalDisbursements = DisbursementCtrl.getTotalDisbursementAmountData();
      //  Add total disbusements UI
      UICtrl.showUITotalDisbursementAmount(totalDisbursements);


      //  Load Event Listeners
      loadEventListeners();
    },
  };
})(ReceiptCtrl, DisbursementCtrl, UICtrl);

//  Intialize App
AppCtrl.init();
