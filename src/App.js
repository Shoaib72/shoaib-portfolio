import BG from './Assets/BG.mp4';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

function App() {
  return (
    <div className="App relative">
      <video src={BG} autoPlay loop muted></video>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
