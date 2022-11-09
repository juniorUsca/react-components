import './button.css'

function Button({ children = 'Click on me', disabled = false, onClick }) {
  return (
    <button
      disabled={disabled}
      className={`bg-red-400 p-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;