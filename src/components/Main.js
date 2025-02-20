import logo from "./logo.png";
function Main() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 border rounded-5 shadow-lg text-center bg-white bg-opacity-80" style={{ width: '400px', maxWidth: '90%', marginBottom: '20px' }}>
          <img
            src={logo}
            className="img-fluid rounded-circle"
            style={{ width: '180px', height: '180px' }}
            alt="DinadImg"
          />
          <h1 className="mt-3">Gm,DinadsBro!</h1>
          <p className="lead mt-3" style={{ wordWrap: 'break-word' }}>
            Connect the wallet and press the mint button to collect your NFT!
          </p>
          <div style={{ width: '100px', margin: '0 auto' }}>
            <button className="btn btn-primary w-100">Mint</button>
            <input type="text" className="form-control mt-3" placeholder="Enter ETH" />
        </div>
        </div>
      </div>
    )
}

export default Main;