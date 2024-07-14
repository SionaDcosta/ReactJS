import './App.css';
import SimpleLineChart from './components/SimpleLineChart';
import LineChart from './components/LineChart';
import LineCustomizations from './components/Line';
import AxisCustomizations from './components/AxisCustomizations';
import CustomTooltipChart from './components/CustomTooltip';
import CustomLegend from './components/CustomLegend';

function App() {
  return (
   <div>
    <h2>SimpleLineChart</h2>
    <SimpleLineChart/>

    <h2>CustomLineChart</h2>
    <LineChart/>

    <h2>LineCustomizations</h2>
    <LineCustomizations/>

    <h2>LineCustomizations</h2>
    <AxisCustomizations/>

    <h2>LineCustomizations</h2>
    <CustomTooltipChart/>

    <h2>CustomLegend</h2>
    <CustomLegend/>
   </div>
  );
}

export default App;
