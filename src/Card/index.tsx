import * as React from "react";

interface HocProps {
  foo?: string;
}

export interface BaseHocModule {
  Container: React.FunctionComponent;
}

export function injectProps(Container: React.FunctionComponent, hocProps: HocProps) {
  return (props: any) => <Container {...hocProps} {...props} />
}

export function withHoc<T extends BaseHocModule>(Module: T): T {
  const hocProps: HocProps = { foo: 'bar' };
  const {Container, ...rest} = Module;

  return {
    Container: injectProps(Container, hocProps),
    ...rest
  } as T
};

export type CardContainerInterface = React.FunctionComponent<React.HTMLProps<HTMLDivElement>>;
export const CardContainerComponent: CardContainerInterface = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
};

export type CardTitleProps = React.HTMLProps<HTMLHeadingElement>
export type CardTitleInterface = React.FunctionComponent<React.HTMLProps<HTMLHeadingElement>>;
export const CardTitleComponent: CardTitleInterface = ({ children, ...props }) => {
  return (
    <h1 className="card-title" {...props}>
      {children}
    </h1>
  );
};

export interface CardModuleInterface {
  Container: CardContainerInterface;
  Title: CardTitleInterface;
};
export const CardModule: CardModuleInterface = {
  Container: CardContainerComponent,
  Title: CardTitleComponent,
}

export default withHoc(CardModule);