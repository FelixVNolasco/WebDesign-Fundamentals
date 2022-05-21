import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = ()=> setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }


    useEffect(()=> {
        showButton()
    },[])
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BDCM <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/novedades' className="nav-links" onClick={closeMobileMenu}>
                                NOVEDADES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/foro' className="nav-links" onClick={closeMobileMenu}>
                                FORO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/nosotros' className="nav-links" onClick={closeMobileMenu}>
                                NOSOTROS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
                                INICIAR SESION 
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>REGISTRARSE</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
