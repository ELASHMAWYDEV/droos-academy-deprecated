//Components
import {
  HomeIntro,
  CoursesSlider,
  StudentsReview,
  Footer,
} from "../../components";

//Styles
import "./style.scss";

const Home = () => {
  return (
    <div className="home-container">
      <HomeIntro />
      <CoursesSlider />
      <StudentsReview />
      <Footer />
    </div>
  );
};

export default Home;
