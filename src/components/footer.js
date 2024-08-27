import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-content1">
        <main className="footer-main-content">
          <div className="footer-content2">
            <header className="footer-main">
              <div className="footer-header1">
                <Link to="/" className="footer-navlink1">
                  <img
                    alt={props.brandingAlt}
                    src={props.brandingSrc}
                    className="footer-branding"
                  />
                </Link>
                <span>
                  {props.text2 ?? (
                    <Fragment>
                      <span className="footer-text22">
                        Join us on our social media
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="footer-socials">
                <a
                  href={props.iconUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-icon1"
                  >
                    <path
                      d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  href={props.twitterUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <img
                    alt={props.twitterAlt}
                    src={props.twitterSrc}
                    className="footer-twitter social"
                  />
                </a>
              </div>
            </header>
            <header className="footer-categories">
              <div className="footer-category">
                <div className="footer-header2">
                  <span>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="footer-text25 footer-header">
                          Solutions
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="footer-links">
                  <a
                    href={props.textUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {props.text4 ?? (
                      <Fragment>
                        <span className="footer-text21 footer-link">Swap</span>
                      </Fragment>
                    )}
                  </a>
                  <Link to="/presale" className="footer-text13">
                    {props.text41 ?? (
                      <Fragment>
                        <span className="footer-text20 footer-link">
                          Presale
                        </span>
                      </Fragment>
                    )}
                  </Link>
                  <a
                    href={props.textUrl1}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {props.text5 ?? (
                      <Fragment>
                        <span className="footer-text28 footer-link">Pool</span>
                      </Fragment>
                    )}
                  </a>
                  <Link to="/" className="footer-text15">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="footer-text27 footer-link">
                          Stake Soon
                        </span>
                      </Fragment>
                    )}
                  </Link>
                  <Link to="/" className="footer-text16">
                    {props.text7 ?? (
                      <Fragment>
                        <span className="footer-text24 footer-link">
                          Multichain Soon
                        </span>
                      </Fragment>
                    )}
                  </Link>
                  <Link to="/" className="footer-text17">
                    {props.text8 ?? (
                      <Fragment>
                        <span className="footer-text19 footer-link">
                          V3 Soon
                        </span>
                      </Fragment>
                    )}
                  </Link>
                </div>
              </div>
            </header>
          </div>
          <section className="footer-copyright1">
            <Link to="/" className="footer-navlink2">
              {props.text1 ?? (
                <Fragment>
                  <span className="footer-text26">
                    © 2024 Cubes. All Rights Reserved.
                  </span>
                </Fragment>
              )}
            </Link>
          </section>
        </main>
        <main className="footer-subscribe"></main>
        <section className="footer-copyright2">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="footer-text23">
                  © 2022 latitude. All Rights Reserved.
                </span>
              </Fragment>
            )}
          </span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text8: undefined,
  text41: undefined,
  twitterSrc: '/Icons/twitter-200h.png',
  iconUrl: 'https://t.me/CubesMeter',
  brandingAlt: 'image',
  text4: undefined,
  textUrl1: 'https://swap.cubes.lol/#/pool',
  brandingSrc: '/Branding/logo-200h.png',
  text2: undefined,
  text: undefined,
  text7: undefined,
  textUrl: 'https://swap.cubes.lol/',
  rootClassName: '',
  twitterAlt: 'image',
  text3: undefined,
  twitterUrl: 'https://twitter.com/CubesMeter',
  text1: undefined,
  text6: undefined,
  text5: undefined,
}

Footer.propTypes = {
  text8: PropTypes.element,
  text41: PropTypes.element,
  twitterSrc: PropTypes.string,
  iconUrl: PropTypes.string,
  brandingAlt: PropTypes.string,
  text4: PropTypes.element,
  textUrl1: PropTypes.string,
  brandingSrc: PropTypes.string,
  text2: PropTypes.element,
  text: PropTypes.element,
  text7: PropTypes.element,
  textUrl: PropTypes.string,
  rootClassName: PropTypes.string,
  twitterAlt: PropTypes.string,
  text3: PropTypes.element,
  twitterUrl: PropTypes.string,
  text1: PropTypes.element,
  text6: PropTypes.element,
  text5: PropTypes.element,
}

export default Footer
