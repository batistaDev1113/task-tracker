const Button = ({ color, text, onClick }) => {
	return (
		<div>
			<button onClick={onClick} style={{ backgroundColor: color }} type='button' className='btn'>
				{text}
			</button>
		</div>
	);
};
export default Button;
