import "./button.styles.css";

type Props = {};

function Button({}: Props) {
  return (
    <button className="btn">
      <i className="fa fa-plus"></i> New User
    </button>
  );
}

export default Button;
