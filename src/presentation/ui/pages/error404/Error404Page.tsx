import { Link } from 'react-router-dom';
import Icons from '../../assets/Icons';
import Layout from '../../layout/Layout';
import './Error404PageStyles.scss';
import { routes } from '../../routes/RoutesComponent';

const Error404Page: React.FC = () => {
    return <div className="error_404_page">
        <Layout>
            <div className="bg_gray">
                <div className="wrapper">
                    <img src="/assets/pages/error404/wcar.svg" alt="" className="src_1" />
                    <img src="/assets/pages/error404/rombos.svg" alt="" className="src_2 d-none d-md-block" />
                    <div className="content">
                        <span className="text_404">4<span className="text_yellow">0</span>4</span>
                        <h1>Oops! Página no encontrada</h1>
                        <span>Vamos a llevarte a donde necesitas estar.</span>
                        <div>
                            <Link to={routes.home.relativePath} className="btn btn_orange mt-3">
                                REGRESA AL HOME
                                <Icons.ArrowCircle />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
};

export default Error404Page;