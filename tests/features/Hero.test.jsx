import { getByText, render, screen } from '@testing-library/react';
import Hero from '../../src/features/Hero/Hero';

import { expect } from 'vitest';

describe('Hero', () => {
  it('renders hero component', () => {
    render(<Hero />);

    const heroCtaElement = screen.getByText(/the new arrival/i);
    expect(heroCtaElement).toBeInTheDocument();

    const heroFeatureProduct = screen.getByRole('img', {
      name: /shoe collection/i,
    });
    expect(heroFeatureProduct);
  });
});
