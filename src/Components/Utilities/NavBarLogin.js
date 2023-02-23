import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../Images/logo.png";
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";
import NavbarSearchHook from "../../CustomHook/Search/NavbarSearchHook";
import AllUserProductsCartHook from "../../CustomHook/Cart/AllUserProductsCartHook";

const NavBarLogin = () => {
  const [, onSearchChange, word, userData, handleLogout] = NavbarSearchHook();
  const [cartNum] = AllUserProductsCartHook();
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            type="search"
            placeholder="إبحث..."
            className="me-2 w100 text-center"
            aria-label="Search"
            value={word}
            onChange={onSearchChange}
          />
          <Nav className="nav-nav me-auto">
            {userData ? (
              <NavDropdown title={userData.name} id="basic-nav-dropdown">
                {userData.role === "user" ? (
                  <NavDropdown.Item href="/user/profile">
                    الصفحة الشخصية
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/admin/all-products">
                    لوحة التحكم
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={handleLogout} href="/">
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} alt="login" className="login-img ms-1" />
                <p style={{ color: "#fff" }}>دخول</p>
              </Nav.Link>
            )}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center position-relative"
            >
              <img src={cart} alt="cart" className="login-img ms-1" />
              <p style={{ color: "#fff" }}>العربة</p>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {cartNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
