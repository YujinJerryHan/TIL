import './App.css';
import { useState } from 'react';
import coat1 from './img/coat1.jpeg';
import data from './data.js';

function App() {
  let [coats] = useState(data);

  return (
    <div className='App'>
      <div className='main-bg'></div>

      <Container>
        <Row>
          {/* 컴포넌트 순서대로  */}
          <Product coats={coats[0]} />
          <Product coats={coats[1]} />
          <Product coats={coats[2]} />

          {/* map으로 반복시키기 */}
          {coats.map(function (a, i) {
            return <Product coats={coats[i]} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Product(props) {
  return (
    <Col sm className='product'>
      <img src={coat1} width='100%' />
      <h4>{props.coats.title}</h4>
      <p>{props.coats.content}</p>
    </Col>
  );
}
