import 'react-native';
import React from 'react';
import {
  fireEvent,
  render,
  cleanup,
  waitFor,
} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import HomeScreen from '../screens/HomeScreen';
import { MyUserContext } from '../context/UserContext';

describe('HomeScreen', () => {
  afterAll(() => {
    cleanup();
  });

  const state = {
    user: {
      userName: 'user default',
      age: 18,
      setUserState: jest.fn(),
    },
  };

  it('renders correctly', () => {
    renderer.create(
      <MyUserContext.Provider value={state}>
        <HomeScreen />
      </MyUserContext.Provider>
    );
  });

  it('renders text state from input', async () => {
    const { getByTestId } = render(
      <MyUserContext.Provider value={state}>
        <HomeScreen />
      </MyUserContext.Provider>
    );
    const input = getByTestId('t-input');
    const testText = 'test this string';
    fireEvent.changeText(input, testText);
    expect(getByTestId('t-username-state').props.children).toBe(
      'Local state: ' + testText
    );
  });

  it('renders text state from context', async () => {
    const { getByTestId } = render(
      <MyUserContext.Provider value={state}>
        <HomeScreen />
      </MyUserContext.Provider>
    );
    const input = getByTestId('t-input');
    const testText = 'test this string';
    fireEvent.changeText(input, testText);
    expect(getByTestId('t-username-context').props.children).toBe(
      'Context state: ' + testText
    );
  });
});
