import './CustomButton.scss'

const CustomButton = ({ children, onClickButton }) => {
  return (
    <div className="custom-button-container" onClick={onClickButton}>
      {children}
    </div>
  )
}

export default CustomButton
