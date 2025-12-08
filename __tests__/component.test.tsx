import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: 'mockedData',
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state while fetching data', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('displays fetched data correctly', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    // Wait for the initial loading state to disappear
    await waitFor(() => screen.getByText(/mockedData/i));

    // Mock a new response with different data and re-render
    (fetchData as jest.Mock).mockResolvedValueOnce({
      data: 'newMockedData',
    });
    rerender(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/newMockedData/i)).toBeInTheDocument());
  });

  test('handles error state when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));
    render(<CoreFunctionalityComponent />);

    // Wait for the initial loading state
    await waitFor(() => screen.getByText(/loading/i));

    // Check if error message is displayed after a timeout
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('user interaction - button click triggers action', async () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    // Wait for the action to complete
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('accessibility - screen reader can read all elements', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    
    const heading = screen.getByRole('heading', { level: 1, name: /welcome to the core functionality/i });
    expect(heading).toBeVisible();
    expect(heading).toHaveAccessibleName(/welcome to the core functionality/i);
  });

  test('edge case - empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ data: '' });
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/no data available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: 'mockedData',
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders loading state while fetching data', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('displays fetched data correctly', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    // Wait for the initial loading state to disappear
    await waitFor(() => screen.getByText(/mockedData/i));

    // Mock a new response with different data and re-render
    (fetchData as jest.Mock).mockResolvedValueOnce({
      data: 'newMockedData',
    });
    rerender(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/newMockedData/i)).toBeInTheDocument());
  });

  test('handles error state when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch data'));
    render(<CoreFunctionalityComponent />);

    // Wait for the initial loading state
    await waitFor(() => screen.getByText(/loading/i));

    // Check if error message is displayed after a timeout
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  test('user interaction - button click triggers action', async () => {
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    
    // Wait for the action to complete
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('accessibility - screen reader can read all elements', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    
    const heading = screen.getByRole('heading', { level: 1, name: /welcome to the core functionality/i });
    expect(heading).toBeVisible();
    expect(heading).toHaveAccessibleName(/welcome to the core functionality/i);
  });

  test('edge case - empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ data: '' });
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/no data available/i)).toBeInTheDocument());
  });
});