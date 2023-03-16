import photo from '../assets/photo.jpg';
import { Col, Row } from 'reactstrap';
import { ReactDOM } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

function Home() {
  return (
    <Row className="Home border">
      <Col className='border'>
        <div className='headerText'>
          <p className='border headline' style={{fontSize: 48}}>Len Ganley</p>
          <p className='border headline' style={{fontSize: 24}}>Full Stack Developer</p>
        </div>
        <Row className='border'>
          <Col/>
          <Col>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Col>
          <Col className='border'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Col>
          <Col className='border'>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </Col>
          <Col/>
        </Row>
        <Row className='border'>
          <Col className='border'>Meet the Dev</Col>
          <Col className='border'>Meet the Man</Col>
        </Row>
      </Col>
      <Col className='border'>
        <img
          src={photo}
          alt="Picture a handsome devil"
          className='border img-fluid'
          style={style.image}
        />
      </Col>
    </Row>
  );
}

export default Home;

const style = {
  image: {
    padding: "25px",
    borderRadius: "100%"
  }
}