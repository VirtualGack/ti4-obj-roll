import './App.css';
import React, {useState} from 'react';



function App() {

    const [numx, setNumx] = useState(0);
    const [numy, setNumy] = useState(0);

    var match = false;

    if (numx !== numy) {
        let match = false;
    } else {
        let match = true;
    }

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNumx(randomNumberInRange(1, 20));
        setNumy(randomNumberInRange(1, 20));

        if (match == true) {
            handleClick();
        }
    }

    return (




    <div className="Background">
      <div className="Roller">
        <h1>TI4 LADZ</h1>
        <button className="Button" onClick={handleClick}>ROLL OBJECTIVES</button>
      </div>


        <div className="Objectives">
            <div className="row">
          <div className="column">
              <img src={require("./images/"+ numx + ".jpg")} width="100%" alt="Objective 1" />
          </div>

          <div className="column">
              <img src={require("./images/"+ numy + ".jpg")} width="100%" alt="Objective 2" />
          </div>
            </div>
        </div>
    </div>
  );
}

export default App;
