const Button = ({ label, className }) => {
  return (
    <button className={`py-2 px-4 rounded-full  ${className}`}>{label}</button>
  );
};

export default Button;
