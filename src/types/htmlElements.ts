export type TTargetElement = {
  target: HTMLInputElement;
};

export type TKeyboardElement = React.KeyboardEvent<HTMLInputElement> & TTargetElement;
