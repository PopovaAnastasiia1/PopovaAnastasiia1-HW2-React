import "./Modal.scss";
import ModalClose from "./ModalClose";
import ModalImage from "./ModalImage";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalWrapper from "./ModalWrapper";

export default function FirstModal({
  header,
  close,
  image,
  content,
  firstText,
  secondaryText,
  firstClick,
  secondaryClick,
}) {
  return (
    <>
      <ModalWrapper close={close}/>
      <div className="firstModal">
        <ModalClose close={close} />
        <ModalImage image={image} />
        <ModalHeader header={header} />
        <ModalBody content={content} />
        <div className="btnBox">
        <ModalFooter
          firstText={firstText}
          firstClick={firstClick}
          className="firstBtn robotoMedium"
        />
        <ModalFooter
        firstText={secondaryText}
        firstClick={secondaryClick}
        className="secondBtn robotoMedium"
      />
      </div>
      </div>
    </>
  );
}
