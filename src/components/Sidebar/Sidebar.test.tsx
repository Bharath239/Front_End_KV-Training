import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

describe('Test for sidebar', () => {
  test('sidebar displayed', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const sidebar = screen.getByTestId('sidebar-test');
    const selectedbar = sidebar.querySelector("[data-testid='selectedbar-test']");

    fireEvent.click(selectedbar);
    expect(sidebar).toContainHTML;
  });
});
