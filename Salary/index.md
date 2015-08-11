---
layout: post
title: Indian research groups in the field of machine learning and data science
modified: 2014-07-31T13:23:02.362000-04:00
excerpt: "University groups working on machine learning, stats and data"
comments: true
tags: Salary
---

{% include _toc.html %}


  {% for post in site.posts %}
  {% if post.tags contains page.tags %}
        
  <article>
  <div class="headline-wrap">
  {% if post.link %}
  <h1><a href="{{ post.link }}">{{ post.title }}</a></h1>
  {% else %}
  <h1><a href="{{ site.url }}{{ post.url }}" rel="bookmark" title="{{ post.title }}">{{ post.title }}</a></h1>
  {% endif %}
  </div><!--/ .headline-wrap -->
  <div class="article-wrap">
  {{ post.content }}
  <hr />
  </div><!-- /.article-wrap -->
  </article>
  {% endif %}
  {% endfor %}
  

  

