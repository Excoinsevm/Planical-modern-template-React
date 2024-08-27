import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <section className="home-section10">
        <div className="home-hero">
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-header1">
                <h1 className="home-heading10">
                  <span className="home-text10">Cubes</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Your Gateway to Decentralized Finance on Meter
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </h1>
                <span className="home-caption1">
                  <span>
                    Welcome to Cubes, the next evolution of decentralized
                    finance on the Meter Blockchain. We&apos;re building a
                    cutting-edge decentralized exchange (DEX) that combines the
                    best features of Uniswap V2 with the speed and efficiency of
                    Meter&apos;s high-performance infrastructure. Our mission is
                    to empower users with seamless, secure, and low-cost trading
                    options for their digital assets.
                  </span>
                  <br></br>
                </span>
              </header>
              <div className="home-buttons1">
                <a
                  href="https://swap.cubes.lol"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-get-started1 button">
                    <span className="home-text17">Swap</span>
                  </div>
                </a>
                <Link to="/presale" className="home-navlink1">
                  <div className="home-get-started2 button">
                    <span className="home-text18">Presale</span>
                  </div>
                </Link>
              </div>
            </main>
          </div>
          <div className="home-image1">
            <img alt="image" src="/cubes-1500h.png" className="home-image2" />
          </div>
          <div className="home-image3">
            <img alt="image" src="/cubes-1500h.png" className="home-image4" />
          </div>
        </div>
      </section>
      <section className="home-section11">
        <h2 className="home-text19">
          <span>What is Cubes?</span>
          <br></br>
        </h2>
        <div className="home-note1">
          <div className="home-content2">
            <main className="home-main2">
              <h2 className="home-heading11">
                <span className="home-text22">
                  Cubes is a Uniswap V2 fork that brings the simplicity and
                  robustness of decentralized trading to the Meter Blockchain.
                  With Cubes, users can:
                </span>
                <br></br>
              </h2>
              <p className="home-paragraph10">
                <span>
                  - Trade Tokens: Instantly swap any token on the Meter
                  Blockchain with the liquidity provided by the community.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Provide Liquidity: Earn rewards by supplying liquidity to
                  various pools.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Stake and Farm: Participate in yield farming opportunities
                  to maximize your returns.
                </span>
                <br></br>
                <br></br>
                <span>
                  - Participate in Governance: Be part of the decision-making
                  process through the upcoming Cubes DAO, allowing the community
                  to vote on key platform changes.
                </span>
                <br></br>
              </p>
            </main>
            <a
              href="https://swap.cubes.lol"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <div className="home-explore-more">
                <p className="home-text35">Trade Now-&gt;</p>
              </div>
            </a>
          </div>
          <div className="home-image5">
            <animate-on-reveal
              animation="slideInRight"
              duration="300ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <img
                alt="image"
                src="/Branding/logo-1200w.png"
                data-thq-animate-on-reveal="true"
                className="home-image6"
              />
            </animate-on-reveal>
          </div>
        </div>
      </section>
      <section className="home-section12">
        <header className="home-header2">
          <h2 className="home-text36">
            <span>What’s Coming in Cubes V3?</span>
            <br></br>
          </h2>
          <span className="home-text39">
            <span>
              The Cubes V3 upgrade is a significant evolution of our platform,
              designed to enhance the trading experience and bring more
              sophisticated DeFi tools to our users. Here&apos;s what you can
              expect from V3:
            </span>
            <br></br>
            <br></br>
          </span>
        </header>
        <section className="home-note2">
          <div className="home-content3">
            <div className="home-container2">
              <div className="home-main3">
                <div className="home-caption2">
                  <span className="home-section13 section-head">
                    V3 Smart Contracts
                  </span>
                </div>
                <div className="home-heading12">
                  <p className="home-paragraph11 section-description">
                    Enhanced security, new trading options, and cross-version
                    compatibility are just the beginning. The V3 contracts will
                    introduce a host of new features designed to make CubeSwap
                    the most versatile DEX in the DeFi space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-note3">
          <div className="home-container3">
            <div className="home-content4">
              <div className="home-main4">
                <div className="home-caption3">
                  <span className="section-head">Cross-Chain Trading</span>
                </div>
                <div className="home-heading13">
                  <p className="home-paragraph12 section-description">
                    We’re working on integrating cross-chain functionality,
                    allowing you to trade assets across different blockchains
                    seamlessly. Stay tuned for more updates as we bring this
                    powerful feature to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-main5">
          <div className="home-caption4">
            <span className="section-head">Advanced Trading Tools</span>
          </div>
          <div className="home-heading14">
            <p className="home-paragraph13 section-description">
              From limit orders to automated strategies, CubeSwap will soon
              offer advanced tools to help you trade smarter and more
              efficiently.
            </p>
          </div>
        </div>
        <section className="home-card">
          <main className="home-content5">
            <header className="home-header3">
              <h1 className="home-header4">Join us on Medium</h1>
            </header>
            <a
              href="https://cubeswap.medium.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <div className="home-button">
                <p className="home-text43">Read -&gt;</p>
              </div>
            </a>
          </main>
        </section>
        <section className="home-note4">
          <div className="home-image7">
            <animate-on-reveal
              animation="slideInLeft"
              duration="300ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <img
                alt="image"
                src="/SectionImages/cubes2-1200w.png"
                data-thq-animate-on-reveal="true"
                className="home-image8"
              />
            </animate-on-reveal>
          </div>
          <div className="home-content6">
            <div className="home-main6">
              <div className="home-caption5">
                <h2 className="home-text44">
                  <span>Get started with CubeSwap</span>
                  <br></br>
                </h2>
              </div>
              <p className="section-description">
                <span>
                  Ready to start trading? Getting started with CubeSwap is easy:
                </span>
                <br></br>
                <br></br>
                <br></br>
              </p>
              <span className="section-head">
                <span>Connect your wallet</span>
                <br></br>
              </span>
              <div className="home-heading15">
                <p className="section-description">
                  CubeSwap supports a variety of popular wallets. Connect your
                  wallet to start trading immediately.
                </p>
              </div>
            </div>
            <span className="section-head">
              <span>pick a token</span>
              <br></br>
            </span>
            <div className="home-main7">
              <div className="home-heading16">
                <p className="section-description">
                  Browse our list of trading pairs and find the assets you want
                  to trade.
                </p>
              </div>
            </div>
            <span className="section-head">
              <span>Swap and stake</span>
              <br></br>
            </span>
            <div className="home-main8">
              <div className="home-heading17">
                <p className="section-description">
                  <span>
                    Execute trades, provide liquidity, and stake your assets to
                    earn rewards.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <span className="section-head">
                <span>stay informed</span>
                <br></br>
              </span>
              <div className="home-heading18">
                <p className="section-description">
                  {' '}
                  Join our community on social media and stay updated on the
                  latest developments, new features, and opportunities on
                  CubeSwap.
                </p>
              </div>
            </div>
            <a
              href="https://swap.cubes.lol"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-get-started3 button">
                <span className="home-text62">Get started</span>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section className="home-section20">
        <header className="home-header5">
          <header className="home-left1">
            <span className="section-head">$Cube</span>
            <h2 className="section-heading">
              The Heart of the CubeSwap Ecosystem
            </h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph19 section-description">
              <span>
                At the core of CubeSwap lies the $CUBE token, the native utility
                and governance token that powers the entire CubeSwap ecosystem.
                Designed to offer both utility and value, $CUBE is integral to
                how users interact with the platform, from trading and staking
                to participating in governance and earning rewards.
              </span>
              <br></br>
              <br></br>
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card
            header="Staking and Rewards"
            description=" Stake your $CUBE tokens in the platform’s liquidity pools or staking contracts to earn rewards. By staking $CUBE, you contribute to the platform’s liquidity, ensuring smoother and more efficient trading while earning passive income."
            description1={
              <Fragment>
                <span className="home-description1">
                  {' '}
                  Stake your $CUBE tokens in the platform’s liquidity pools or
                  staking contracts to earn rewards. By staking $CUBE, you
                  contribute to the platform’s liquidity, ensuring smoother and
                  more efficient trading while earning passive income.
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name"
          ></Card>
          <Card
            icon="/Icons/group%201317-200h.png"
            header="Liquidity Provision"
            description1={
              <Fragment>
                <span className="home-description2">
                  <br></br>
                  <span>
                    Add $CUBE to liquidity pools to facilitate trades and earn a
                    share of the trading fees generated on the platform. The
                    more liquidity you provide, the greater your potential
                    earnings, making $CUBE a powerful tool for both active and
                    passive income strategies.
                  </span>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name2"
          ></Card>
        </main>
      </section>
      <section className="home-section22"></section>
      <section className="home-section23">
        <div className="home-cube">
          <animate-on-reveal
            animation="slideInLeft"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="home-top side"
            ></div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="slideInLeft"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="home-front side"
            ></div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="slideInLeft"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="home-left2 side"
            ></div>
          </animate-on-reveal>
        </div>
        <main className="home-banner">
          <div className="home-header6">
            <h2 className="section-heading">
              Participate on our presale and be a early supporter
            </h2>
          </div>
          <div className="home-buttons2">
            <Link to="/presale" className="home-navlink2">
              <div className="home-get-started4 button">
                <span className="home-text68">Presale</span>
              </div>
            </Link>
          </div>
        </main>
      </section>
      <section className="home-section24">
        <main className="home-content7">
          <header className="home-header7">
            <h2 className="section-heading">
              Start trading or add liquidity to earn 0.3% from all trades on the
              platform
            </h2>
            <div className="home-buttons3">
              <a
                href="https://swap.cubes.lol/#/swap"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-swap button">
                  <span className="home-text69">Swap</span>
                </div>
              </a>
              <a
                href="https://swap.cubes.lol/#/pool"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <div className="home-pool button">
                  <span className="home-text70">Pool</span>
                </div>
              </a>
            </div>
          </header>
          <animate-on-reveal
            animation="slideInRight"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <img
              alt="image"
              src="/SectionImages/untitled_design__9_-removebg-preview-1200w.png"
              data-thq-animate-on-reveal="true"
              className="home-image9"
            />
          </animate-on-reveal>
        </main>
      </section>
      <Footer
        text={
          <Fragment>
            <span className="home-text71">
              © 2022 latitude. All Rights Reserved.
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text72">
              © 2024 Cubes. All Rights Reserved.
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text73">Join us on our social media</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text74 footer-header">Solutions</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text75 footer-link">Swap</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text76 footer-link">Pool</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text77 footer-link">Stake Soon</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text78 footer-link">Multichain Soon</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text79 footer-link">V3 Soon</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="home-text80 footer-link">Presale</span>
          </Fragment>
        }
        textUrl2="/presale"
      ></Footer>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
