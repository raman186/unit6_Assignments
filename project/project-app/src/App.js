import logo from './logo.svg';
import './App.css';
import ProjectForm from './components/Project_form';
import ProductList from './components/ProductListing';


function App() {
  return (
    <div className="App">
      {/* <div className='form'>
        <ProjectForm />
      </div>
      <div className='list'>
      <ProductList />
      </div> */}
      <ProjectForm />
      <ProductList />

    </div>
  );
}

export default App;
