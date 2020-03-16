import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './index.jsx';

beforeEach(() => {
  // when the error's thrown a bunch of console.errors are called even though
  // the error boundary handles the error. This makes the test output noisy,
  // so we'll mock out console.error
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore();
  cleanup();
})


const ErrorFunc = () => throw new Error('Error to test error boundary');

describe('Error boundary Component', () => {

  it('renders this component on error', () => {

    const { getByText } = render(<ErrorBoundary><ErrorFunc /></ErrorBoundary>);

    expect(getByText("Something went wrong.")).toBeInTheDocument();
  });

});