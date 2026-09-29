---
layout: page
title: Gallery · More Images
permalink: /gallery/page-2/
description: Additional research and professional highlights.
nav: false
---

<div class="gallery-page">
  <div class="gallery-intro">
    <div class="eyebrow">Visual research journal</div>
    <h2>More images</h2>
    <p>More research moments and visual highlights will be added here.</p>
  </div>

  <div class="gallery-grid">
    {% for item in site.data.gallery.more_items %}
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
    {% else %}
      <article class="gallery-empty-state">
        <i class="fa-regular fa-images"></i>
        <h2>More visual updates coming soon</h2>
        <p>This page is ready for additional images, captions, and video links.</p>
      </article>
    {% endfor %}
  </div>

<a class="gallery-back-link" href="{{ '/gallery/' | relative_url }}"><i class="fa-solid fa-arrow-left"></i> Back to Gallery</a>

</div>
