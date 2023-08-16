import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { FC } from 'react';
import Button from '../ButtonField/Button';

type InputTypes = {
  title: string;
  content: string;
  openStatus: boolean;
  cancelClickHandler?: () => void;
  confirmClickHandler?: () => void;
};

const ConfirmDialogBox: FC<InputTypes> = (props) => {
  return (
    <Dialog open={props.openStatus}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button value='Confirm' type='filled' onClickHandler={props.confirmClickHandler}></Button>
        <Button value='Cancel' type='empty' onClickHandler={props.cancelClickHandler}></Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialogBox;
