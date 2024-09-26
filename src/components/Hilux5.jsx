import hilux5 from "../assets/img/hilux5.png";
import PropTypes from "prop-types";

export const Hilux5 = ( {className} ) => {
  return (
    <img src={hilux5} alt="Camioneta hilux"  className = {className} />
  )
}

Hilux5.propTypes = {
    className: PropTypes.string
}