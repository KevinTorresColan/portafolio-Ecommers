import { NavLink, useNavigate } from "react-router-dom";
import "./headerComponent.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import { routes } from "../../Routes";
import { ICONS } from "../../Common/Icons";

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  const linkActive = {
    borderBottom: '1px solid #5c6e82',
  }

  return (
    <header className="header">
      <article className="header__menu">
        <div className="header__logo_desktop">
          <img src={ICONS.LOGO} alt="logo" />
        </div>
        <div className="header__menu-routes">
          {routes.map(({to, name}, i) => (
            <NavLink 
              key={i}
              className="header__menu-routes-route" 
              to={to} 
              style={({isActive}) => isActive ? linkActive : undefined} 
            >
              {name}
            </NavLink>
          ))}
        </div>
      </article>
      <div className="header__shop">
        <IconButton onClick={() => navigate('/carrito')}>
          <ShoppingCartIcon />
        </IconButton>
      </div>
    </header>
  )
}

export default HeaderComponent;