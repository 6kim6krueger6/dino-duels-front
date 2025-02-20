import Connect from "./components/Connect";
import Main from "./components/Main";
import { usePrivy } from "@privy-io/react-auth";

function App() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return null;
  }

  return (
    <div>
      <Connect />
      <Main />  
    </div>
  );
}

export default App;
