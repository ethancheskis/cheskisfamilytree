import './index.scss';
import Sidebar from '../Sidebar';
import Logo from '../../img/Cheskis Family Tree-logos_transparent-fixed.png';
import Buddy from '../../img/pets/Buddy1.jpeg'
import Jenny from '../../img/pets/Jenny2.jpeg'
import Milo from '../../img/pets/Milo3.jpeg'
import Penelopea from '../../img/pets/Penelopea1.JPEG'

const Pets = () => {
    return (
        <>
            <Sidebar />

            <div className='pets'>
                <div className='pets-header'>
                    <img src={Logo} />
                    <h1>Pets Page</h1>
                </div>

                <div className='photo-container'>
                    <div className='portrait'>
                        <img src={Jenny} className='genny' />
                        <img src={Buddy} className='buddy' />
                        <img src={Milo} className='milo' />
                        <img src={Penelopea} className='penelopea' /> 
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
};

export default Pets;