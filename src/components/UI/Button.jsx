import classNames from "classnames";

function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  );
}

export default Button;