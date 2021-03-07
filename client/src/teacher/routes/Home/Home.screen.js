//Components
import { HomeIntro, CoursesSlider } from "../../components";

//Styles
import "./style.scss";

const Home = () => {
  return (
    <div className="home-container">
      <HomeIntro />
      <CoursesSlider />
    </div>
  );
};

export default Home;
