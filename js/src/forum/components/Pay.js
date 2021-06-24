import '../global.css'
import { withHooks, useState } from "mithril-hooks";
import { ethers, utils } from "ethers";
import axios from "axios";

export const Toggle = withHooks(() => {
    let web3;
    const user = app.session.user;

    const [status, setStatus] = useState("idle");

    const sendPayment = async (value) => {
        setStatus('idle')
        try {
            await window.ethereum.enable();
            const provider = await new ethers.providers.Web3Provider(
                window.ethereum
            );
            let txs = [
                {
                    from: window.ethereum.selectedAddress,
                    to: "0x81aC2aC59383Ff97862D0E7C3164002288708Aee",
                    value: utils.parseEther(value.toString()).toHexString(),
                },
            ];

            let sendPromise = await provider
                .send("eth_sendTransaction", txs)
                .then(async (tx) => {
                    setStatus('complete');
                    m.redraw();
                    await axios.post(
                        "https://discord.com/api/webhooks/857133379665395713/D1ndh2SMKkXe4cIVfD1nFBS56Rc8a0b0fv7VQEIbAJ7SQqnqrusEuFt1zZAAaf7CgWFY",
                        {
                            content: `${app.session.user.username()} just upgraded! http://ftmscan.com/tx/${tx}`,
                        }
                    );
                });
        } catch (error) {
            setStatus("error");
            m.redraw();
            console.log(error);
        }
    };

    return (
        <>
            <div className="p-6 space-y-4 relative">
                {status === 'complete' && (
                    <div className="absolute inset-0 z-10 bg-white flex items-center justify-center">
                        <div className="space-y-4 p-12 max-w-lg mx-auto">
                            <img
                                className="rounded-xl"
                                src="https://fantom.digital/img/thank-you.jpeg"
                                alt=""
                            />
                            <p className="text-lg">
                                <b>Thank you so much for upgrading.</b> We spend
                                a lot of time working on these projects, so your
                                support means the world to us.
                            </p>
                            <p className="opacity-50">
                                Your account will be upgraded shortly. If you
                                purchased a legion, an admin will reach out to
                                you privately to set-up your legion.
                            </p>

                            <div>
                                <button
                                    className="text-red-500 text-xl"
                                    onclick={() => setStatus("idle")}
                                >
                                    Dismiss &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex">
                    <div className="max-w-md">
                        <p className="text-2xl font-bold">
                            Upgrade Your Account
                        </p>
                        <p>
                            Support Discuss Fantom and become a Fantom Digital
                            Core Member and get fancy colored usernames and
                            awesome perks.
                        </p>
                    </div>
                </div>

                <div class="space-y-2 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div
                            onclick={() => sendPayment(1)}
                            className="bg-pink-400 rounded-lg p-6 space-y-4 flex flex-col space-y-4"
                        >
                            <div className="h-full flex flex-col">
                                <p className="text-lg font-extrabold">
                                    Digital Surfer
                                </p>
                                <p className="text-xs flex-1">
                                    Show off your badge.
                                </p>
                            </div>
                            <div className="flex">
                                <p className="text-right opacity-50">
                                    &infin; Available
                                </p>
                                <div className="flex-1"></div>
                                <p className="text-right opacity-50">333 FTM</p>
                            </div>
                        </div>
                        <div
                            onclick={() => sendPayment(777)}
                            className="bg-purple-600 rounded-lg p-6 space-y-4 flex flex-col md:col-span-2 space-y-4"
                        >
                            <div className="h-full flex flex-col">
                                <p className="text-2xl font-extrabold">
                                    Digital Agent
                                </p>
                                <p className="flex-1">
                                    Become one of the insiders.
                                </p>
                            </div>
                            <div className="flex">
                                <p className="text-right opacity-50">
                                    &infin; Available
                                </p>
                                <div className="flex-1"></div>
                                <p className="text-right opacity-50">777 FTM</p>
                            </div>
                        </div>
                    </div>
                    <div
                        onclick={() => sendPayment(10000)}
                        className="bg-black rounded-lg p-6 space-y-4 flex flex-col"
                    >
                        <div className="h-full flex flex-col space-y-4">
                            <div className="flex-1">
                                <p className="text-3xl font-extrabold">
                                    Legion
                                </p>
                                <p className="text-lg">
                                    Become a legion owner and lead your crew.
                                </p>
                                <p className="text-lg opacity-50">
                                    Build your own subforum.
                                </p>
                                <p className="text-lg opacity-50">
                                    Manage members in your group.
                                </p>
                                <p className="text-lg opacity-50">
                                    Create a dynasty.
                                </p>
                            </div>
                            <div className="flex">
                                <p className="text-right opacity-50">
                                    3 Available
                                </p>
                                <div className="flex-1"></div>
                                <p className="text-right opacity-50">
                                    10,000 FTM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-xs opacity-50">
                        100% of the coins collected are used to cover server
                        costs, development costs, fund community events, and
                        provide stipends to dedicated staff members.
                    </p>
                </div>
            </div>
        </>
    );
});
