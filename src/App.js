import './App.css';
import GitHubCard from './GitHubCard/GitHubCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App pt-5">
      <Row>
        <Col style = {{display: 'flex', justifyContent: 'center'}}>
          <GitHubCard/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
