import hilux3 from "../assets/img/hilux3.jpg";
import PropTypes from "prop-types";

export const Hilux3 = ( {className} ) => {
  return (
    <img src={hilux3} alt="Camioneta hilux"  className = {className} />
  )
}

Hilux3.propTypes = {
    className: PropTypes.string
}