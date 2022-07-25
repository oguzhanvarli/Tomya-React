import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import LoginInput from './loginInput/LoginInput';
import { useSelector, useDispatch} from "react-redux";
import {logout} from '../network/features/userSlice'
function Navbar() {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout)
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      TOMYA
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <MenuOutlined />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
      </ul>
      {user ? 
          <a className="nav-link active" aria-current="page" href='/' onClick={handleLogout}>
            Çıkış
          </a> : 
      <UserOutlined role='button' style={{fontSize : 24}} data-bs-toggle="modal" data-bs-target="#exampleModal"/>}
      <LoginInput/>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
