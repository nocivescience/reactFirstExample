import {Link, useNavigate} from "react-router-dom";
export function NavBar() {
    const navigate=useNavigate();
    const linkEstilos={
        color:"white",
        textDecoration:"none",
        marginRight:"1rem",
    };
    return (
        <div className="">
            <nav className="navbar bg-dark text-white shadow justify-content-between">
                <div className=""
                    style={{
                        cursor: "pointer",
                        width: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Link to="/" style={linkEstilos}>Inicio</Link>
                    <Link to="/fiscalia" style={linkEstilos}>fiscalia</Link>
                    <Link to="/jpl" style={linkEstilos}>Juzgado de Policía Local</Link>
                    <Link to="/corteapelaciones" style={linkEstilos}>Corte de Apelaciones</Link>
                    <Link to="/cortesuprema" style={linkEstilos}>Corte Suprema</Link>
                    <Link to="/leyes" style={linkEstilos}>Leyes</Link>
                </div>
            </nav>
        </div>
    )
}