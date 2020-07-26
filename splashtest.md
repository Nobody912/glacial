---
layout: splash
permalink: /splashtest
title: Glacial
description: Glacial, a simple, cool Jekyll theme.
subtitle: Refreshing.
hero-text-color: light # dark or light
hero-url: https://raw.githubusercontent.com/Nobody912/me/master/assets/media/splash.webp
hero-blur: 10
thumbnail-url: https://raw.githubusercontent.com/Nobody912/me/master/assets/media/glacial_thumb.webp

screenshot1:
  - url: https://github.com/Nobody912/me/raw/master/assets/media/glacial_ss.webp
    caption: Current site appearance.
    resize: false

screenshot2:
  - url: https://github.com/Nobody912/me/raw/master/assets/media/glacial_old_0_ss.webp
    caption: The original look for my site.
    resize: true

screenshot3:
  - url: https://github.com/Nobody912/me/raw/master/assets/media/glacial_old_1_ss.webp
    caption: The second revision appearance for my site.
    resize: true

font:
  - url: https://github.com/Nobody912/me/raw/master/assets/media/font_sample.webp
    caption: Samples for the fonts used on my site.
    resize: false
---

{% include gallery id="screenshot1" %}

# ABOUT
Glacial is an extremely simple paper/card Jekyll theme styled with the Nord color scheme. It is perfect for basic blogs, portfolios, and project pages.

# FEATURES
* Bundled as a gem for easy installation
* 100% GitHub Pages compatible
* Comes in light and dark variations
* Responsive navigation bar with customizable bar items
* Support for galleries and inline images
* highlight.js code formatting and highlighting 
* FontAwesome and Weather Icons preinstalled

# DESIGN OVERVIEW

## GENERAL APPEARANCE
The **Glacial** theme is built to look minimalistic and straightforward, following my preferred style/design choices. The majority of the layout was improvised and evolved several times before arriving at its current design. Initially, I went for a completely flat (text-on-solid-color) look, which, while capturing the simplicity I had in mind, looked awful, completely uninteresting, and somewhat tacky.

{% include gallery id="screenshot2" %}

After more revisions, I decided to add a navigation bar with brand text at the top with standard unordered list navigation links. I kept the blue header accents in an attempt to add more color depth compared to the site UI and paragraph text.

{% include gallery id="screenshot3" %}

In my final revision, I caved in for a nice Bootstrap navbar, implemented a high contrast paper/card-style layout, and refined the colors to be more focused. Additionally, I added features such as `highlight.js` code formatting, support for tables, image handling, advanced formatting, and blog/post templates.

## TYPOGRAPHY
While I am by no means a connoisseur of typography, there are several fonts I _love_, three of them being _Futura_, _Dank Mono_, and _Roboto Slab_. I am not entirely sure whether this font combination is tasteful or even tolerable, but regardless I like it.

_Futura_  is a geometric sans-serif typeface designed by Paul Renner and released in 1927. Visually, it is modern yet old: while it is symbolic of a past era's design and typography, it still matches and pairs well with most modern typefaces. 

_Dank Mono_ is a monospace typeface designed by Phil Plückthun. Unlike other monospace fonts, Dank Mono is meant to be an aesthetically pleasing typeface focused on development environments. Two highlights of Dank Mono include the array of ligatures for common programming multi-character combinations and the beautiful cursive italic style.

_Roboto Slab_ is one of the most popular modern slab fonts. It not only preserves the geometric properties of its parent _Roboto_, but it is cleaner and simpler compared to many of the other available slab fonts. 

{% include gallery id="font" %}

## COLOR
I have developed a liking for pastel colors as they are rather soothing pleasant to the eyes. The [Nord](https://nordtheme.com) color palette captures my tastes perfectly. The Nord color palette is light and unobtrusive, featuring subtle pastel colors all tinted a soft arctic blue. I have done my best to implement the color system, only breaking away from it for accessibility and viewability adjustments.

# CREDITS/RESOURCES
* [FontAwesome](https://fontawesome.com/)
* [Weather Icons](https://erikflowers.github.io/weather-icons/)
* [Bootstrap](https://getbootstrap.com/)
* [highlight.js](https://highlightjs.org/)
* [Lightbox 2](https://lokeshdhakar.com/projects/lightbox2/)
* [Nord Theme](https://nordtheme.com/)
* [Unsplash](https://unsplash.com/)
