import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Chart from './components/Chart';
// import LineChart from './components/LineChart';
// import BarChart from './components/BarChart';
// import databar from './components/databar'
// import dataline from './components/dataline'

function App() {

  return (
    <div className="App">
     <Container>
        <Row>
          <Col>
            <h1 className='mt-5'>Chart Demo</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart model="bars"/>
          </Col>
          <Col> 
            <Chart model="line"/>
          </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;
