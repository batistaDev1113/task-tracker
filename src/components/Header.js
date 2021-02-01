import PropTypes from 'prop-types';
import Button from './Button';
import { VscTasklist } from 'react-icons/vsc';

const Header = ({ title, toggleDisplay, showAdd }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<VscTasklist style={{ height: '35px', width: '35px' }} className='task-list' />
			<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={toggleDisplay} />
		</header>
	);
};

Header.propTypes = {
	title : PropTypes.string.isRequired
};

export default Header;
