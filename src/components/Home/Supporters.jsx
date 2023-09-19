import Card from "../Supporters/card";
import huddle01 from '../../assets/huddle01.jpg';
import lighthouse from '../../assets/lighthouse.jpg';
import polybase from '../../assets/polybase.jpg';
import tnc from '../../assets/tnc.png';

export default function Supporters() {
    return (
        <div className="pb-32 sm:px-10 px-5 flex flex-col items-center gap-24 justify-center">
            <h1 className="font-extrabold md:text-3xl text-2xl">Our Supporters</h1>
            <dxiv className="flex xl:gap-24 lg:gap-20 gap-16  w-full xl:px-12 flex-wrap justify-center">
                <Card imgS={huddle01} titleS={'Huddle01'} link={'https://huddle01.com/'} widS={48} paraS={'Composable and robust media infrastructure to enable cross-chain audio and video communication between users.'} />
                <Card imgS={lighthouse} titleS={'Lighthouse'} link={'https://www.lighthouse.storage/'} widS={56} paraS={'Decentralized database powered by zero knowledge proofs, with attributes of a blockchain and the speed & privacy of a database.'} />
                <Card imgS={polybase} titleS={'Polybase'} link={'https://polybase.xyz/'} widS={32} paraS={'Perpetual storage powered by decentralized web. Easily store and secure your data.'} />
                <Card imgS={tnc} titleS={'The News Crypto'} link={'https://huddle01.com/'} widS={48} paraS={'Composable and robust media infrastructure to enable cross-chain audio and video communication between users.'} />
            </dxiv>
        </div>
    )
}