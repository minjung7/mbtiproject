import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"; 

function Layout() {
  const location = useLocation();
  const { user } = useContext(UserContext); 


  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      <header>
        {isAuthPage && !user ? ( 
          <>
            <Link to="/">홈</Link>
            <Link to="/login">로그인</Link>
          </>
        ) : (
          
          <>
            <Link to="/">홈</Link>
            <Link to="/profile">프로필</Link>
            <Link to="/test">테스트</Link>
            <Link to="/results">결과</Link>
          </>
        )}
      </header>
      <Outlet /> 
    </>
  );
}

export default Layout;
