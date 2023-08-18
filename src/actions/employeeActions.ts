import { Employee } from '../utils/types';
import { createAction } from '@reduxjs/toolkit';

type EmployeeActionType = { employee: Employee };
export const addEmployee = createAction<EmployeeActionType>('EMPLOYEE:CREATE');
export const editEmployee = createAction<EmployeeActionType>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<{ id: number }>('EMPLOYEE:DELETE');
