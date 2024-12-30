const BASE_URL = 'http://localhost:5000/api';
let transactions = [];

function fetchTransactions() {
    fetch(`${BASE_URL}/transactions`)
        .then(response => response.json())
        .then(data => {
            transactions = data;
            renderTransactions();
        });
}

function addTransaction(transaction) {
    fetch(`${BASE_URL}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
    })
        .then(response => response.json())
        .then(data => {
            transactions.push(data);
            renderTransactions();
        });
}

function renderTransactions() {
    const list = document.getElementById('transactions-list');
    list.innerHTML = '';
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.description}: $${transaction.amount}`;
        list.appendChild(li);
    });
}

document.getElementById('transaction-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    addTransaction({ description, amount, type });

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});

window.onload = fetchTransactions;
