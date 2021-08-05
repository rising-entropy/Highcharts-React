import LineChartBasic from "./components/LineChartBasic";
import PieChartBasic from "./components/PieChartBasic";
import AreaChartBasic from "./components/AreaChartBasic";
import RangeGraphBasic from './components/RangeGraphBasic'
import WordCloudBasic from "./components/WordCloudBasic";

function App() {

  return (
    <div className="App">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
          <LineChartBasic /> 
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <PieChartBasic/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <AreaChartBasic/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <RangeGraphBasic/>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
          <WordCloudBasic/>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default App;
