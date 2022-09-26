function FeatureItem({ datas }) {
  //TODO: (mentor): Je peux utiliser des props pour le contenu statique?
  return (
    <div className="feature-item">
      <img src={datas.image} alt={datas.altText} className="feature-icon" />
      <h3 className="feature-item-title">{datas.title}</h3>
      <p>{datas.text}</p>
    </div>
  )
}

export default FeatureItem
