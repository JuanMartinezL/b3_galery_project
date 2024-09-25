import hilux4 from "../assets/img/hilux4.jpg";
import PropTypes from "prop-types";

export const Hilux4 = ( props ) => {
  return (
    <img src={hilux4} alt="Camioneta hilux"  className = {props.className} />
  )
}

Hilux4.propTypes = {
    className: PropTypes.string
}