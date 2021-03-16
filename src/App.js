import './App.css';
import React from 'react';
import styled from 'styled-components';
import Converter from './components/Converter';

function App() {
  return (
    <Container>
      <Converter />
    </Container>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;