import React from 'react';

type IButtonProps = React.HTMLProps<HTMLDivElement>;

const ScheduleDropdownWrapper: React.FC<IButtonProps> = ({
  children,
  ...rest
}) => (
  <div
    className="flex flex-row gap-2 items-center cursor-pointer relative"
    {...rest}
  >
    {children}
  </div>
);

export default ScheduleDropdownWrapper;
