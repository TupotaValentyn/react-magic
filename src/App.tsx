import React from 'react';
import './App.css';
import Card, { CardProps } from './components/Card/Card';
import { uiLibRoutes } from './config/routes';

function App() {
  const cardProps: CardProps = {
    title: 'Card Title',
    description: 'lorem ipsum',
    alt: 'card-image',
    imageSize: 300
  }
  console.log(uiLibRoutes);
  return (
    <div>
      <Card {...cardProps} />
    </div>
  );
}

export default App;
