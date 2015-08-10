---
layout: page
title: Indian research groups in the field of machine learning and data science
modified: 2014-07-31T13:23:02.362000-04:00
excerpt: "University groups working on machine learning, stats and data"
comments: true
tags: Salary
---

{% include _toc.html %}

<div class="posts">
  {% for post in site.posts %}
  {% if post.tags contains page.tags %}
        
        <div class="post">
          <h1 class="post-title">
            <a name="{{ post.title }}"></a>
            <a href="{{ site.url }}{{ post.url }}">
              {{ post.title }}
            </a>
          </h1>

          <span class="post-date">{{ post.date | date_to_string }}</span>

          {{ post.content }}
        </div>
  
  {% endif %}
  {% endfor %}
</div>

