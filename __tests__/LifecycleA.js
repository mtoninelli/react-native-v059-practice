import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LifecycleA from '../components/LifecycleA';

it('increments count after pressing button', async () => {
  const { getByText, getByTestId } = render(<LifecycleA />);
  const addCounterButton = getByText('add');
  const counter = getByTestId('counterText');

  fireEvent.press(addCounterButton);
  expect(counter).toBe('count: 1');

  // const { getByTestId, getByText, queryByTestId, toJSON } = render(<Example />);
  // const famousProgrammerInHistory = 'Ada Lovelace';

  // const input = getByTestId('input');
  // fireEvent.changeText(input, famousProgrammerInHistory);

  // const button = getByText('Print Username');
  // fireEvent.press(button);

  // await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy());

  // expect(getByTestId('printed-username').props.children).toBe(
  //   famousProgrammerInHistory
  // );
  // expect(toJSON()).toMatchSnapshot();
});
