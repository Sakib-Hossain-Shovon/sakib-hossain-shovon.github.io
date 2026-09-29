---
layout: page
title: Gallery
permalink: /gallery/
description: Research moments, visual work, and media highlights.
nav: true
nav_order: 5
---

<div class="gallery-page">
  <div class="gallery-intro">
    <div class="eyebrow">Visual research journal</div>
    <h2>Research moments and visual ideas</h2>
    <p>Research moments, visual ideas, and media highlights. New images and video links can be added in <code>_data/gallery.yml</code>.</p>
  </div>

  <div class="gallery-grid">
    {% for item in site.data.gallery.items %}
      <article class="gallery-card">
        {% if item.youtube_id %}
          <a class="gallery-media media-preview" href="https://www.youtube.com/watch?v={{ item.youtube_id }}" target="_blank" rel="noopener">
            <img src="https://img.youtube.com/vi/{{ item.youtube_id }}/hqdefault.jpg" alt="Video preview: {{ item.title }}">
            <span class="play-badge"><i class="fa-solid fa-play"></i>Watch video</span>
          </a>
        {% elsif item.video_url %}
          <a class="gallery-media media-preview" href="{{ item.video_url }}" target="_blank" rel="noopener">
            {% include figure.liquid path=item.image class="mb-0" sizes="600px" alt=item.alt %}
            <span class="play-badge"><i class="fa-solid fa-play"></i>Watch video</span>
          </a>
        {% else %}
          <div class="gallery-media">{% include figure.liquid path=item.image class="mb-0" sizes="600px" alt=item.alt %}</div>
        {% endif %}
        <div class="gallery-card-body">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
          {% if item.more_url %}<a href="{{ item.more_url }}" target="_blank" rel="noopener">More <i class="fa-solid fa-arrow-up-right-from-square"></i></a>{% endif %}
        </div>
      </article>
    {% endfor %}
  </div>

  <div class="gallery-more">
    <i class="fa-regular fa-images"></i>
    <div>
      <h2>More photos</h2>
      <p>More visual updates will be shared here soon.</p>
    </div>
    {% if site.data.gallery.external_gallery_url != blank %}
      <a class="hero-button primary" href="{{ site.data.gallery.external_gallery_url }}" target="_blank" rel="noopener">Open photo gallery <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    {% endif %}
  </div>
</div>
