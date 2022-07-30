import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App Component functionality', () => {

  // --- 1 ---
  it('Test app has element with data-testid=h2Id', () => {

    render(<App />)
    const getByTestId = screen.getByTestId('h2Id')

    expect(getByTestId).toHaveTextContent('Welcome to CG')
  })

  // -- 2 -- 
  it('Test app has element with Hello', () => {

    render(<App />)
    const linkElement = screen.getByText(/Hello/i)

    expect(linkElement).toBeInTheDocument()
  })

})
