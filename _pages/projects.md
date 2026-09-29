---
layout: page
title: Projects
permalink: /projects/
description: Demo research projects in computer vision, generative modeling, and 3D perception.
nav: true
nav_order: 3
display_categories: [research]
horizontal: false
---

<div class="research-home projects">
  <div class="row">
    {% assign research_projects = site.projects | where: "category", "research" | sort: "importance" %}
    {% for project in research_projects %}
      <div class="col-md-4 mb-4">
        <article class="research-card">
          {% if project.youtube_id %}
            <a class="media-preview" href="{{ project.url | relative_url }}"><img src="https://img.youtube.com/vi/{{ project.youtube_id }}/hqdefault.jpg" alt="Demo YouTube preview for {{ project.title }}"><span class="play-badge"><i class="fa-solid fa-play"></i>Video demo</span></a>
          {% else %}
            <a href="{{ project.url | relative_url }}">{% include figure.liquid path=project.img class="mb-0" sizes="360px" alt=project.title %}</a>
          {% endif %}
          <div class="research-card-body">
            <h2>{{ project.title }}</h2><p>{{ project.description }}</p>
            <div class="project-links">
              <a href="{{ project.paper }}">Paper</a><a href="{{ project.code }}">Code</a><a href="{{ project.url | relative_url }}">Project</a><a href="{{ project.video }}">Video</a>
            </div>
          </div>
        </article>
      </div>
    {% endfor %}
  </div>
</div>
