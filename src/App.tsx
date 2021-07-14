import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home"
import{ BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <Route path="/rooms/new" component={NewRoom}></Route>
    </BrowserRouter>
  );
}

export default App;
