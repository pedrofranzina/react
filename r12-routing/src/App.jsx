import { Route, Switch } from "wouter";
import ContactsView from "./views/ContactsView";
import HomeView from "./views/HomeView";
import Header from "./components/Header"


function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </>
  )
}

export default App;
