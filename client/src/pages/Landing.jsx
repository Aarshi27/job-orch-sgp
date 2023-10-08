import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <img width={'200px'}  src='/src/assets/images/logo.svg' alt='job orchestration' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            The only <span>orchestration</span> app for your jobs
          </h1>
          <p>
          Job  Orchestration is a project aimed to streamline the flow of tracking for different job applied by a job seeker to all different organizations. Main focus has been revolving around effective management and monitoring the status of each job applied for every individual from seeker perspective.Dashboard with all necessary KTI (Key Tracking Indicators) are added for seamless orchestration of applied job roles with details and status visibility
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Log IN
          </Link>
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Landing;
