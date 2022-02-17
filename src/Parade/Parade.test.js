import { render, screen, fireEvent } from '@testing-library/react';
import Parade from './Parade';

test('onClick event call handleParade function', () => {
  const mockHandleFn = jest.fn();
  render(<Parade parade={[]} handleParade={mockHandleFn} />);

  const bearButtonEl = screen.getByTitle('bear-button');

  fireEvent.click(bearButtonEl);

  expect(mockHandleFn).toBeCalledWith('bear');
});
