import './index.css'

const ImageContainer = props => {
  const {imageDetails} = props

  return (
    <div>
      <li className="image-container">
        <div className="id-container">{imageDetails.id}</div>
        <img
          src={imageDetails.avatar}
          className="image"
          alt={imageDetails.first_name}
        />
      </li>
      <p className="first-name">{imageDetails.first_name}</p>
    </div>
  )
}
export default ImageContainer
