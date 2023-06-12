import "./App.css";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import FlexContainer from "./components/FlexContainer";
import OptionsMenu from "./components/OptionMenu/OptionsMenu";
import OptionDiffusion from "./components/OptionMenu/OptionDiffusion";
import { mainSimulation, defaultSetting } from "./logic/simulation";
import PopUp from "./components/PopUp";
import StartStop from "./components/widgets/StartStop";
import RestartMenu from "./components/RestartMenu";
import OptionBackground from "./components/OptionMenu/OptionBackground";
import { useState } from "react";
import OptionAddConstant from "./components/OptionMenu/OptionAddConstant";

function App() {
  const [intervalID, setIntervalID] = useState(null);

  const startSimulation = () => {
    const runID = setInterval(() => mainSimulation.newIteration(), 10);
    setIntervalID(runID);
  };

  const stopSimulation = () => {
    clearInterval(intervalID);
    setIntervalID(null);
  };

  return (
    <div className="App">
      <div className="Content">
        <Header />

        <FlexContainer>
          <Canvas
            mainSimulation={mainSimulation}
            controls={[
              <PopUp onOpen={stopSimulation}>
                <RestartMenu
                  restartFunction={mainSimulation.changeResolution}
                />
              </PopUp>,
              <StartStop
                intervalID={intervalID}
                start={startSimulation}
                stop={stopSimulation}
              />,
            ]}
          />

          <OptionsMenu>
            <OptionBackground
              initValue={defaultSetting.backgroundValue}
              setValueFunction={mainSimulation.changeBackground}
              rangeMin={0}
              rangeMax={0.9}
              step={0.01}
              initRandomness={defaultSetting.backgroundRandomness}
            />

            <OptionAddConstant
              initValue={defaultSetting.addConstant}
              setValueFunction={mainSimulation.changeAddConstant}
              rangeMin={10 ** -5}
              rangeMax={10 ** -1}
              step={0.00001}
            />

            <OptionDiffusion
              title={"Difusion coeficient"}
              symbol={"α"} 
              initValue={defaultSetting.alpha}
              setValueFunction={mainSimulation.changeDiffusion}
              rangeMin={0.1}
              rangeMax={3}
              step={0.01}
            />
          </OptionsMenu>
        </FlexContainer>
      </div>
    </div>
  );
}

export default App;
