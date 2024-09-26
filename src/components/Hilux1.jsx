import hilux1 from "../assets/img/hilux1.png";
import PropTypes from "prop-types";

export const Hilux1 = ( {className} ) => {
  return (
    <img src={hilux1} alt="Camioneta hilux"  className = {className} />
  )
}

Hilux1.propTypes = {
    className: PropTypes.string
}