// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками

function performBankOperations(balance,callback) {
    callback(balance);
}

// Поповнення рахунку на 1000 грн
performBankOperations(5000, function(balance) {
    const depositAmount = 1000;
    console.log(`Поповнення рахунку на ${depositAmount} грн`);
    balance += depositAmount;
    console.log(`Баланс після поповнення: ${balance} грн`);
});

// Зняття грошей з рахунку на 2000 грн
performBankOperations(7000, function(balance) {
    const withdrawAmount = 2000;
    if (balance >= withdrawAmount) {
        console.log(`Зняття грошей з рахунку на ${withdrawAmount} грн`);
        balance -= withdrawAmount;
        console.log(`Баланс після зняття: ${balance} грн`);
    } else {
        console.log("Недостатньо коштів на рахунку для зняття.");
    }
});