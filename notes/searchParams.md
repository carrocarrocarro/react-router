# Query Parmeters

* Key/value pairs in the URL
* Begins with ?
```
    - /vans?type=rugged
 ```
* Separated by &
```
    - /vans?type=rugged&filterBy=price
```

* Represent change in the UI
    * Sorting, filtering, pagination

* Used as a "single source of trhuth" for certain application state.
    * Ask yourself:
        * "Should a user be able to revisit or share thsi page just like it is?"
    * If yes:
        * Consideer raising that state up to the URL in a query parameter.

* What about state:
    * What happens to state when you refresh the page?
        * reset to a fresh state
    * Can you share the current state of your app with a friend?

## Links

A link can be used to send us to a specific path.

```
<Link to="about">

```

Can be used to sepify and new query

```
<Link to="?type=jedi">Jedi</Link>

```


## useSearchParams

* The hooks useSearchParams is used to read and modify the query string in the URL in the current location.
* Returns an array of two values
    * The current locations search params
    * A function that may be used update the search params
* Support functional updates

Example from [React Router documentation]https://reactrouter.com/en/main/hooks/use-search-params

```
import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
    let [searchParams,setSearchParams] = useSearchParams();

    function handleSubmit(event) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let params = serializeFormQuery(event.target);
        setSearchParams(params);
    }

    return(
        <div>
            <form onSubmit={handleSumbit}>{/* ... */}</form>
        </div>
    );
}

```
## URLSearcParams documatation – MDN web docs

Get more info at [URLSearcParams documatation – MDN web docs] https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

