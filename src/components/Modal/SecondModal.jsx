import "./Modal.scss";
import ModalClose from "./ModalClose";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalWrapper from "./ModalWrapper";

export default function SecondModal({
  header,
  close,
  content,
  firstText,
  firstClick,
}) {
  return (
    <>
      <ModalWrapper close={close} />
      <div className="secondModal">
        <ModalClose close={close} />
        <ModalHeader header={header} />
        <ModalBody content={content} />
        <div className="btnBox">
          <ModalFooter
            firstText={firstText}
            firstClick={firstClick}
            className="firstBtn robotoMedium"
          />
        </div>
      </div>
    </>
  );
}
