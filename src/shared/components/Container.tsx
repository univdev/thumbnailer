import { FC, ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-screen-lg mx-auto px-2">{children}</div>;
};
