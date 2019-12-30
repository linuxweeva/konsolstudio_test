import React from 'react';

interface BtnProps {
  onClick: any,
  className: string,
  iconClass: string,
  title: string
}

const IconButton: React.FC<BtnProps> = ( props ) => {
	return (
		<button onClick={ props.onClick } type="button" className={ props.className }>
			<i className={ props.iconClass + " fa fas mr-3" }></i>
			{ props.title }
		</button>
	);
}



export default IconButton; 