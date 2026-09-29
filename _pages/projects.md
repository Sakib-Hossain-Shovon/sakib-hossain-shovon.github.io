---
layout: page
title: Projects
permalink: /projects/
description: Selected research and applied AI projects.
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
            <a class="media-preview" href="{{ project.url | relative_url }}"><img src="https://img.youtube.com/vi/{{ project.youtube_id }}/hqdefault.jpg" alt="YouTube preview for {{ project.title }}"><span class="play-badge"><i class="fa-solid fa-play"></i>Video</span></a>
          {% else %}
            <a href="{{ project.url | relative_url }}">{% include figure.liquid path=project.img class="mb-0" sizes="360px" alt=project.title %}</a>
          {% endif %}
          <div class="research-card-body">
            <h2>{{ project.title }}</h2><p>{{ project.description }}</p>
            <div class="project-links">
              {% if project.paper %}<a href="{{ project.paper }}">Paper</a>{% endif %}
              {% if project.code %}<a href="{{ project.code }}">Code</a>{% endif %}
              <a href="{{ project.url | relative_url }}">Project</a>
              {% if project.video %}<a href="{{ project.video }}">Video</a>{% endif %}
            </div>
          </div>
        </article>
      </div>
    {% endfor %}
  </div>
</div>
