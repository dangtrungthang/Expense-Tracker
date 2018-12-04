import Realm from 'realm';
export const CATEGORY_SHEMA = "Category";
export const EXPENSE_SCHEMA = "Expense";
export const ACCOUNT_SCHEMA = 'Account';
// Define your models and their properties
export const CategorySchema = {
    name: CATEGORY_SHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string', // primary key
        name: 'string',
        icon: 'string',
        isExpense: 'bool'
    }
};


export const ExpenseSchema = {
    name: EXPENSE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',    // primary key      
        accountID: { type: 'string', default: 'Default Account' },
        amount: { type: 'string', indexed: true },
        categoryName:'string',
        categoryIcon:'string',
        isExpense:'bool',
        creationDate: 'string',
    }
};
export const AccountSchema = {
    name: ACCOUNT_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string', //primary key
        name: { type: 'string', default: 'Default Account' },
        openingBlance: { type: 'string', default: '0' },
        endingBlance: { type: 'string', default: '0' },
        icon:'string',
        expenses: { type: 'list', objectType: EXPENSE_SCHEMA }

    }
}

const databaseOptions = {
    path: 'ExpensseApp.realm',
    schema: [ExpenseSchema, AccountSchema, CategorySchema],
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
export const insertExpenseToAccount = (accountID, newExpense) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let account = realm.objectForPrimaryKey(ACCOUNT_SCHEMA, accountID);
        realm.write(() => {
            for (var index in newExpense) {
                account.expenses.push(newExpense[index]);
            }
            resolve(newExpense);
        })

    }).catch((error) => {
        reject(error);
    })
});
//Get expense from Account
export const getExpenseFromAccount = (accountID) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let accountList = realm.objectForPrimaryKey(ACCOUNT_SCHEMA, accountID);
        resolve(accountList.expenses)
    }).catch((error) => {
        reject(error);
    })
});
//insert category
export const insertNewCategory = newCategory => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(CATEGORY_SHEMA, newCategory);
            resolve(newCategory);
        });
    }).catch((error) => reject(error));
});
//Add array of Category to an existing Expense
export const insertCategoryToExpense = (ExpenseID, newCategory) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let expense = realm.objectForPrimaryKey(EXPENSE_SCHEMA, ExpenseID);
        realm.write(() => {
            for (var index in newCategory) {
                expense.category.push(newCategory[index]);
            }
            resolve(newCategory);
        })

    }).catch((error) => {
        reject(error);
    })
});
// Đổ dữ liệu category 
export const queryAllCategoryLists = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allCategory = realm.objects(CATEGORY_SHEMA);

        resolve(allCategory);
    }).catch((error) => {
        reject(error);
    });
});
// Lấy id category 
export const getIdCategory = (id) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let category = realm.objectForPrimaryKey(CATEGORY_SHEMA, id)
        resolve(category.id)
    }).catch((error) => {
        reject(error)
    })
})
// Xoá category - đồng thời xoá luôn các expense chứa catagory đó
// Update category  - đồng thời update luôn các expense chứa category đó

export default new Realm(databaseOptions);