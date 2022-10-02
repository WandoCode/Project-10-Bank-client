function FeatureItem({ datas, image }) {
  return (
    <div className="feature-item">
      <img src={image} alt={datas.altText} className="feature-icon" />
      <h3 className="feature-item-title">{datas.title}</h3>
      <p>{datas.text}</p>
    </div>
  )
}

export default FeatureItem
