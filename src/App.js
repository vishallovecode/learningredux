import "./App.css";
import SignIn from "./Login";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}
export default App;
