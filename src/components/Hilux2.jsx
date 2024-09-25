import hilux2 from "../assets/img/hilux2.jpg";
import PropTypes from "prop-types";

export const Hilux2 = ( props ) => {
  return (
    <img src={hilux2} alt="Camioneta hilux"  className = {props.className} />
  )
}

Hilux2.propTypes = {
    className: PropTypes.string
}