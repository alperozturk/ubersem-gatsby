import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact"
import "../styles/index.css"
import {
  LadenZeile,
  LionsHome,
  Up,
  Axel,
  Allegro,
  JackJil,
} from "./../images/clients"
import { Navbar, Footer, FAQ, Popover } from "./../components"
import { FaPlus, FaMinus, FaAngleUp } from "react-icons/fa"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isScroll: false,
      acrive: 0,
      num: 0,
      step: 16.66,
      form: true,
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount() {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
    head.appendChild(script)

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY)
        const scroll = window.scrollY
        console.log(scroll)
        if (scroll > 500) {
          this.setState({
            isScroll: true,
          })
        }

        if (scroll < 500) {
          this.setState({
            isScroll: false,
          })
        }
      })
    }
  }

  scrollToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  componentWillUnmount() {
    const head = document.querySelector("head")
    const script = document.querySelector("script")
    head.removeChild(script)
  }
  render() {
    console.log(this.state)
    let { num, step } = this.state
    // let data = [0,1,2,3,4,5]
    return (
      <div>
        <MDBContainer>
          <Navbar />
          {/* ********* HEADER SECTION ************** */}
          <div className="header-section">
            <MDBRow>
              <MDBCol md="8">
                <br />
                <br />
                <br />
                <span className="title">
                  Data-Driven <br />
                  Growth Experts for{" "}
                  <span className="underline">Marketplaces:</span>
                </span>
                <span className="sub-title">
                  Ads, CRO, SEO,
                  <br /> Analytics
                </span>
                <br />
                <span className="description">
                  We Measure, We Optimize, You Enjoy.
                  <br /> + 300% and more increase in revenue is
                  <br /> nothing extraordinary.
                  <br />
                  <b>We eliminate the “luck factor”.</b>
                </span>
                <button className="button">Cool Story BRO!</button>
              </MDBCol>
              <MDBCol md="4">
                <br />
                <div className="paper">
                  <span className="normal-text">
                    Online marketing is supposed to increase your sales.
                  </span>

                  <span className="normal-text">
                    As you optimize, you are supposed to get better margins.
                  </span>
                  <br />
                  <span className="normal-text" style={{ color: "#8c8f94" }}>
                    NO LUCK WITH IT?
                  </span>
                  <br />
                  <button className="button">LET US TAKE A LOOK</button>
                  <br />
                  <br />

                  <hr />
                  {this.state.form ? (
                    <div>
                      <div style={{ padding: "8% 0" }}>
                        <span className="card-sub-text">GET IN TOUCH</span>
                        <span
                          className="normal-text"
                          style={{ color: "#8c8f94" }}
                        >
                          STEP {num + 1} OF 6
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: step + "%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        <hr />

                        {num === 0 ? (
                          <>
                            <span className="question">I am intersted in</span>
                            <MDBDropdown
                              size="md"
                              style={{ boxShadow: "none" }}
                            >
                              <MDBDropdownToggle caret color="light">
                                Website Development
                              </MDBDropdownToggle>
                              <MDBDropdownMenu color="danger" basic>
                                <MDBDropdownItem>SEO</MDBDropdownItem>
                                <MDBDropdownItem>Awards</MDBDropdownItem>
                                <MDBDropdownItem>
                                  Website Development
                                </MDBDropdownItem>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          </>
                        ) : null}

                        {num === 1 ? (
                          <>
                            <span className="question">
                              Whats your SEO budget?
                            </span>
                            <input type="text" className="data-input" />
                          </>
                        ) : null}
                        {num === 2 ? (
                          <div>
                            {" "}
                            <span className="question">
                              Have you had SEO work before?
                            </span>
                            <input type="text" className="data-input" />
                          </div>
                        ) : null}
                        {num === 3 ? (
                          <div>
                            {" "}
                            <span className="question">
                              What's the URL of your website?
                            </span>
                            <input
                              type="text"
                              className="data-input"
                              placeholder="http://www."
                            />{" "}
                          </div>
                        ) : null}
                        {num === 4 ? (
                          <div>
                            {" "}
                            <span className="question">
                              Do you have a developer taking care of your
                              website?
                            </span>
                            <input type="radio" name="data" /> Yes, inhouse
                            <br />
                            <input type="radio" name="data" /> Yes, external
                            developer
                            <br />
                            <input type="radio" name="data" /> No
                            <br />{" "}
                          </div>
                        ) : null}
                        {num === 5 ? (
                          <div>
                            {" "}
                            <span className="question">Your Name</span>
                            <input type="text" className="data-input" />
                            <span className="question">Email</span>
                            <input type="email" className="data-input" />
                            <span className="question">Any Comments?</span>
                            <textarea
                              style={{ border: "1px solid black" }}
                            ></textarea>
                          </div>
                        ) : null}
                      </div>

                      <hr />

                      <button
                        type="button"
                        class="btn btn-dark"
                        style={
                          num === 0
                            ? { display: "none" }
                            : { display: "inline-block" }
                        }
                        onClick={() =>
                          this.setState({
                            num: this.state.num - 1,
                            step: step - 16.66,
                          })
                        }
                      >
                        PREVIOUS
                      </button>

                      {num <= 4 ? (
                        <button
                          type="button"
                          class="btn btn-dark"
                          onClick={() =>
                            this.setState({
                              num: this.state.num + 1,
                              step: step + 16.66,
                            })
                          }
                          disabled={num <= 6 ? false : true}
                        >
                          NEXT
                        </button>
                      ) : (
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() =>
                            this.setState({
                              form: false,
                            })
                          }
                        >
                          SUBMIT
                        </button>
                      )}
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <span className="question">
                        <h2>Congratulation</h2>Your Message Has Been Sent
                        Successfully
                      </span>
                    </div>
                  )}
                </div>
              </MDBCol>
            </MDBRow>
            {/* <div className="top-scroll-btn"><FaEnvelope size={40} style={{ color: '#fff' }} /></div> */}

            {this.state.isScroll ? (
              <div
                className="top-scroll-btn"
                onClick={() => this.scrollToTop()}
              >
                <FaAngleUp size={45} style={{ color: "#fff" }} />
              </div>
            ) : null}
            <div className="popup-btn">
              <Popover />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h3>
            <span>WHAT WE DO</span>
          </h3>
          {/* ********* WHAT TO DO SECTION ************** */}
          <div className="what-to-do">
            <MDBRow>
              <MDBCol lg={4} xs={12}>
                <div className="box-text ">
                  Digital Consulting
                  <br />
                  Strategy
                  <br />
                  Digital Experiences
                  <br />
                  Data Analysis
                  <br />
                </div>
              </MDBCol>
              <MDBCol lg={4} xs={12}>
                <div className="pruple-box-text">
                  Pay-Per-Click Consulting
                  <br />
                  Adwords Optimization
                  <br />
                  Paid ChannelsManagement
                  <br />
                  Facebook & Instagram Ads
                  <br />
                </div>
              </MDBCol>
              <MDBCol lg={4} xs={12}>
                <div className="box-text ">
                  CRO Consultancy
                  <br />
                  Analytics Consultancy
                  <br />
                  Technical SEO Consultancy
                  <br />
                </div>
              </MDBCol>
            </MDBRow>
          </div>
          <h3>
            <span>MARKETPLACE: BENEFIT & CHALLENGES</span>
          </h3>
          <div className="_container">
            <FAQ>
              <FAQ.QAItem>
                <FAQ.Question answerId="q1">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>What is a marketplace?</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q1">
                  <p className="_content">
                    <span style={{ fontWeight: 400 }}>
                      Marketplace is a platform where
                    </span>
                    <b>products or services</b>
                    <span style={{ fontWeight: 400 }}>
                      from different vendors or providers are
                    </span>
                    <b>aggregated</b>
                    <span style={{ fontWeight: 400 }}>.</span>
                    <span style={{ fontWeight: 400 }}>&nbsp;</span>
                  </p>
                  <p className="_content">
                    <span style={{ fontWeight: 400 }}>
                      It provides an infrastructure for the commerce
                    </span>{" "}
                    <b>making it easier for both sellers and buyers</b>
                    <span style={{ fontWeight: 400 }}>.</span>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>
              <FAQ.QAItem>
                <FAQ.Question answerId="q2">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>
                            Why is a marketplace different than an e-commerce
                            platform?
                          </span>
                        </h4>{" "}
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q2">
                  <p className="_content">
                    E-commerce platforms are usually operated by one vendor,
                    where marketplaces aggregate multiple sellers in one
                    platform.
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q12">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>What are some examples of marketplaces?</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q12">
                  <p className="_content">
                    <p>Amazon</p>
                    <p>Airbnb</p>
                    <p>Uber</p>
                    <p>Ebay</p>
                    <p>Etsy</p>
                    <p>Alibaba</p>
                    <p>Udemy</p>
                    <p>Flipcart</p>
                    <p>Rakuten</p>
                    <p>Themeforest</p>
                    <p>Just Eat</p>
                    <p>Fiverr</p>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q3">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>
                            What are some of the benefits of being on a
                            marketplace for vendors?
                          </span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q3">
                  <p className="_content">
                    <ul>
                      <li>
                        <span>Reach</span>
                        <span> to an existing customer base</span>
                      </li>
                      <li>
                        <span>Establish </span>
                        <span>trust</span>
                        <span> (through reviews and the platform’s name)</span>
                      </li>
                      <li>
                        <span>
                          Eliminate the technical hurdles and costs, thus start{" "}
                        </span>
                        <span>quickly</span>
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q3">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>
                            What are the benefits of being on a marketplace for
                            buyers?
                          </span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q3">
                  <p className="_content">
                    <ul>
                      <li style={{ fontWeight: 400 }}>
                        <span style={{ fontWeight: 400 }}>Discover</span>
                        <span style={{ fontWeight: 400 }}>
                          {" "}
                          new products easily
                        </span>
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Compare prices &amp; specs
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Trustworthy by default
                      </li>
                      <li style={{ fontWeight: 400 }}>Less time-consuming</li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q4">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>
                            What are the benefits of owning a marketplace?{" "}
                          </span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q4">
                  <p className="_content">
                    <ul>
                      <li style={{ fontWeight: 400 }}>
                        <span style={{ fontWeight: 400 }}>Less “commerce </span>
                        <span style={{ fontWeight: 400 }}>operation</span>
                        <span style={{ fontWeight: 400 }}>”</span>
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        No sourcing and supply chain management
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Once reached the critical mass, hard to take down
                      </li>
                      <li style={{ fontWeight: 400 }}>Less end-user contact</li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q5">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>What types of marketplaces are there?</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q5">
                  <p className="_content">
                    <ul>
                      <li style={{ fontWeight: 400 }}>
                        <span style={{ fontWeight: 400 }}>
                          Price Comparison
                        </span>
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        <span style={{ fontWeight: 400 }}>
                          Product/Service Aggregation with Redirection
                        </span>
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Product/Service Aggregation with Shopping Cart
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q6">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>
                            What are some revenue models for marketplaces?
                          </span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q6">
                  {" "}
                  <p className="_content">
                    <ul>
                      <li>
                        <span>CPA: Cost per Acquisition</span>
                      </li>
                      <li>
                        <span>CPC: Cost per Click (Redirection)</span>
                      </li>
                      <li>
                        <span>3rd-Party Affiliate</span>
                      </li>
                      <li>
                        <span>Boosting the product/service</span>
                      </li>
                      <li>
                        <span>
                          Promoting to the existing customer base
                          (newsletter/social media/blog post/banner)
                        </span>
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q7">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          Business Challenges: Why attractive & Why difficult?
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q7">
                  {" "}
                  <p className="_content">
                    <ul>
                      <li>
                        <span>
                          Chicken-egg problem: Need to satisfy supply and demand
                          side
                        </span>
                      </li>
                      <li>Once established very hard to stop</li>
                      <li>
                        <span>Technically challenging</span>
                      </li>
                      <li>
                        <span>
                          Not using own data for services and products, less
                          control over content
                        </span>
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q8">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>What are some technical challenges?</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q8">
                  {" "}
                  <p className="_content">
                    <ul>
                      <li>
                        <span>All ecommerce challenges+</span>
                      </li>
                      <li>Real-time inventory</li>
                      <li>
                        Connecting to multiple systems with different API’s or
                        XML/CSV files
                      </li>
                      <li>Category matching</li>
                      <li>
                        <span>Attribute matching</span>
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q9">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>Markeplace SEO/SEM Challenges</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q9">
                  {" "}
                  <p className="_content">
                    <ul>
                      <li>
                        <span>All ecommerce challenges+</span>
                      </li>
                      <li>Duplicate content (3rd-party-content)</li>
                      <li>
                        Number of products per category/brand/filter -&gt;
                        instability in indexation and campaign management
                      </li>
                      <li>
                        <span>Landing Page quality&nbsp;</span>
                      </li>
                      <li>
                        <span>Google CPC vs Platform CPC/Commision</span>
                      </li>
                      <li>
                        User experience flaws due to mismatching -&gt; Bounce
                        rate, time on site
                      </li>
                      <li>
                        <span>Sorting algorithm</span>
                      </li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q10">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          <span>
                            {isOpen ? (
                              <FaMinus className="toogle_icon" />
                            ) : (
                              <FaPlus className="toogle_icon" />
                            )}
                          </span>
                          <span>How to jumpstart?</span>
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q10">
                  <p className="_content">
                    Some options for jumpstarting a product marketplace:
                  </p>
                  <p className="_content">
                    <ul>
                      <li>
                        <span>Woocommerce </span>
                      </li>
                      <li>Magento</li>
                      <li>Nopcommerce</li>
                      <li>Custom code</li>
                    </ul>
                  </p>
                  <p className="_content">
                    Some options for jumpstarting a service marketplace:
                  </p>
                  <p className="_content">
                    <ul>
                      <li>
                        <span>Sharetribe</span>
                      </li>
                      <li>Cocoric0</li>
                      <li>Arcadier</li>
                      <li>Custom code</li>
                    </ul>
                  </p>
                </FAQ.Answer>
              </FAQ.QAItem>

              <FAQ.QAItem>
                <FAQ.Question answerId="q11">
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <h4 className="_q">
                          {isOpen ? (
                            <FaMinus className="toogle_icon" />
                          ) : (
                            <FaPlus className="toogle_icon" />
                          )}
                          Have other questions in mind?
                        </h4>
                      </>
                    )
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q11">
                  <p className="_content">Reach us out!</p>
                </FAQ.Answer>
              </FAQ.QAItem>
            </FAQ>
          </div>
          {/* ********* CLIENT SECTION ************** */}
          <h3>
            <span>SOME REFERENCES & CLIENTS</span>
          </h3>
          <div className="client-section">
            <MDBRow>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={LadenZeile} width="300px" />
              </MDBCol>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={LionsHome} width="300px" />
              </MDBCol>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={Up} width="300px" />
              </MDBCol>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={Axel} width="300px" />
              </MDBCol>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={Allegro} width="300px" />
              </MDBCol>
              <MDBCol lg={4} xs={12} className="logo-box">
                <img src={JackJil} width="300px" />
              </MDBCol>
            </MDBRow>
          </div>
          <hr />
          {/* ********* CALENDLY SECTION ************** */}
          <div className="calendly-section">
            <span className="calendly-section-title">
              SCHEDULE A FREE 30 MINUTES CALL
            </span>

            <div
              class="calendly-inline-widget"
              data-url="https://calendly.com/ubersem/30min"
              style={{ minWidth: "320px", maxWidth: "1100px", height: "580px" }}
            ></div>
         
          </div>
        </MDBContainer>

        {/* ********* FOOTER SECTION ************** */}
        <Footer />
      </div>
    )
  }
}
export default Home
