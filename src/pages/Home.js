import text from '../assets/content/home.json'

import Chat from '../assets/img/icon-chat.png'
import Money from '../assets/img/icon-money.png'
import FeatureItem from '../components/FeatureItem'
import Security from '../assets/img/icon-security.png'

function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">{text.hero.titleA}</p>
          <p className="subtitle">{text.hero.titleB}</p>
          <p className="subtitle">{text.hero.titleC}</p>
          <p className="text">{text.hero.text}</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem datas={text.chatDatas} image={Chat} />
        <FeatureItem datas={text.moneyDatas} image={Money} />
        <FeatureItem datas={text.securityDatas} image={Security} />
      </section>
    </main>
  )
}

export default Home
