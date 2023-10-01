import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes} from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" exact Component={Dashboard}/>
          <Route path="/product" exact Component={Dashboard}/>
          <Route path="/cart" exact Component={CartDetail}/>
        </Routes>
       
      </Container>
    </div>
  );
}

export default App;
