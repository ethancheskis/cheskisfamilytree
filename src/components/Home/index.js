import Sidebar from '../Sidebar';
import './index.scss';
import Logo from '../../img/Cheskis Family Tree-logos_transparent-fixed.png'

const Home = () => {
    return (
        <>
            <Sidebar />

            <div className='home'>
                <div className='header-img'>
                    <img src={Logo} />
                </div>

                <div className='main-container'>
                    <div className='names-list'>
                        <ul>
                        <li>Irvin "Zene" Cheskis</li>
                    <li>Doris "Duckie" Cheskis</li>
                    <li>Eugene Cheskis</li>
                    <li>Marilyn Cheskis</li>
                    <li>Robert L</li>
                    <li>Denise</li>
                    <li>David Cheskis</li>
                    <li>Neal Cheskis</li>
                    <li>Heather</li>
                    <li>Joel Cheskis</li>
                    <li>Mandy</li>
                    <li>Joey L</li>
                    <li>J.C. L</li>
                    <li>Andrew L</li>
                    <li>Deena L</li>
                    <li>Gio S</li>
                    <li>Etana Cheskis</li>
                    <li>Noah Cheskis</li>
                    <li>Shay Cheskis</li>
                    <li>Ethan Cheskis</li>
                    <li>Ryan Cheskis</li>
                    <li>Hallel Cheskis</li>
                    <li>Devorah Cheskis</li>
                    <li>Rena Cheskis</li>
                    <li>Chole L</li>
                    <li>Jacob L</li>
                    <li>Giuls</li>
                    <li>TBD</li>
                        </ul>
                    </div>
                </div>

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

export default Home