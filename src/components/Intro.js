import React, {useState} from "react";
// import { INTRO } from "../../constants/Story";
import carrotTop from '../media/carrot-top.png'
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactHowler from "react-howler";
import theme from "../media/theme1.mp3";
import { useSelector, useDispatch } from "react-redux";

const Intro = () => {
  const [isContinueVisible, setIsContinueVisible] = useState(false)

  const isIntroTextScrolling = useSelector(
    (state) => state.isIntroTextScrolling,
  );

    setTimeout(function () {
      setIsContinueVisible(true)
    }, 50000)
  // its 50,000 in reality

  const renderCarrotTopImage = () => {
    return (
      <React.Fragment>
        <img className="carrotTopIntroImage" src={carrotTop} />
      </React.Fragment>
    );
  }

  const renderIntroContinueButton = () => {
    return (
      <React.Fragment>
        <Link style={{ textDecoration: "none", fontFamily: 'Red Rose' }} to="/Game">
          <h1 className="buttonTextIntro">CONTINUE</h1>
        </Link>
      </React.Fragment>
    );
  }

const renderIntroText = () => {
  return (
    <div class="introWrapper">
      <h1 className="introHeader">The Beginning</h1>

      <h3 className="introStoryText">
        {" "}
        <Typewriter
          wrapperClassName="introStoryText"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(
                "Spawned from the fetid and petulant comedy clubs from the dark edges of a collapsed civilization, you embark on your singular journey to eliminate the Illuminati of Laughter - a sinister coalition of comedians hell bent on the annihilation of the human race.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h3>

      <h3 className="introStoryText">
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          wrapperClassName="introStoryText"
          onInit={(typewriter) => {
            typewriter
              .pauseFor(22000)
              .changeDelay(80)
              .typeString(
                "You are the Comedian Slayer, humanity's last bastion of hope against this vile scourge.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>

      <h3 className="introStoryText">
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          wrapperClassName="introStoryText"
          onInit={(typewriter) => {
            typewriter
              .pauseFor(30000)
              .changeDelay(80)
              .typeString(
                "You must infiltrate the elite comedy circuit of this malevolent assemblage and assassinate the Diabolical Lord of Laughter himself - Carrot Top. It will be a perilous journey filled with violence, mayhem, depravity and suffering.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>
    </div>
  );
};

    return (
      <Container className="introWholeWrapper">
        <ReactHowler src={theme} volume={0.4} loop={true} />
        {renderIntroText()}
        <Row className="introImageWrapper">
          <Col className="imageColWrapper">
            {/* {isContinueVisible && renderCarrotTopImage()} */}
            {renderCarrotTopImage()}
          </Col>
          <Col>{isContinueVisible && renderIntroContinueButton()}</Col>
        </Row>
      </Container>
    );
}

export default Intro