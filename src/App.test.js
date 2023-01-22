import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


//test('render text CapitanAmerica', () => {
  //const tree = renderer.create(<App/>).toJSON()
  //expect (tree).toMatchSnapshot()
  
//})


test('renders text CapitanAmerica', () => {
  render(<App />)
  const nameElement = screen.getByText(/Capitan America/i)
  expect(nameElement).toBeInTheDocument()
});