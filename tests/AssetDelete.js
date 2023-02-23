import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AssetDelete from './AssetDelete';

test('calls onDelete with the correct asset ID when delete button is clicked', () => {
  const mockOnDelete = jest.fn();
  const { getByText } = render(<AssetDelete assetId={123} onDelete={mockOnDelete} />);
  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);
  expect(mockOnDelete).toHaveBeenCalledWith(123);
});
