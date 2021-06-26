import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { NewRoom } from './views/NewRoom/NewRoom';



function App() {
  return (
    // <Home />
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
