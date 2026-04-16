---
layout: page.njk
title: Contact
---

<p style="text-align: center; margin-bottom: 1rem;">{% icon "mail", "sm", true %} <span style="color: var(--text-muted); font-style: italic;">Send a message with Letterbird below.</span></p>

<section
  class="deferred-embed"
  data-embed-provider="letterbird"
  data-embed-title="Letterbird contact form"
  data-embed-src="https://letterbird.co/embed/v1.js"
  data-letterbird-user="pablo">
  <p class="deferred-embed__copy">The form is loaded only when you ask for it, which keeps this page lighter and avoids third-party audit noise on first paint.</p>
  <button type="button" class="deferred-embed__button">Open contact form</button>
  <div class="deferred-embed__mount" data-embed-mount></div>
  <noscript>
    <p class="deferred-embed__fallback"><a href="https://letterbird.co/pablo">Open the contact form on Letterbird</a></p>
  </noscript>
</section>

<p style="text-align: center; margin-top: 2rem; font-family: var(--font-body); font-style: italic; color: var(--text-muted);">
  ...or <a href="https://fax.1208.pro">send me a fax</a>
  <a href="https://fax.1208.pro" class="contact-fax-link" aria-label="Open fax page">
    <svg class="contact-fax-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 8.5V4.5H17V8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 18.5H5C3.89543 18.5 3 17.6046 3 16.5V11.5C3 10.3954 3.89543 9.5 5 9.5H19C20.1046 9.5 21 10.3954 21 11.5V16.5C21 17.6046 20.1046 18.5 19 18.5H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 14.5H17V20.5H7V14.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="17.5" cy="12.5" r="0.75" fill="currentColor"/>
    </svg>
  </a>
</p>
