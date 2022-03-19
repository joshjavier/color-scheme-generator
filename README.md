# Color Scheme Generator

A solo project from the [Scrimba Frontend Developer Career Path](https://scrimba.com/learn/frontend)

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Requirements

- [x] Choose "seed color" with an \<input type="color" />
- [x] Choose color scheme mode in a \<select> box
- [x] Clicking button makes request to [The Color API](https://www.thecolorapi.com/) to get a color scheme
- [x] Display the scheme colors and hex values on the page
- [x] Stretch goal: click hex values to copy to clipboard

### Screenshots

![Color Scheme Generator (desktop view)](./images/color-scheme-generator-desktop.png)

<img src="./images/color-scheme-generator-mobile.png" alt="Color Scheme Generator (mobile view)" style="max-width: 320px; margin: 0 auto; display: block;">

<img src="./images/color-scheme-generator-preview.gif" alt="Color Scheme Generator (animated preview)" style="margin: 0 auto; display: block;">

### Links

- Live Site URL: [https://joshjavier.github.io/color-scheme-generator/](https://joshjavier.github.io/color-scheme-generator/)
- Scrim URL: [https://scrimba.com/scrim/co0bb491ca32e79bd45fdf4cb](https://scrimba.com/scrim/co0bb491ca32e79bd45fdf4cb)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- Mobile-first workflow
- Progressive enhancement
- Vanilla JS (fetch, async/await)

### What I learned

I really enjoyed the process of solving roadblocks I encountered while working on this project.

- In simple projects like this, I like setting the body to `min-height: 100vh` to prevent having an awkward white space at the bottom. However, I learned that using `height: 100%` on an element has no effect if the parent only has `min-height` but no `height`. It took me a bit of time and playing around with the CSS to grok this concept, and I'm glad I understand it a little better now.

- In terms of accessibility, I wanted to make the app more accessible to keyboard users and allow them to tab between color strips. At first my color names were `p` tags, but I converted them into `button` tags so they have native tab-order *and* are semantically interactive (i.e., users can interact with them through mouse clicks, which will copy the color hex code to the clipboard).

- On the JavaScript side, I initially implemented the "copy to clipboard" function with the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard), but learned that it sometimes fails when the browser doesn't have access to the clipboard. So as a fallback, I implemented the old-school way of copying to clipboard, which uses `document.execCommand("copy")`. It's already [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand), but there's no decent alternative yet, so...

- Lastly, I tried to apply progressive enhancement while writing the CSS. In particular, thinking about how browsers that don't support newer CSS features can still provide users with a close enough experience.

### Continued development

I plan on studying more about web accessibility, particularly the WCAG and ARIA. Also, the animations on my app are pretty basic, so I can also improve my skill in that department.

### Useful resources

- [Cards](https://inclusive-components.design/cards/) - This is a gift that keeps on giving. Whenever I find myself creating some sort of card element, I'd always refer to this article for best practices. The pseudo-content trick and progressive enhancement concepts greatly influenced my implementation for the card strips on this project.

## Author

- Website (under construction)
- GitHub - [@joshjavier](https://github.com/joshjavier)
- Twitter - [@joshjavierr](https://twitter.com/joshjavierr)
- LinkedIn - [@joshjavier](https://www.linkedin.com/in/joshjavier/)

## Acknowledgments

Shout out to Thalita for validating my assumptions and pointing me in the right direction re: a bug in Scrimba that prevents the button click from being triggered.
