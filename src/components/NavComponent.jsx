import { SEARCH_LOGO, DISCOUNT_LOGO, SIGNIN_LOGO, CART_LOGO, SWIGGY_LOGO } from "../utils/constants";

export const Nav  = () => {
    return (
      <div className="nav">
          <div className="logo">
              <img src={SWIGGY_LOGO} alt="swiggy logo"/>
          </div>
          <div className="nav-items">
              <a href="#"><img src={SEARCH_LOGO} alt="search"/>Search</a>
              <a href="#"><img src={DISCOUNT_LOGO} alt="discount"/>Offers</a>
              <a href="#"><img src={SIGNIN_LOGO} alt="sign-in"/>Sign In</a>
              <a href="#"><img src={CART_LOGO} alt="cart"/>Cart</a>
          </div>
      </div>
      );
  };

export default Nav;