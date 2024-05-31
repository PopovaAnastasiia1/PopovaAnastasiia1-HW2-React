export default function ModalFooter({
  firstText,
  firstClick,
  className,
}) {
  return (
  
      <button onClick={firstClick} className={className}>
        {firstText}
      </button>
  );
}
