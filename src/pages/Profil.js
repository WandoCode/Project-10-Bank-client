import Account from '../components/Account'

function Login() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Account title={'Argent Bank Checking (x8349)'} amount={2500.3} />
      <Account title={'Argent Bank Savings (x6712)'} amount={10928.42} />
      <Account title={'Argent Bank Credit Card (x8349)'} amount={184.3} />
    </main>
  )
}

export default Login
