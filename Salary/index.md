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

<div id="index">
    {% for post in site.posts %}
    {% if post.tags contains page.tags %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
      {% else %}
        {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
        {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
        {% if year != nyear %}
          <h3>{{ post.date | date: '%Y' }}</h3>
        {% endif %}
      {% endunless %}
      <article>
        {% if post.link %}
          <h2 class="link-post"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a> <a href="{{ post.link }}" target="_blank" title="{{ post.title }}"><i class="fa fa-link"></i></a></h2>
        {% else %}
          <h2><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h2>
          <p>{{ post.exerpt | strip_html | truncate: 700 }}</p>
        {% endif %}
      </article>
     {% endif %}  
    {% endfor %}
  </div><!-- /#index -->