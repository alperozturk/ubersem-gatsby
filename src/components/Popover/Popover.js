import React from "react"
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact"
import "./Popover.css"
import { FaEnvelope } from "react-icons/fa"

const PopoverPage = () => {
  return (
      <div style={{ display: "flex", }} >
        <MDBPopover placement="top" popover clickable id="popper1">
          <MDBBtn style={{ padding: "8px" }}>
            <FaEnvelope size={32} style={{ color: "#fff" }} />
          </MDBBtn>
          <div className="popup-body">
            <span className="heading">CONTACT US</span>
            <span className="text">
              We're not around right now. But you can send us an email and we'll
              get back to you, asap.
            </span>

            <input type="text" className="input-text" placeholder="Name*" />
            <input type="text" className="input-text" placeholder="Email*" />
            <textarea placeholder="Message*"></textarea>
            <input
              type="text"
              className="input-text"
              placeholder="Enter Captcha"
            />

            <span>Not readable? Change text.</span>
            <br />
            <br />

            <div>
              <h1>CaptchaText</h1>
            </div>

            <button type="button" class="btn btn-danger">
              SEND
            </button>
            <br />
            <br />
          </div>
        </MDBPopover>
      </div>
  )
}

export default PopoverPage
