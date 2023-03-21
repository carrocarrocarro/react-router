import React from "react";
import {Link, useSearchParams, useLoaderData } from 'react-router-dom';
import { getVans } from "../../api";

export function loader() {
  return getVans()
}

function Vans() {

  const [searchParams, setSearchParams] = useSearchParams();
  //const [vans, setVans] = React.useState([]);
  //const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null)
  const vans = useLoaderData()
  //console.log(vans)

  const typeFilter = searchParams.get("type");

  /* React.useEffect(() => {
    fetch(`/api/vans`)
        async function loadVans() {
          setLoading(true)
          try{
            const data = await getVans()
            setVans(data)
          }
          catch(err) {
            setError(err)
          }
          finally {
            setLoading(false)
          }
        }
        loadVans();
    }, []) */
   
  /* Filters the vans based on url query. The .filter function comes with useSearchParams() */
  const displayedVans = typeFilter 
    ? vans.filter(van => van.type === typeFilter) /* if true the filtered types shows */
    : vans; /* if false all vans are displayed */

  const vanElements = displayedVans.map(van => (
    
    <div key={van.id} className="van-tile">
        <Link 
          to={van.id} 
          state={{
            search: `?${searchParams.toString()}`, /* passing the search url */
            type: typeFilter
          }} 
        > 
          <img src={van.imageUrl} alt="A van." />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
  ))

  /* if (loading) {
    return <h1>Loading...</h1>
  } */

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
   
      <div className="van-list-container">
        <h1>Explore our van options</h1>

        <div className="van-list-filter-buttons">
            {/* <Link
              to="?type=simple"
              className="van-type simple"
            >
              Simple
            </Link>
            <Link
              to="?type=luxury"
              className="van-type luxury"
            >
              Luxury
            </Link>
            <Link
              to="?type=rugged"
              className="van-type rugged"
            >
              Rugged
            </Link>
            <Link
              to="."
              className="van-type clear-filters"
            >
              Clear
            </Link> */}
            <button
              onClick={() => setSearchParams({type: "simple"})} // "?type=simple" also works but its more common with a string
              className={
                `van-type simple= ${typeFilter === "simple" ? "selected" : ""}`
              }
            >
              Simple
            </button>
            <button
              onClick={() => setSearchParams({type: "luxury"})}
              className={
                `van-type luxury= ${typeFilter === "luxury" ? "selected" : ""}`
              }
            >
              Luxury
            </button>
            <button
              onClick={() => setSearchParams({type: "rugged"})}
              className={
                `van-type rugged= ${typeFilter === "rugged" ? "selected" : ""}`
              }
            >
              Rugged
            </button>

            {/* Conditionally rendering the clear button */}
            { typeFilter ? (
                <button
                  onClick={() => setSearchParams({})}    
                  className="van-type clear-filters"
                >
                Clear
              </button>
              ) : null
            }
        </div>
        
        <div className="van-list">
            {vanElements}
        </div>
      </div>

  );
}
  
export default Vans;
  