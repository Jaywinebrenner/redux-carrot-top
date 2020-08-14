import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";


const MainDisplay = () => {

  const dispatch = useDispatch();

  //STATE
  const mainDisplayOne = useSelector((state) => state.mainDisplayOne);
  const mainDisplayTwo = useSelector((state) => state.mainDisplayTwo);
  const mainDisplayButtons = useSelector((state) => state.mainDisplayButtons);

  const createCharacter = useSelector((state) => state.createCharacter);
  const chapterOne = useSelector((state) => state.chapterOne);
  const chapterTwo = useSelector((state) => state.chapterTwo);



  return (
    <React.Fragment>
    
        {/* <h6>{mainDisplayOne}</h6>
        <h6>{mainDisplayTwo}</h6>
        {mainDisplayButtons} */}
 
    </React.Fragment>
  );
};

export default MainDisplay;
