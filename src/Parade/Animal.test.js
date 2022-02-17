import { render, screen } from '@testing-library/react';
import Animal from './Animal';

test('Should retun bear emoji from Animal Component', () => {
  render(<Animal animal={'bear'} />);

  const animalEl = screen.getByTitle('animal-span');
  expect(animalEl).toBeInTheDocument();

  const emoji = screen.getByText('🐻');
  expect(emoji).toBeInTheDocument();
});

test('Should retun lion emoji from Animal Component', () => {
  render(<Animal animal={'lion'} />);

  const animalEl = screen.getByTitle('animal-span');
  expect(animalEl).toBeInTheDocument();

  const emoji = screen.getByText('🦁');
  expect(emoji).toBeInTheDocument();
});

test('Should retun tiger emoji from Animal Component', () => {
  render(<Animal animal={'tiger'} />);

  const animalEl = screen.getByTitle('animal-span');
  expect(animalEl).toBeInTheDocument();

  const emoji = screen.getByText('🐯');
  expect(emoji).toBeInTheDocument();
});
