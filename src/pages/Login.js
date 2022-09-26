import ConnectionForm from '../features/connection/connectionForm'

function SingIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <ConnectionForm />
      </section>
    </main>
  )
}

export default SingIn
