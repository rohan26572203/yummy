import logo from "../../logos/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="sec1">
          <section className="sec2">
            <img src={logo} alt="" />
            <div className="sec2-emp"></div>
          </section>
          <div className="main-footer">
            <div className="foot1">
              <h6>ABOUT Zaika</h6>
              <nav>
                <a href="#">
                  <p>Who We Are</p>
                </a>
                <a href="#">
                  <p>Location</p>
                </a>
                <a href="#">
                  <p>Work With Us</p>
                </a>
                <a href="#">
                  <p>Partner With Us</p>
                </a>

                <a href="#">
                  <p>Contact Us</p>
                </a>
              </nav>
            </div>
            <div className="foot2">
              <h6>ZAIKAVERSE</h6>
              <nav>
                <a href="#">
                  <p>Zaika</p>
                </a>
                <a href="#">
                  <p>Ziakit</p>
                </a>
                <a href="#">
                  <p>Feeding India</p>
                </a>
              </nav>
            </div>
            <div className="foot3">
              <div className="foot3-2">
                <h6>FOR ENTERPRISES</h6>
                <nav>
                  <a href="#">
                    <p>Zaika For Enterprise</p>
                  </a>
                </nav>
              </div>
            </div>
            <div className="foot4">
              <h6>LEARN MORE</h6>
              <nav>
                <a href="#">
                  <p>Privacy</p>
                </a>

                <a href="#">
                  <p>Terms & Conditions</p>
                </a>
              </nav>
            </div>
            <div className="foot5">
              <h6>SOCIAL LINKS</h6>
              <div className="icons">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/arsalan-sadique-patel/"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#000000" }}
                  ></i>
                </a>

                <a target="_blank" href="https://github.com/arsalanpatel71">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
              </div>
              <div className="blank1"></div>
              <section className="store">
                <a href="#">
                  <div className="storeimg">
                    <img
                      src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                      alt="App store"
                    />
                  </div>
                </a>
                <div className="blank2"></div>
                <a href="#">
                  <div className="storeimg">
                    <img
                      src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                      alt="Playstore"
                    />
                  </div>
                </a>
              </section>
            </div>
          </div>
          <hr className="h-line" />
          <p className="copyright">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
            are properties of their respective owners. 2008-2024 © Zaika Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
