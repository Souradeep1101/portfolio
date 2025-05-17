---
title: "Projects"
layout: collection
permalink: /projects/
collection: projects
entries_layout: grid
classes: wide
---

<ul class="collection-list">
  {% for item in site.projects %}
    <li>
      <a href="{{ item.url }}">{{ item.title }}</a>
      <small>{{ item.date | date: "%b %Y" }}</small>
    </li>
  {% endfor %}
</ul>