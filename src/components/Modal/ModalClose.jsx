export default function ModalClose({close}) {
    return(
        <div className="closeBtnBox">
        <button  onClick = {close} className="closeBtn">⨉</button>
      </div>
    )
}