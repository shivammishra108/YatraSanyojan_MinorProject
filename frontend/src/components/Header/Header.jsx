import React,{useRef, useEffect,useContext, useState} from 'react'
import { Container, Row,Button} from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './header.css';
import LogoutConfirm from './LogoutConfirm';

import { AuthContext } from '../../context/AuthContext';

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const[ isModalOpen, setModalOpen ] = useState(false);

  const logout = () => {
    setModalOpen(true); // Open the modal
};

const handleConfirmLogout = () => {
  dispatch({ type: 'LOGOUT' });
  navigate('/');
  setModalOpen(false); // Close the modal
};

const handleCloseModal = () => {
  setModalOpen(false); // Close the modal
};

  // const logout = ()=>{
  //   const confirmLogout = window.confirm("Are you sure you want to log out?");
  //   if(confirmLogout){
  //     dispatch({type: 'LOGOUT'});
  //     navigate('/');
  //   }
  // };

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  });

 const toggleMenu = () =>  menuRef.current.classList.toggle('show__menu');
 
  return(
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/*===============logo ===============*/}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*===============logo end ===========*/}

            {/*===============menu start ===========*/}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item,index)=>(
                    <li className="nav__item" key={index}>
                      <NavLink to={item.path} className={navClass=>navClass.isActive ? "active__link" : " "}> {item.display} </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/*===============menu end ===========*/}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">

                { user ? (
                      <>
                        <h5 className='mb-0'>{user.username}</h5>
                        <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                      </>
                    ) : (
                        <>
                          <Button className="btn secondary__btn"><Link to='login'>Login</Link></Button>
                          <Button className="btn primary__btn"><Link to='register'>Register</Link></Button>
                        </>
                    )}
              </div>

              <span className = "mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>

      {/* Added the LogoutConfirm modal here */}
      <LogoutConfirm 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmLogout} 
        message="Are you sure you want to log out?" 
      />
      
    </header>
  )
}

export default Header