import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='jobber' className='logo' />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>
                    <p>
                        I'm baby green juice hot chicken woke la croix fam next level chartreuse wayfarers gentrify viral mumblecore glossier pok pok butcher. Salvia kogi normcore viral man braid waistcoat, marfa palo santo raw denim.
                    </p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing
