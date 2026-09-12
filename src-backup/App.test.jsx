import {
  describe, it, expect, vi,
} from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

// react-dark-mode-toggle pulls in lottie-web, which needs a real <canvas>
// (unavailable in jsdom). Stub it so the smoke test can mount the app.
vi.mock('react-dark-mode-toggle', () => ({
  default: () => null,
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App')).toBeInTheDocument();
  });
});
