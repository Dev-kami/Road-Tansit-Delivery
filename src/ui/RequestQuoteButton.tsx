interface ButtonType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
}

const RequestQuoteButton = ({ children, className }: ButtonType) => {
  return <button className={className}>{children}</button>;
};

export default RequestQuoteButton;
