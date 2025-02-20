import { usePrivy } from "@privy-io/react-auth";
import 'bootstrap/dist/css/bootstrap.min.css';

function Connect(){
    const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        {ready && authenticated ? (
          <div>
            <br />
            <button className="btn btn-primary position-fixed top-0 end-0 m-3" onClick={logout} style={{ width: "150px", height: "40px" }} >
              Log Out
            </button>
          </div>
        ) : (
          <button className="btn btn-primary position-fixed top-0 end-0 m-3" onClick={login} style={{ width: "150px", height: "40px" }} >Log In</button>
        )}
      </header>
    </div>
  );
}

export default Connect;
