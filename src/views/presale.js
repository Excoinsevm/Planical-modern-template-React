import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './presale.css'

const Presale = (props) => {
  return (
    <div className="presale-container1">
      <Helmet>
        <title>Presale - Planical modern template</title>
        <meta
          property="og:title"
          content="Presale - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name1"></Navbar>
      <div className="presale-container2">
        <div className="presale-container3">
          <Script
            html={`<iframe
    src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc20.html?contract=0xE9BE839f344DE462d926d39205E6146c3320eEEf&chain=%7B%22name%22%3A%22Meter+Mainnet%22%2C%22chain%22%3A%22METER%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F82.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Meter%22%2C%22symbol%22%3A%22MTR%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22Meter%22%2C%22chainId%22%3A82%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22meter%22%7D&clientId=50cf68934011061c9d7e570da2886adb&theme=dark&primaryColor=green"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
></iframe>`}
          ></Script>
        </div>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="presale-text10">
              © 2022 latitude. All Rights Reserved.
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="presale-text11">
              © 2024 Cubes. All Rights Reserved.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="presale-text12">Join us on our social media</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="presale-text13 footer-header">Solutions</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="presale-text14 footer-link">Swap</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="presale-text15 footer-link">Pool</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="presale-text16 footer-link">Stake Soon</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="presale-text17 footer-link">Multichain Soon</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="presale-text18 footer-link">V3 Soon</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="presale-text19 footer-link">Presale</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  )
}

export default Presale
