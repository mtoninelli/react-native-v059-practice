import 'react-native';
import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import HomeScreen from '../screens/HomeScreen';
import { MyUserContext } from '../context/UserContext';

describe('HomeScreen', () => {
  afterAll(() => {
    cleanup();
  });

  const state = {
    user: {
      userName: 'miki',
      age: 20,
      setUserState: () => {},
    },
  };

  it('renders correctly', () => {
    renderer.create(<HomeScreen />);
  });

  it('renders inputs value', async () => {
    const { getByText, getByTestId } = render(
      <MyUserContext.Provider value={state}>
        <HomeScreen />
      </MyUserContext.Provider>
    );

    const input = getByTestId('t-input');
    const testText = 'test this string';
    fireEvent.changeText(input, testText);
    expect(getByTestId('t-username').props.childern).toBe(
      'Local state' + testText
    );
  });
});
