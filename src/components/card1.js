import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card1.css'

const Card1 = (props) => {
  return (
    <section className="card1-card">
      <main className="card1-content">
        <header className="card1-header1">
          <h1 className="card1-header2">
            {props.header ?? (
              <Fragment>
                <h1 className="card1-text2">Join us on Medium</h1>
              </Fragment>
            )}
          </h1>
        </header>
        <a
          href={props.buttonUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="card1-link"
        >
          <div className="card1-button">
            <p>
              {props.text ?? (
                <Fragment>
                  <p className="card1-text3">Read -&gt;</p>
                </Fragment>
              )}
            </p>
          </div>
        </a>
      </main>
    </section>
  )
}

Card1.defaultProps = {
  header: undefined,
  buttonUrl: 'https://cubeswap.medium.com/',
  text: undefined,
}

Card1.propTypes = {
  header: PropTypes.element,
  buttonUrl: PropTypes.string,
  text: PropTypes.element,
}

export default Card1
