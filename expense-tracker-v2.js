const account = {
    name: 'Luis Beltran',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({Description: description, Amount: amount})
    },
    addIncome: function (description, amount) {
        this.income.push({Description: description, Amount: amount})
    },
    getAccountSummary: function () {
        let expenseSum = 0
        let incomeSum = 0
        this.expenses.forEach(function (object) {
            expenseSum = expenseSum + object.Amount
        })
        this.income.forEach(function (object) {
            incomeSum = incomeSum + object.Amount
        })
        let balance = incomeSum - expenseSum
        console.log(`${this.name} has a balance of $${balance}. $${incomeSum} in income. $${expenseSum} in expenses.`)
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
account.getAccountSummary()


