import { NavBar } from "../components/NavBar"


export const Layout1 = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="layout1">
                {children}
            </div>
        </>
    )
}