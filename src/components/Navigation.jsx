import { Link } from "react-router-dom"
import { Hilux1 } from "./Hilux1"
import { Hilux2 } from "./Hilux2"
import { Hilux3 } from "./Hilux3"
import { Hilux4 } from "./Hilux4"
import { Hilux5 } from "./Hilux5"
import { Hilux6 } from "./Hilux6"

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt-2">
        <Link to='/hilux1' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux1 />
        </figure>
        </Link>
        <Link to='/hilux2' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux2 />
        </figure>
        </Link>
        <Link to='/hilux3' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux3 />
        </figure>
        </Link>
        <Link to='/hilux4' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux4 />
        </figure>
        </Link>
        <Link to='/hilux5' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux5 />
        </figure>
        </Link>
        <Link to='/hilux6' className="links">
        <figure className="thumbnail-image-size">
            <figcaption>Toyota Hilux</figcaption>
            < Hilux6 />
        </figure>
        </Link>
    </div>
  )
}
