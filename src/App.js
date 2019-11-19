import React from "react";
import styled, { css } from "styled-components";
import logo from "./logo_desktop.svg";
import heroBear from "./hero-bear.svg";
import computerImage from "./computer.png";
import tabletImage from "./tablet.png";
import mobileImage from "./mobile.png";
import starsBackground from "./stars-for-background.svg";
import forbesImg from "./forbes.svg";
import vergeImg from "./the-verge.svg";
import lifehackerImg from "./lifehacker.svg";
import tnwImg from "./tnw.svg";
import vbImg from "./vb.svg";
import techradarImg from "./techradar.svg";
import macLogo from "./apple-logo.svg";
import windowsLogo from "./windows.svg";
import iosLogo from "./iphone-logo.svg";
import androidLogo from "./android-logo.svg";

//features icons
import globalContent from "./global-content.svg";
import ipTracking from "./ip-tracking.svg";
import localCensorship from "./local-censorship.svg";
import onlinePrivacy from "./online-privacy.svg";
import theftIcon from "./theft-icon.svg";
import wayMore from "./way-more.svg";

//section worldwide icons
import earthIcon from "./assets/earth.svg";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding-top: 22px;
  padding-bottom: 20px;
  padding-right: 50px;
  border-bottom: 1px solid #ededed;
  z-index: 2;

  & img {
    padding-left: 58px;
    text-align: left;
  }
  & a {
    text-decoration: none;
    padding-left: 11px;
    padding-right: 18px;

    color: #6e6e6e;
    line-height: 1.6em;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.2px;
  }
  & div {
    margin-left: auto;
  }
`;

const ButtonGetNow = styled.button`
  max-width: 310px;
  font-weight: 500;
  line-height: 1.33em;
  font-size: 22px;
  font-style: normal;
  color: #fff;
  border-radius: 40px;
  background-color: #83b84d;
  padding: 18px 36px;
  border: 1px solid #83b84d;
  text-align: center;
  font-family: Montserrat, Trebuchet, sans-serif;
  cursor: pointer;

  ${props =>
    props.nav &&
    css`
      font-size: 1.1em;
      border-radius: 30px;
      padding: 8.5px 23.5px;
      margin-left: 13.5px;
      margin-top: 0.5px;
    `}

  ${props =>
    props.explain &&
    css`
      max-width: 310px;
    `}
`;

const SectionIntro = styled.section`
  margin-top: 90px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 164px;
  padding-bottom: 210px;
  padding-left: 205px;
  overflow: hidden;

  & div {
    padding-right: 740px;

    & p {
      padding-bottom: 5px;
    }
  }
`;

const HeroBear = styled.img`
  width: 40%;
  position: absolute;
  bottom: -65px;
  right: 200px;
  display: block;
`;

const SectionTestimonials = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  background-color: #f6f6f6;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 270px;
  padding-right: 270px;
`;

const SectionExplain = styled.section`
  background-color: #435239;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 190px;
  padding-left: 510px;
  padding-right: 510px;
  color: #fff;
  position: relative;
  overflow: hidden;

  & h2 {
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: normal;
    margin-bottom: 0.3em;
    line-height: 1.2em;
  }
  & p {
    color: #fff;
  }
`;

const SectionCompatible = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  padding-top: 70px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;

  & p {
    font-size: 13px;
  }
`;

const ImgComputer = styled.img`
  width: 1028px;
  position: absolute;
  top: 100px;
  left: -518px;
`;

const ImgTablet = styled.img`
  width: 40%;
  position: absolute;
  top: 113px;
  right: -170px;
`;

const ImgMobile = styled.img`
  width: 230px;
  position: absolute;
  bottom: -70px;
  right: 270px;
`;

const BenefitsHeadline = styled.h2`
  margin-top: 100px;
  text-align: center;
  font-size: 34px;
  font-weight: bold;
`;

const SectionBenefits = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
  justify-content: space-between;

  margin-top: 20px;
  margin-left: 150px;
  margin-right: 200px;
`;

const BenefitContainer = styled.div`
  display: flex;
  width: 47%;

  & div {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }

  & h3 {
    margin: 20px 0px 5px 30px;
  }

  & p {
    margin: 0px 0px 20px 30px;
  }
`;

const SectionWorldwide = styled.section`
  background-color: #4d4d4d;
  background-image: url(${starsBackground});
  background-repeat: repeat;
  background-size: 360px 360px;
  background-attachment: fixed;

  display: flex;
  flex-direction: row;
  padding: 40px 150px 90px 140px;

  & h2 {
    color: #fff;
    font-weight: bold;
    padding-left: 45px;
  }

  & h3 {
    color: #fff;
    font-weight: 100;
    padding-left: 45px;
    font-size: 18px;
  }

  & p {
    color: #fff;
    padding-left: 45px;
  }

  & img {
    width: 400px;
  }
`;

const FlagsSection = styled.p`
  font-size: 16px;
`;

function App() {
  return (
    <body>
      <header>
        <Nav>
          <img src={logo} alt="TunnelBear Logo" />
          <div>
            <a href="https://www.tunnelbear.com/pricing">Pricing</a>
            <a href="https://www.tunnelbear.com/apps/mac">Apps</a>
            <a href="https://help.tunnelbear.com/hc/en-us">Help</a>
            <a href="https://www.tunnelbear.com/account/overview">My Account</a>

            <ButtonGetNow nav> Get TunnelBear</ButtonGetNow>
          </div>
        </Nav>
      </header>
      <main>
        <SectionIntro>
          <div>
            <h1> A more secure way to browse the web</h1>
            <p>
              TunnelBear encrypts your internet connection to keep your online
              activity private on any network.
            </p>
            <ButtonGetNow>Get TunnelBear now</ButtonGetNow>
          </div>
          <HeroBear src={heroBear} />
        </SectionIntro>
        <SectionTestimonials>
          <img src={forbesImg} />
          <img src={vergeImg} />
          <img src={lifehackerImg} />
          <img src={tnwImg} />
          <img src={vbImg} />
          <img src={techradarImg} />
        </SectionTestimonials>
        <SectionExplain>
          <h2>Easy-to-use apps for all your devices</h2>
          <p>
            Just open the TunnelBear app, select a country, and flip the switch.
            Once you're connected, TunnelBear will work quietly in the
            background to keep your data secure.
          </p>
          <SectionCompatible>
            <div>
              <img src={macLogo} />
              <p>Mac</p>
            </div>
            <div>
              <img src={windowsLogo} />
              <p>Windows</p>
            </div>
            <div>
              <img src={iosLogo} />
              <p>iOS</p>
            </div>
            <div>
              <img src={androidLogo} />
              <p>Android</p>
            </div>
          </SectionCompatible>
          <ButtonGetNow explain>Get TunnelBear now</ButtonGetNow>
          <ImgComputer src={computerImage}></ImgComputer>
          <ImgTablet src={tabletImage}></ImgTablet>
          <ImgMobile src={mobileImage}></ImgMobile>
        </SectionExplain>

        <BenefitsHeadline>
          Why millions of people are using TunnelBear
        </BenefitsHeadline>
        <SectionBenefits>
          <BenefitContainer>
            <img src={theftIcon} alt="Bear thief" />
            <div>
              <h3>Stop password and data theft</h3>

              <p>
                Hackers can steal passwords and data over insecure public WiFi.
                TunnelBear blocks them to keep you secure.
              </p>
            </div>
          </BenefitContainer>
          <BenefitContainer>
            <img src={onlinePrivacy} alt="" />

            <div>
              <h3>Protect your online privacy</h3>

              <p>
                Network owners and internet providers can see everything you do
                online. With TunnelBear on, they can't see a thing.
              </p>
            </div>
          </BenefitContainer>
          <BenefitContainer>
            <img src={globalContent} alt="" />

            <div>
              <h3>Access global content</h3>

              <p>
                Some content is only available in certain regions. TunnelBear
                changes your virtual location so you can see it anywhere.
              </p>
            </div>
          </BenefitContainer>
          <BenefitContainer>
            <img src={ipTracking} alt="" />

            <div>
              <h3>Prevent IP-based tracking</h3>
              <p>
                Ad services use your IP address to track your behaviour across
                sites. TunnelBear stops them by assigning you a new IP.
              </p>
            </div>
          </BenefitContainer>
          <BenefitContainer>
            <img src={localCensorship} alt="" />

            <div>
              <h3>Bypass local censorship</h3>

              <p>
                Some governments block popular websites and apps. TunnelBear
                unblocks them by changing your virtual location.
              </p>
            </div>
          </BenefitContainer>

          <BenefitContainer>
            <img src={wayMore} alt="" />

            <div>
              <h3>And way, way more</h3>

              <p>
                Play on new game servers, prevent speed throttling, and unblock
                apps and websites on school and work networks.
              </p>
            </div>
          </BenefitContainer>
        </SectionBenefits>
        <SectionWorldwide>
          <img src={earthIcon} alt="globe" />
          <div>
            <h2>Browse the internet from 23 countries.</h2>
            <h3>
              Discover something new, or tunnel back home to enjoy your
              favourite websites and apps while travelling or living abroad.
            </h3>
            <FlagsSection>
              <span role="img" aria-label="United Kingdom flag">
                🇬🇧
              </span>
              United Kingdom <br />{" "}
              <span role="img" aria-label="Germany  flag">
                🇩🇪
              </span>
              Germany <br />{" "}
              <span role="img" aria-label="Spain  flag">
                🇪🇸
              </span>
              Spain <br />
              <span role="img" aria-label="Netherlands  flag">
                🇳🇱
              </span>
              Netherlands <br />
              <span role="img" aria-label="Australia  flag">
                🇦🇺
              </span>
              Australia <br />
              <span role="img" aria-label="Hong Kong  flag">
                🇭🇰
              </span>
              Hong Kong <br />
              <span role="img" aria-label="Mexico  flag">
                🇲🇽
              </span>
              🇲 Mexico <br />
              <span role="img" aria-label="Romania  flag">
                🇷🇴
              </span>{" "}
              Romania <br />
            </FlagsSection>
          </div>
        </SectionWorldwide>
      </main>
    </body>
  );
}

export default App;
