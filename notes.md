1. What is the primary reason to use a nested route?
- When you have shared UI


2. What is a "Layout Route"?
- It's the parent route of some nested routes that contains just the portions of the UI that will be shared. It will use an outlet component. 


3. What does the <Outlet /> component do? When do you use it?
- You use anytime we have a paranet Routes that's wrapping children routes. It renders the matching child route's `element` prop given in its route definition.


4. What is an "Index Route"?
It's the default route we want to render when the path of the parant route matches. It gives us a chane to render an element inside the parents's <Outlet /> at the same path as the parent route. 