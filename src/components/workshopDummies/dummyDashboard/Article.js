import Gallery from "../gallery/Gallery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Article = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="article_item">
      <div className="article_item-content">
        <div className="article_item-text" style={{width: props.images.length > 0 && width >= 768 ? '75%' : '100%'}}>
          <div className="article_item-header">
            <time>{props.date}</time>
            <h2>{props.title}</h2>
            {
              props.location != null ?
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>&nbsp;{props.location}</span>
              </div> : null   
            }
          </div>
    
          <sub>{props.summary}</sub>
          {
            typeof(props.details) === "object" ? 
              props.details.map((item, index) => {
                return typeof(item) === "object" ? 
                  <ul key={index}>
                    {
                      item.map((li, index) => {
                        return <li key={index}>{li}</li>
                      })
                    }
                  </ul> : <p key={index}>{item}</p>
              }) : <p>{props.details}</p>
          }
        </div>

        <div className="article_item-img">
          { props.images.length > 0 ? <Gallery images={props.images} /> : null }
        </div>
      </div>
    </div>
  )
}

export default Article;