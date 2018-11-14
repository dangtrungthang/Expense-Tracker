import Realm from 'realm';
export const EXPENSELIST_SCHEMA = "ExpenseList";
export const EXPENSE_SCHEMA = "Expense";
export const ACCOUNT_SCHEMA='Account';
// Define your models and their properties
export const ExpenseSchema = {
    name: EXPENSE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',    // primary key
        payee: { type: 'string', indexed: true },
        accountID:{type:'string',default:'Default Account'},
        amount:{ type: 'string', indexed: true },
        category:{type:'string',default:''},
        creationDate: 'date',
    }
};
export const AccountSchema={
    name:ACCOUNT_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'string', //primary key
        name:{type:'string',default:'Default Account'},
        openingBlance:{type:'string',default:'0'},
        expenses:{type:'list',objectType:EXPENSE_SCHEMA}

    }
}

const databaseOptions = {
    path: 'ExpensseApp.realm',
    schema: [ExpenseSchema,AccountSchema],
    schemaVersion: 0, //optional    
};
//functions for Account 
export const insertNewAccount = newAccount => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(ACCOUNT_SCHEMA, newAccount);
            resolve(newAccount);
        });
    }).catch((error) => reject(error));
});
export const updateAccountList = accountList => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let updatingAccountList = realm.objectForPrimaryKey(ACCOUNT_SCHEMA, accountList.id);   
            //updatingAccountList.name = accountList.name;    
            //
            resolve();     
        });
    }).catch((error) => reject(error));;
});
export const deleteAccountForId = accountListId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingAccount = realm.objectForPrimaryKey(ACCOUNT_SCHEMA, accountListId);
            realm.delete(deletingAccount.expenses)
            realm.delete(deletingAccount);
            resolve();   
        });
    }).catch((error) => reject(error));;
});
export const deleteAllAccountLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let allAccountLists = realm.objects(ACCOUNT_SCHEMA);
            for (var index in allAccountLists) {
                let temp = allAccountLists[index]
                realm.delete(temp.expenses);
            }
            realm.delete(allAccountLists);
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const queryAllAccountLists = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allAccountLists = realm.objects(ACCOUNT_SCHEMA);
        resolve(allAccountLists);  
    }).catch((error) => {        
        reject(error);  
    });
});
//Add array of Expense to an existing Account
export const insertExpenseToAccount=(accountID,newExpense)=>new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        let account=realm.objectForPrimaryKey(ACCOUNT_SCHEMA,accountID);
        realm.write(()=>{
            for(var index in newExpense){
                account.expenses.push(newExpense[index]);
            }
            resolve(newExpense);
        })

    }).catch((error)=>{
        reject(error);
    })
});
//Get expense from Account
export const getExpenseFromAccount=(accountID)=>new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        let accountList=realm.objectForPrimaryKey(ACCOUNT_SCHEMA,accountID);
        resolve(accountList.expenses)
    }).catch((error)=>{
        reject(error);
    })
});
export default new Realm(databaseOptions);