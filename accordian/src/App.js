import "./App.css";
import Accordians from "./components/accordians";
import ImageSlider from "./components/image-slider";
import GenerateRandomColor from "./components/random-generate-color";
import StarRating from "./components/star-rating/inde";

function App() {
  return (
    <>
      {/*Accordian */}
      {/*<Accordians /> */}
      {/*Random Generator Color */}
      {/*<GenerateRandomColor /> */}
      {/*Start-rating /> */}
      {/*        <StarRating numOfStar={10} /> />
       */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
