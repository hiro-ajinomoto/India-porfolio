import React, { FC } from 'react'
import { Category } from '../types'

const NavItem: FC<{ value: Category | 'all', handlerFilterCategory: Function, active: string }> = ({ value, handlerFilterCategory, active }) => {
	let className = "capitalize cursor-pointer hover:text-green "

	if (active === value) {
		className += "text-green"
	}

	return <li className={className} onClick={() => { handlerFilterCategory(value) }}>
		{value}
	</li>
}

const ProjectNavBar: FC<{ handlerFilterCategory: Function, active: string }> = (props) => {
	return (
		<div className='flex px-3 py-2 space-x-3 overflow-x-auto capitalize list-none dark:text-white'>
			<NavItem value="all"  {...props} />
			<NavItem value="react" {...props} />
			<NavItem value="node" {...props} />
		</div>
	)
}

export default ProjectNavBar