import './App.css';
import styles from './style.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import ApiDetails from './components/ApiDetails';
import ApiDesign from './components/ApiDesign';
import ParamsForm from './components/ParamsForm';
import ParamsFormT from './components/ParamsFormT';

function App() {
  return (
   <>
    <div>
      <Container className={styles.container}>
        <Row>
          <Col className={styles.colFour} sm={4}>
            <ApiDetails></ApiDetails>
          </Col>
          <Col className={styles.colEight} sm={8}>
            <ParamsFormT></ParamsFormT>
          </Col>
        </Row>
      </Container>
    </div>
   </>
  );
}

export default App;
