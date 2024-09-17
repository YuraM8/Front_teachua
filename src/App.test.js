import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HeaderComponent correctly', () => {
  render(
      <App />
  );
  const linkElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
