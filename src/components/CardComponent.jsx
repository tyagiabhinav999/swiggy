import { CDN_URL, STAR_LOGO, CLOCK_LOGO, LOCATION_LOGO } from "../utils/constants";

const Card = (props) => {
    const { data } = props;
    const { name, avgRatingString, sla, cloudinaryImageId, areaName, cuisines } = data;
    return (
              <div className="card">
                  <div className="res-image"><img src={CDN_URL + cloudinaryImageId}/></div>
                  <div className="card-info">
                      <p className="name">{name}</p>
                      <div className="rating-and-time">
                          <p className="rating"><img className="rating-icon" src={STAR_LOGO} alt="rating"/>{avgRatingString}</p>
                          <p className="time"><img className="time-icon" src={CLOCK_LOGO} alt="time"/>{sla.slaString}</p>
                      </div>
                      <p className="cuisines">{cuisines.join(', ')}</p>
                      <p className="location"><img className="location-icon" src={LOCATION_LOGO} alt="location"/>{areaName}</p>
                  </div>
              </div>
            )
  }


  export default Card;