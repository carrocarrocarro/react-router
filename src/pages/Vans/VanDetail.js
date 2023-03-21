import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
 //Params is a keyword that allows passing a variable number of parameters into a method.
// useParams hook: returns an object of key/value pairs of the dynamic params from the current URL that where matched by the ''<Route path>. Child routes inherit all params from their parent routes.

function VanDetail() {

    const params = useParams();
    const location = useLocation();
    console.log(location);
   /*  console.log(params); */
    const [van, setVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id]);

    const search = location.state?.search || ""; /* Optional chaning! Normally location.state && location.state.search || "" */
    const type = location.state?.type || "all";

    return(
        <div className="van-detail-continer">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span>
            
            </Link>
            {van ? (
                <div className="van-detail">
                <img src={van.imageUrl} alt="Van" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
            ) : <h2>Loading...</h2> }
        </div>
    )
}
export default VanDetail;