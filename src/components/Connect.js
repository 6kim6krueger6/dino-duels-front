import { usePrivy } from "@privy-io/react-auth";
import { ethers } from "ethers";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function Connect() {
    const { ready, authenticated, user, login, logout } = usePrivy();
    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        const fetchAddress = async () => {
            if (authenticated && window.ethereum) {
                try {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const address = await signer.getAddress();
                    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
                    setWalletAddress(shortAddress);
                } catch (error) {
                    console.error("Failed to fetch wallet address:", error);
                }
            } else {
                setWalletAddress("");
            }
        };

        fetchAddress();
    }, [authenticated]);

    if (!ready) {
        return null;
    }

    return (
        <div className="App">
            <header className="App-header">
                {ready && authenticated ? (
                    <div>
                        <button
                            className="btn btn-primary position-fixed top-0 end-0 m-3"
                            onClick={logout}
                            style={{ width: "150px", height: "40px" }}
                        >
                            {walletAddress || "Connected"}
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn btn-primary position-fixed top-0 end-0 m-3"
                        onClick={login}
                        style={{ width: "150px", height: "40px" }}
                    >
                        Connect
                    </button>
                )}
            </header>
        </div>
    );
}

export default Connect;
