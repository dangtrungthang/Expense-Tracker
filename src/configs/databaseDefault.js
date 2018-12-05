import { insertNewCategory,insertNewAccount } from '../databases/allSchemas';

export function loadCategoryDefault() {
    const Category = [
        //Expense
        {
            id: '1', // primary key
            name: 'Taxi',
            icon: JSON.stringify(require('../asset/iconCategory/taxi.png')),
            isExpense: true
        },
        {
            id: '2', // primary key
            name: 'Bill',
            icon: JSON.stringify(require('../asset/iconCategory/invoice.png')),
            isExpense: true
        },
        {
            id: '3', // primary key
            name: 'Gas',
            icon: JSON.stringify(require('../asset/iconCategory/gas-station.png')),
            isExpense: true
        },
        {
            id: '4', // primary key
            name: 'Market',
            icon: JSON.stringify(require('../asset/iconCategory/market.png')),
            isExpense: true
        }, {
            id: '5', // primary key
            name: 'Wifi',
            icon: JSON.stringify(require('../asset/iconCategory/wifi.png')),
            isExpense: true
        },
        //Income
        {
            id: '6', // primary key
            name: 'Salary',
            icon: JSON.stringify(require('../asset/iconCategory/income.png')),
            isExpense: false
        },
        {
            id: '7', // primary key
            name: 'Prize money',
            icon: JSON.stringify(require('../asset/iconCategory/income2.png')),
            isExpense: false
        },
        {
            id: '8', // primary key
            name: 'Awarded',
            icon: JSON.stringify(require('../asset/iconCategory/income3.png')),
            isExpense: false
        },
        {
            id: '9', // primary key
            name: 'Saving',
            icon: JSON.stringify(require('../asset/iconCategory/income4.png')),
            isExpense: false
        },
        {
            id: '10', // primary key
            name: 'Sale',
            icon: JSON.stringify(require('../asset/iconCategory/income5.png')),
            isExpense: false
        },
    ]
    for (i = 0; i < Category.length; i++) {
        insertNewCategory(Category[i]).then(() => {

        }).catch(() => {
            alert('Loi load du lieu df')
        })
    }

}

export function loadAccountDefault() {
    const Account = [
        {
            id: '1', //primary key
            name: 'Cash',
            openingBlance:'0',
            endingBlance:'0',
            icon: JSON.stringify(require('../asset/iconAccount/5.png')),
        },
        {
            id: '2', //primary key
            name: 'ATM card',
            openingBlance:'0',
            endingBlance:'0',
            icon: JSON.stringify(require('../asset/iconAccount/3.png')),
        },
    ]
    for(i=0;i<Account.length;i++){
        insertNewAccount(Account[i]).then(()=>{

        }).catch(()=>{
            alert('Loi load du lieu Account DF')
        })
    }
}
export function loadAllDataDefault(){
    loadCategoryDefault(),
    loadAccountDefault()
}