import logo from "./logo.png";
import { contractAddress, abi } from "./Constants";
import { ethers } from "ethers";
import { useState } from "react";

function Main() {
  const [ethAmount, setEthAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mintNFT = async () => {
    console.log("minting...");
    if (typeof window.ethereum !== "undefined") {
        const  provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        console.log("Processsing...");
        const transaction = await contract.safeMint({value: ethers.utils.parseEther(ethAmount || "0.01")});
        await transaction.wait(1);
      } catch (error) {
        console.log(error);
        
      }
    }else{
      alert("Please install metamask");
    }
  }
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
            <button className="btn btn-primary w-100" onClick={mintNFT} >Mint</button>
            <input type="text" className="form-control mt-3 text-center" placeholder="Enter ETH"  value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)} />
        </div>
        </div>
      </div>
    )
}

export default Main;