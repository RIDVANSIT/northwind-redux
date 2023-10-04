import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" exact Component={Dashboard}/>
          <Route path="/product" exact Component={Dashboard}/>
          <Route path="/cart" exact Component={CartDetail}/>
        <Route path="/saveproduct/:productId" Component={AddOrUpdateProduct}></Route>
        </Routes>
       
      </Container>
    </div>
  );
}

export default App;
