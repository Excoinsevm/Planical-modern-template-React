import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon1">
        <img alt={props.iconAlt} src={props.icon} className="card-icon2" />
      </div>
      <main className="card-content">
        <h1 className="card-header">{props.header}</h1>
        <p>
          {props.description1 ?? (
            <Fragment>
              <p className="card-description2">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </span>
              </p>
            </Fragment>
          )}
        </p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  description1: undefined,
  rootClassName: '',
  icon: '/Icons/group%201316-200w.png',
  iconAlt: 'image',
  header: 'Sima Mosbacher',
}

Card.propTypes = {
  description1: PropTypes.element,
  rootClassName: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  header: PropTypes.string,
}

export default Card
