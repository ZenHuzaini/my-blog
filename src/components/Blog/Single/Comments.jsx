/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Comments = () => {
  return (
    <div class="comments-area">
    <div class="group-title">
        <h3>Comments 02</h3>
    </div>
    <div class="comment-box">
        <div class="comment">
            <div class="author-thumb"><img src="images/resource/thumb-1.jpg" alt=""/></div>
            <div class="comment-info">
                <div class="name">Kavin smith</div> -
                <div class="date">CEO CHI ART PRO</div>
            </div>
            <div class="text">Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehiculaa,Duis lacus </div>
            <a href="#" class="reply-btn theme-btn btn-style-one"><span class="btn-title">Reply</span></a>
        </div>
    </div>

    <div class="comment-box">
        <div class="comment">
            <div class="author-thumb"><img src="images/resource/thumb-2.jpg" alt=""/></div>
            <div class="comment-info">
                <div class="name">Lean Guimares</div> -
                <div class="date">CEO CHI ART PRO</div>
            </div>
            <div class="text">Codswallop down the pub Queen's English tomfoolery the BBC owt to do with me do one Elizabeth I don't want no agro show off show?</div>
            <a href="#" class="reply-btn theme-btn btn-style-one"><span class="btn-title">Reply</span></a>
        </div>
    </div>
</div>
  )
}

export default Comments