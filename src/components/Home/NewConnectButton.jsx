import { useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import Web3 from "web3";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const clientId =
    "BMkKHE4n2KgzLWFXDmpCVIpWMggQ8Pe8_4pRkbm9aNafKnn0WRlb1zoy6JlOh2nN2Aw54jIAbFbsAUut3tuJr8w"; // get from https://dashboard.web3auth.io

function NewConnectButton() {
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState("");
    const [userData, setUserData] = useState("")
    const [balance, setBalance] = useState("");
    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: "testnet", // mainnet, aqua,  cyan or testnet
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x1",
                        rpcTarget: "https://rpc.ankr.com/eth", // here public rpc your own endpoint
                    },
                });

                setWeb3auth(web3auth);

                await web3auth.initModal();

                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                }
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);
    const login = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
    };
    const getUserInfo = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const user = await web3auth.getUserInfo();
        setUserData(user);
        console.log(userData);
    };
    const logout = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        setProvider(null);
        await web3auth.logout();

    };
    const getAccounts = async () => {
        if (!provider) {
            console.log("provider not initialized yet");
            return;
        }
        try {
            const web3 = new Web3(provider);
            const address = (await web3.eth.getAccounts())[0];
            setAddress(address);
        } catch (error) {
            console.log(error);
        }

    };

    const getBalance = async () => {
        if (!provider) {
            console.log("provider not initialized yet");
            return;
        }
        try {
            const web3 = new Web3(provider);
            const address = (await web3.eth.getAccounts())[0];
            const balance = web3.utils.fromWei(
                await web3.eth.getBalance(address)
            );
            setBalance(balance);
        } catch (error) {
            console.log(error)
        }
    };
    const logInView = (
        <div className="flex  xl:gap-9 lg:gap-6 items-center  ">
            <div className="flex gap-3 px-3 py-1 font-semibold border-[1px] rounded-sm">
                <span>
                    {balance} Eth
                </span>
                <span>
                    {address?.slice(0, 5)}...{address?.slice(address?.length - 5, address?.length)}
                </span>

            </div>
            <button onClick={logout} className="bg-blue-600 border-[1px] hover:bg-blue-800 hover:scale-105 transition-all  duration-100 rounded-sm px-5 py-2  text-white font-medium">
                Logout
            </button>
        </div>
    );

    const logOutView = (
        <button onClick={login} className="bg-blue-600 border-[1px] hover:bg-blue-800 px-5 hover:scale-105 transition-all duration-100     py-2 rounded-sm text-white font-medium">
            Connect Wallet
        </button>
    );
    useEffect(() => {
        getBalance()
        getAccounts()
        getUserInfo()
    }, [provider])
    return (
        <div>
            {provider ? logInView : logOutView}
        </div>
    );
}

export default NewConnectButton;