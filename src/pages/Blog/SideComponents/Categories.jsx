import React from 'react'

export const Categories = () => {
  return (
    <div class="sidebar-widget categories">
    <h4 class="sidebar-title">Categories</h4>
    <div class="widget-content">
        {/* <!-- Blog Category --> */}
        <ul class="blog-categories">
            <li>
                <a href="blog-single.html">
                    Insight <span>03</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    Web Design <span>07</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    Travel <span>06</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    Technology <span>02</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    Buisiness <span>06</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    UI/UX <span>09</span>
                </a>
            </li>
            <li>
                <a href="blog-single.html">
                    Eventa <span>12</span>
                </a>
            </li>
        </ul>
    </div>
</div>
  )
}
