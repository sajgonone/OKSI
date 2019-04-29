import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer } from "mdbreact";

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

        const overlay = (<
            div id="sidenav-overlay"
            style={
                { backgroundColor: "transparent" }}
            onClick={this.handleTogglerClick}
        />
        );
        return (
            < Router >
                <div >
                    <MDBNavbar color="elegant-color"
                        dark expand="md"
                        fixed="top"
                        scrolling >
                        <MDBContainer >
                            <
                                MDBNavbarToggler onClick={this.handleTogglerClick}
                            />
                            <
            MDBCollapse isOpen={this.state.collapsed}
                                navbar >
                                <
            MDBNavbarNav center >
                                    <
            MDBNavItem active >
                                        <
            a href="/" > Home < /a> <
            /MDBNavItem> <
            MDBNavItem >
                                                <
            a href="/" > About Us < /a> <
            /MDBNavItem> <
            MDBNavItem >
                                                        <
            a href="/" > Gallery < /a> <
            /MDBNavItem> <
            MDBNavItem >
                                                                <
            a href="/" > Contact < /a> <
            /MDBNavItem> <
            /MDBNavbarNav> <
            /MDBCollapse> <
            /MDBContainer> <
            /MDBNavbar> {this.state.collapsed && overlay} <
            /div> <
            /Router>
                                                                );
                                                            }
                                                        }
                                                        
export default NavBar;