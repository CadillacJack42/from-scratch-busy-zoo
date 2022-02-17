import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import Animal from './Parade/Animal';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/cadillac jack/i);
  expect(linkElement).toBeInTheDocument();
});

test('onLoad should check how many child elements are in Parade', () => {
  render(<App />);

  const paradeEl = screen.getByTitle('parade');

  expect(paradeEl.children.length).toBe(3);
});

test('onClick event should render animal emoji', () => {
  render(<App />);

  const bearButtonEl = screen.getByTitle('bear-button');
  const paradeEl = screen.getByTitle('parade');

  fireEvent.click(bearButtonEl);

  const emojiElement = screen.getAllByText('🐻');
  expect(emojiElement.length).toBe(2);
});

test('onClick event should create new child element', () => {
  render(<App />);

  const bearButtonEl = screen.getByTitle('bear-button');
  const paradeEl = screen.getByTitle('parade');

  fireEvent.click(bearButtonEl);

  expect(paradeEl.children.length).toBe(4);
});
