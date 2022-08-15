export async function fetchData() {
    const transactions = await fetch('https://mock.bukkhl.work/v1/transactions-summary', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const result = await transactions.json()
  
    return result
  }