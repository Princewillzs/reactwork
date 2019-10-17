import React from 'react';

function RespTab() {
	return (
		<div>
			<ul className="resp-tabs-list">
				<li className="resp-tab-item" aria-controls="tab_item-0" role="tab">
					<span>Sign in</span>
				</li>
				<li className="resp-tab-item" aria-controls="tab_item-1" role="tab">
					<label>/</label>
					<span>Sign up</span>
				</li>
			</ul>
		</div>
	);
}

export default RespTab;
