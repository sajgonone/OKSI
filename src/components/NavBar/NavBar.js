import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBView, MDBContainer, MDBMask, MDBRow, MDBCol } from "mdbreact";

class NavBar extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        <Router>
          <div>
            <MDBNavbar
              color="elegant-color"
              dark
              expand="md"
              fixed="top"
              scrolling
            >
              <MDBContainer>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav center>
                    <MDBNavItem active>
                      <a href="/">Home</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href="/">About Us</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href="/">Gallery</a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a href="/">Contact</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView src={`https://i.imgur.com/hcTw1M5.png`} fixed>
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        
      </>
    );
  }
}

export default NavBar;
