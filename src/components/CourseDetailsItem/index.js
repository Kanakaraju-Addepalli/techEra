import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <div className="details-card">
      <div className="details-container">
        <img className="course-img" src={imageUrl} alt={name} />
        <div className="content-container">
          <h1 className="title">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailsItem
