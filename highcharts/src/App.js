import LineChartBasic from "./components/LineChartBasic";
import PieChartBasic from "./components/PieChartBasic";

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
          
        </div> 
      </div> 
    </div>
  );
}

export default App;
