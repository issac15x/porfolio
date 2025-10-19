import "./App.css";
import { LangProvider } from "./componnets/LangContext";
import Snowfall from "./componnets/Snowfall";
import CursorFollower from "./componnets/CursorFollower";

import Header from "./componnets/Header";
import SectionSlider from "./componnets/SectionSlider";
import AboutSection from "./componnets/AboutSection";
function App() {
  return (
    <>
      <LangProvider>
        <Snowfall />
        <CursorFollower />

        <Header />
        <SectionSlider />
      </LangProvider>
    </>
  );
}

export default App;
