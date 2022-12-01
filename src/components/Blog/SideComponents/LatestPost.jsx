import React from 'react'

const LatestPost = () => {
  return (
    <div class="sidebar-widget popular-posts">
					<h4 class="sidebar-title">Latest Posts</h4>
					<div class="widget-content">
						<article class="post">
							<div class="post-inner">
								<figure class="post-thumb">
									<a href="blog-single.html">
										<img src="images/resource/post-thumb-1.jpg" alt="" />
									</a>
								</figure>
								<div class="post-info">January 12, 2020</div>
								<div class="text">
									<a href="blog-single.html">Why Lead Generation Is Key For Business.</a>
								</div>
							</div>
						</article>

						<article class="post">
							<div class="post-inner">
								<figure class="post-thumb">
									<a href="blog-single.html">
										<img src="images/resource/post-thumb-2.jpg" alt="" />
									</a>
								</figure>
								<div class="post-info">August 06, 2020</div>
								<div class="text">
									<a href="blog-single.html">How To Increase In-App Purchases In 2020.</a>
								</div>
							</div>
						</article>

						<article class="post">
							<div class="post-inner">
								<figure class="post-thumb">
									<a href="blog-single.html">
										<img src="images/resource/post-thumb-3.jpg" alt="" />
									</a>
								</figure>
								<div class="post-info">March 10, 2020</div>
								<div class="text">
									<a href="blog-single.html">Voxburner Launches Youth Trends Report.</a>
								</div>
							</div>
						</article>
					</div>
				</div>
  )
}

export default LatestPost