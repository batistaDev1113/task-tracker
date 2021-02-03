import PropTypes from 'prop-types';
import Button from './Button';
import { VscTasklist } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

const Header = ({ title, toggleDisplay, showAdd }) => {
	const location = useLocation();
	return (
		<header className='header'>
			<h1>{title}</h1>
			<VscTasklist style={{ height: '35px', width: '35px' }} className='task-list' />
			{location.pathname === '/' && (
				<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={toggleDisplay} />
			)}
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

export default Header;
