// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SignalPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SignalPulse/i);
    expect(titleElement).toBeInTheDocument();
});
