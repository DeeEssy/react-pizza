import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Route path="/" exact render={() => <Home pizzas={pizzas} />} />  Если нужно прокидывать пропсы в компоненту */} 
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}


export default App;