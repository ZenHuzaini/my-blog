import React from 'react'

const Search = () => {
  return (
    <div class="sidebar-widget search-box">
					<form method="post" action="contact.html">
						<div class="form-group">
							<input type="search" name="search-field" value="" placeholder="Search..." required />
							<button type="submit">
								<span class="icon fa fa-search"></span>
							</button>
						</div>
					</form>
				</div>
  )
}

export default Search