import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Cookies from 'js-cookie';
import { ImGithub } from 'react-icons/im';
import Button from '../Button/Button';
import './Banner.css';

const AnimatedText = ({ children }) => {
  const [isHovered, setHovered] = useState(false);
  
  const props = useSpring({
    scale: isHovered ? 1.1 : 1,
    color: isHovered ? '#e26959' : '#fff',
    config: { tension: 300, friction: 10 }
  });

  return (
    <animated.span
      style={props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="animated-text"
    >
      {children}
    </animated.span>
  );
};

const HomeBanner = () => {
  const isLoggedIn = Cookies.get('isLoggedIn');
  const userType = Cookies.get('usertype');
  
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 }
  });

  const buttonProps = useSpring({
    from: { scale: 0.9 },
    to: { scale: 1 },
    config: { tension: 200, friction: 12 }
  });

  const githubIconAnimation = useSpring({
    loop: { reverse: true },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 20000 }
  });

  return (
    <div className="banner-container" id="home">
      <div className="banner-background">
        <div className="banner-overlay"></div>
      </div>

      <animated.div style={fadeIn} className="banner-content">
        <div className="banner-inner">
          <div className="banner-text-container">
            <h1 className="banner-heading">
              <AnimatedText>Connecting Excess to Empathy.</AnimatedText>
              <br className="banner-break" /> 
              <AnimatedText>Minimize Waste.</AnimatedText>
              <br /> 
              <AnimatedText>Maximize Impact.</AnimatedText>
            </h1>

            <animated.p className="banner-subheading">
              An initiative to raise awareness and services for{' '}
              <span className="highlight">food sustainability,</span>
              <br className="banner-break" />
              promoting inclusivity across{' '}
              <span className="highlight">all communities</span> and
              <br className="banner-break" /> 
              fostering a <span className="highlight">world</span> without hunger.
            </animated.p>

            <animated.div style={buttonProps} className="banner-buttons">
              {isLoggedIn ? (
                userType === 'club' ? (
                  <Button
                    className="banner-button"
                    data-cy="landingpage-club-signup"
                    variant="default"
                    to="/auth/signup"
                  >
                    Create an event
                  </Button>
                ) : (
                  <Button
                    className="banner-button"
                    data-cy="landingpage-club-signup"
                    variant="default"
                    to="/shop"
                  >
                    Checkout our shop
                  </Button>
                )
              ) : (
                <Button
                  className="banner-button"
                  data-cy="landingpage-club-signup"
                  variant="default"
                  to="/login"
                >
                  Sign up now
                </Button>
              )}
              
              <Button
                className="banner-button github-button"
                variant="outline"
                to="https://github.com/abhi03ruchi/Anndaata-Connect"
                target="_blank"
                rel="noreferrer"
              >
                <animated.div style={githubIconAnimation}>
                  <ImGithub className="github-icon" />
                </animated.div>
                GitHub
              </Button>
            </animated.div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default HomeBanner;