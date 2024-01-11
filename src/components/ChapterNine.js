import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  toggleChapterNine,
  toggleChapterTen,
  toggleChapterEleven,
  toggleChapterTwelve,
} from "../actions";
import { Redirect } from "react-router-dom";

const ChapterNine = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);

  const dispatch = useDispatch();

  const renderOne = () => {
    return (
      <div>
        <h1>Chapter Seven</h1>
        <h6>Ascent into the Inner Chambers</h6>
        <div
          onClick={() => {
            setOne(false);
            setTwo(true);
          }}
        >
          <h6 className="buttonText">CONTINUE</h6>
        </div>
      </div>
    );
  };

  const renderTwo = () => {
    return (
      <Container>
        <h6>
          You take one final glance at Bobcat Goldthwait's half-eaten dead body
          and enter a stark room containing, once again, three more doors.
        </h6>

        <h6>You examine them.</h6>
        <h6>
          A faint high-pitched squawking can be heard beyond Door Number One.
          Door Number Two reeks of insecruity, bitterness and profound
          discontent. Door Number three is bathed in sickly variations of the
          colors red, white and blue.
        </h6>
        <Row>
          <Col>
            <h5 className="choice-btn" onClick={victoriaDoor}>Enter Door #1</h5>
          </Col>
          <Col>
            <h5 className="choice-btn" onClick={rodneyDoor}>Enter Door #2</h5>
          </Col>
          <Col>
            <h5 className="choice-btn" onClick={yakovDoor}>Enter Door #3</h5>
          </Col>
          <Col>
            <h5 className="choice-btn" onClick={() => setIsRunVisible(true)}>Run</h5>
          </Col>
        </Row>
      </Container>
    );
  };

  const [isRunVisible, setIsRunVisible] = useState(false);

  const renderRun = () => {
    return (
      <Redirect
        to={{
          pathname: "/Run",
        }}
      />
    );
  };

  const victoriaDoor = () => {
    setTwo(false);
    dispatch(toggleChapterTen(true));
    dispatch(toggleChapterNine(false));
  };

  const rodneyDoor = () => {
    setTwo(false);
    dispatch(toggleChapterEleven(true));
    dispatch(toggleChapterNine(false));
  };

  const yakovDoor = () => {
    setTwo(false);
    dispatch(toggleChapterTwelve(true));
    dispatch(toggleChapterNine(false));
  };

  return (
    <div>
      {isRunVisible && renderRun()}
      {one && renderOne()}
      {two && renderTwo()}
    </div>
  );
};

export default ChapterNine;
