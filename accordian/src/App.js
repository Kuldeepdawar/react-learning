import "./App.css";
import Accordians from "./components/accordians";
import ImageSlider from "./components/image-slider";
import LoadApi from "./components/load-products";
import GenerateRandomColor from "./components/random-generate-color";
import StarRating from "./components/star-rating/inde";
import TreeView from "./components/tree-view";

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
      {/*<ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> /> */}
      {/*LOAD API PRODUCTS /> */}
      {/*  <LoadApi /> */}
      {/*Tree View, UI components */}
      <TreeView />
    </>
  );
}

export default App;
