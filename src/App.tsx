import { createContext } from 'react'
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home"
import{ BrowserRouter, Route } from 'react-router-dom'

export const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
