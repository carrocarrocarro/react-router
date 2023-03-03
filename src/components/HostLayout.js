import { NavLink, Outlet } from "react-router-dom";

/* Host Nav */
function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav>
                <NavLink 
                    to="." /* works as /host */
                    end /* Prevents active link being shown on host when another navlink is active */
                    style={({ isActive}) => isActive ? activeStyles : null }
                >
                     Dashboard
                </NavLink>
                <NavLink 
                    to="income" /* works as /host/income */
                    style={({ isActive}) => isActive ? activeStyles : null }
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans" /* works as /host/vans */
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="reviews" /* works as /host/reviews */
                    style={({ isActive}) => isActive ? activeStyles : null }
                    >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout;