type Props = {
  children: any;
  dataTestId?: string;
  className?: string;
  onClick: any;
};

const Button = ({ children, className, dataTestId, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      data-testid={`btn-${dataTestId}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  dataTestId: "",
  className: "",
  onClick: () => {},
};

export default Button;
