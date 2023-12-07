import { useNavigate } from "react-router-dom";
import bg_main from '../assets/img/bg_main.jpg'

function Home() {
    const navigate = useNavigate();

    const handleRegisterRedirect = async (event, history) => {
        event.preventDefault();
        
        navigate('/register');
    }
    return (
        <div className="container-fluid min-vh-100 bg-white m-0 p-0" style={{backgroundImage: "url(" + bg_main + ")", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}} >
            <div className="container-fluid min-vh-100 d-flex m-0 pt-5" style={{backgroundColor: 'rgba(255, 255, 255, .0)'}} >
                <div className="p-3 pt-5 text-white">
                    <div className='mt-5'>
                        <p className="display-1 fw-bold pt-5">Envision an app that evolves with you, a technological companion that anticipates your needs and adapts to your journey.</p>
                    </div>
                    <div className='col-md-8'>
                        <figure className="mt-5 fw-bold">
                            <blockquote className="blockquote fs-3 mt-5">
                                <p>The best minds are not in isolation; they thrive in collaboration and integration. Teamwork is the fuel that allows common people to attain uncommon results.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer fs-5 text-white-50 ps-5">
                                <cite title="Source Title">Tesla</cite> once remarked
                            </figcaption>
                        </figure>
                    </div>
                    <div className='mt-5 text-end pe-5'>
                        <button onClick={handleRegisterRedirect} className='btn btn-light fs-3 px-5 me-5'>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;