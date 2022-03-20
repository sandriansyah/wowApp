import React,{useContext} from "react"
import {useNavigate} from "react-router-dom"
import "./navbar.css"
import Logo from "../../media/Icon.png"
import IconAddBook from "../../media/AddBook2.png"
import IconLogout from "../../media/logoutRed.png"
import NavProfile from "../../media/Ellipse 2.png"
import {Dropdown,Navbar} from "react-bootstrap"
import {UserContext} from "../../context/userContex"
import {ShowModalContext} from "../../context/showModalContext"

function Navbarr(){

    const navigate = useNavigate()

    const [logout,setLogout] =useContext(UserContext)
    const [showModal,setShowModal] =useContext(ShowModalContext)

    const handleLogout = ()=>{
        setLogout({
            type:"LOGOUT",
        })

        setShowModal({
            type:'SHOW_MODAL',
            payload:false
        })

        navigate("/")
    }

    return(
        <Navbar fixed="top" className="navbar">
            <div className="logoNavbar ms-5">
                <img src={Logo} onClick={()=> {navigate("/home")}} />
            </div>
            
            <div className="navProfile me-5">                                
                <Dropdown>
                    <Dropdown.Toggle className="dropdownProfile shadow-none" variant="" id="dropdown-basic">
                    <img src={NavProfile} alt="" />            
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdownMenu" >
                        <Dropdown.Item  href="/addBook">
                            <img src={IconAddBook} alt=""/> Add Book
                        </Dropdown.Item>
                        <hr/>
                        <Dropdown.Item  onClick={handleLogout}>
                            <img src={IconLogout} alt=""/>  Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    )
}

export default Navbarr