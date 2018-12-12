import * as React from "react";

interface HocProps {
  foo?: string;
}

// HOC
function withHoc<P extends HocProps>(Component: React.ComponentType<P>) {
  const hocProps = { foo: 'bar' } as HocProps;
  return (props: any) => <Component {...hocProps} {...props} />
};

interface CardSFC<T> extends React.SFC<T> {
  Title: React.SFC;
}

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  Title: React.SFC;
}

// Parent Component
const Card: CardSFC<CardProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  );
};

// Child Component
const Title: React.SFC<React.HTMLProps<HTMLHeadingElement>> = ({ children, ...props }) => {
  return (
    <h1 className="card-title" {...props}>
      {children}
    </h1>
  );
};

Card.Title = Title;

export default withHoc<Card>(Card);
