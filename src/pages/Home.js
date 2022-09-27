import Chat from '../assets/img/icon-chat.png'
import Money from '../assets/img/icon-money.png'
import FeatureItem from '../components/FeatureItem'
import Security from '../assets/img/icon-security.png'

function Home() {
  const chatDatas = {
    image: Chat,
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    altText: 'chat icon',
  }

  const moneyDatas = {
    image: Money,
    title: 'More savings means higher rates',
    text: ' The more you save with us, the higher your interest rate will be!',
    altText: 'money icon',
  }

  const securityDatas = {
    image: Security,
    title: 'Security you can trust',
    text: ' We use top of the line encryption to make sure your data and money is always safe.',
    altText: 'security icon',
  }
  // TODO: (mentor): dans les Issues, il parlent de "See all placeholder data from mockup" => Okay ici?
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem datas={chatDatas} />
        <FeatureItem datas={moneyDatas} />
        <FeatureItem datas={securityDatas} />
      </section>
    </main>
  )
}

export default Home
