import React, { Component } from 'react'
import { MDBContainer, MDBFooter} from 'mdbreact'

export class Footer extends Component {
  render() {
    return (
        <MDBFooter color="elegant-color-dark" className="font-small ">
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: OKSI, PARTIES 
        </MDBContainer>
      </div>
      </MDBFooter>
    )
  }
}

export default Footer
