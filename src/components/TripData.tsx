import PropTypes from "prop-types";
import "./TripStyles.css";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="" />
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

TripData.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default TripData;
