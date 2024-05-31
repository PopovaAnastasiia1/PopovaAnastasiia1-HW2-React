import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ openModal,nameBtn }) {
  return (
    <>
      <button onClick={openModal} className="btn" type="button">{nameBtn}</button>
    </>
  );
}
