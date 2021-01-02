import 'react-native';
import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import LifecycleA from '../components/LifecycleA';

// import { toBeVisible } from "@testing-library/jest-dom/matchers";
// expect.extend({ toBeVisible });

describe('LifecycleA', () => {
  afterAll(() => {
    cleanup();
  });

  it('renders correctly', () => {
    renderer.create(<LifecycleA />);
  });

  it('increments count after pressing button', async () => {
    const { getByText, getByTestId } = render(<LifecycleA />);
    const addCounterButton = getByText('add');
    const counter = getByTestId('counterText');

    fireEvent.press(addCounterButton);
    expect(counter.props.children).toEqual(1);

    // expect(getByTestId('not-empty')).not.toBeEmpty();
    // expect(getByTestId('empty')).toBeEmpty();
    // expect(getByText('LifecycleA')).toThrowErro();

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
});
