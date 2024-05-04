import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">Social Links</h2>
    </header>

    <h6 class="h2 article-titlee">
      My All Socials Links Are Displayed Below.
    </h6>

  <section class="blog-posts">

  <ul class="blog-posts-list">

    <li class="blog-post-item">
      <Link to={''}>

        <figure class="blog-banner-box">
      <img src="leetcode.png" loading="lazy"/>
        </figure>

        <div class="blog-content">
          <h3 class="h3 blog-item-title">Leetcode</h3>
        </div>

      </Link>
    </li>

    <li class="blog-post-item">
      <Link to={''}>

        <figure class="blog-banner-box">
      <img src="github.svg" loading="lazy"/>
        </figure>

        <div class="blog-content">
          <h3 class="h3 blog-item-title">Github</h3>
        </div>

      </Link>
    </li>

    <li class="blog-post-item">
      <Link to={''}>

        <figure class="blog-banner-box">
      <img src="Linkedin.svg" loading="lazy" style={{background:"white"}}/>
        </figure>

        <div class="blog-content">
          <h3 class="h3 blog-item-title">Linkedin</h3>
        </div>

      </Link>
    </li>

    <li class="blog-post-item">
      <Link to={''}>

        <figure class="blog-banner-box">
      <img src="hackerrank.svg" loading="lazy" style={{color:"white"}}/>
        </figure>

        <div class="blog-content">
          <h3 class="h3 blog-item-title">HackerRank</h3>
        </div>

      </Link>
    </li>

  </ul>
  </section>
  </article>
  )
}
