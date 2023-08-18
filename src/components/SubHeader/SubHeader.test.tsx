import { fireEvent, render, screen } from '@testing-library/react';
import SubHeader, { SubHeaderInputTypes } from './SubHeader';
import { BrowserRouter } from 'react-router-dom';

describe('Test for subheader', () => {
  test('create', () => {
    const SubHeaderProps: SubHeaderInputTypes = {
      subHeading: 'create',
      action: 'add'
    };

    render(
      <BrowserRouter>
        <SubHeader {...SubHeaderProps} />
      </BrowserRouter>
    );
    localStorage.loginRole = 'HR';
    const subheader = screen.getByTestId('subheader-test');
    const actionbox = subheader.querySelector("[data-testid='actionbox-test']");

    fireEvent.click(actionbox);
    expect(subheader).toContainHTML;
  });
  test('edit', () => {
    const SubHeaderProps: SubHeaderInputTypes = {
      subHeading: 'edit',
      action: 'edit',
      employeeId: '1'
    };

    render(
      <BrowserRouter>
        <SubHeader {...SubHeaderProps} />
      </BrowserRouter>
    );
    const element = screen.getByTestId('subheader-test');

    expect(element).toContainHTML;
  });
});
