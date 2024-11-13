import { Route, Switch } from "wouter";
import HomeView from "./views/HomeView";
import FormView from "./views/FormView";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Header />
    <Switch>
      <Route path="/" component={HomeView} />
      <Route path="/Form" component={FormView} />
    </Switch>
    <Footer />
    </>
  )
}

export default App