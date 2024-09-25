import hilux6 from "../assets/img/hilux6.jpg";
import PropTypes from "prop-types";

export const Hilux6 = ( props ) => {
  return (
    <img src={hilux6} alt="Camioneta hilux"  className = {props.className} />
  )
}

Hilux6.propTypes = {
    className: PropTypes.string
}