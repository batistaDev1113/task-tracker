import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function About() {
	const linkStyle = {
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center'
	};
	return (
		<div>
			<h4>Version 1.0.0</h4>
			<Link to='/' style={linkStyle}>
				<FaArrowLeft style={{ marginRight: '10px' }} /> Go Back
			</Link>
		</div>
	);
}
