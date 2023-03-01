import React from "react";
import { useParams } from "react-router-dom";
 //Params is a keyword that allows passing a variable number of parameters into a method.
// useParams hook: returns an object of key/value pairs of the dynamic params from the current URL that where matched by the ''<Route path>. Child routes inherit all params from their parent routes.

function VanDetail() {

    const params = useParams();
    console.log(params);
    const [van, setVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[params.id]);

    return(
        <div className="van-detail-continer">
            {van ? (
                <div className="van-detail">
                <img src={van.imageUrl} />
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