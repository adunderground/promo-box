import './App.scss';
import PromoBox from './components/PromoBox'
import data from './mockdata';

const App = () => {

  return (
    <div className="App">
      <PromoBox data={data} />
    </div>
  );
}

export default App;
