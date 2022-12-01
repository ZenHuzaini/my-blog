/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = () => {
	return (
		<ul class="styled-pagination">
			<li>
				<a href="#">1</a>
			</li>
			<li>
				<a href="#" class="active">
					2
				</a>
			</li>
			<li>
				<a href="#">3</a>
			</li>
			<li>
				<a href="#">
					<span class="icon fa fa-angle-right"></span>
				</a>
			</li>
		</ul>
	);
};

export default Pagination;
