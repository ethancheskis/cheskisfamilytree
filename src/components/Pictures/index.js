import Sidebar from '../Sidebar'
import './index.scss'
import Logo from '../../img/Cheskis Family Tree-logos_transparent-fixed.png'
import Etana_Gio1 from '../../img/family/Etana-Gio1.jpeg'
import Etana_Noah_Shay from '../../img/family/Etana-Noah-Shay.jpeg'
import Joel_Mandy1 from '../../img/family/Joel_Mandy1.jpeg'

const Pictures = () => {
    return (
        <>
            <Sidebar />

            <div className='pictures'>
                <div className='pictures-header'>
                    <img src={Logo} />
                    <h1>Pictures</h1>
                </div>

                <div className='photo-container'>
                    <div className='portrait'>
                        <img src={Etana_Gio1} />
                        <img />
                        <img />
                        <img />
                    </div>
                    <div className='landscape'>
                        <img src={Etana_Noah_Shay} />
                        <img src={Joel_Mandy1} />
                        <img />
                        <img />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />

                <div className='footer'>
                    <h3>DEVELOPED BY ETHAN CHESKIS</h3>
                </div>
            </div>
        </>
    )
}

export default Pictures;