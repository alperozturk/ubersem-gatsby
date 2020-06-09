import React from "react"
import { Link } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  // MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact"
import Logo from "./../../images/log.png"

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }


  render(){
      return(

          <div className="navbar">
              {/* <Router> */}
                  <MDBNavbar
                      dark
                      expand="md"
                      style={{
                          boxShadow: "none",
                          padding: "0",
                          backgroundColor: "#fff",
                          zIndex: "1",
                      }}
                  >
                      <MDBNavbarBrand style={{ padding: "0" }}>
                          <img src={Logo} width="160px" />
                      </MDBNavbarBrand>
                      <MDBNavbarToggler
                          onClick={this.toggleCollapse}
                          style={{ backgroundColor: "#000" }}
                      />
                      <MDBCollapse
                          id="navbarCollapse3"
                          isOpen={this.state.isOpen}
                          navbar
                      >
                          <MDBNavbarNav left>
                              <div style={{ width: "120px" }} />
                              <MDBNavItem active>
                                  <Link to="#!" className="nav-item _active">
                                      Online Marketing Agency in Berlin
                    </Link>
                              </MDBNavItem>
                              <MDBNavItem>
                                  <Link to="#!" className="nav-item">
                                      Cool Story BRO!
                    </Link>
                              </MDBNavItem>
                              <MDBNavItem>
                                  <Link to="#!" className="nav-item">
                                      Contact
                    </Link>
                              </MDBNavItem>
                          </MDBNavbarNav>
                      </MDBCollapse>
                  </MDBNavbar>
              {/* </Router> */}
          </div>
      )
  }
}

export default Navbar