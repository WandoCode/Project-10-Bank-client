function Account({ title, amount, accountId }) {
  const USCurrency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const moneyString = USCurrency.format(amount)

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{moneyString}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

export default Account
