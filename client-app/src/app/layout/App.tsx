import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/home/Homepage";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();


  return location.pathname === '/' ? <HomePage /> : (
    <>
    <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    <NavBar />
     <Container style={{ marginTop: "7em" }}>
       <Outlet />
     </Container>
   </>  
  );
}

export default observer(App);
