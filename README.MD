# parallaxx-js

A lightweight, dependency-free JavaScript library for creating simple parallax scrolling effects with minimal configuration.

Works with plain HTML, CSS, and JavaScript—perfect for hero sections, banners, and backgrounds.

---

FEATURES

- Vanilla JS: No external dependencies.
- Easy setup: Just add data-\* attributes to your HTML elements.
- Customizable speed: Control the parallax movement with the data-speed attribute.
- Optional height: Set a custom section height via data-height (defaults to 100vh).
- Responsive: Works seamlessly with frameworks like Bootstrap or Tailwind, or with plain HTML.
- CDN-ready: Use it directly from a CDN without any installation.

---

## INSTALLATION

### NPM

```bash
npm install parallaxx-js
```

Import in your HTML:

```html
<link rel="stylesheet" href="./node_modules/parallaxx-js/dist/parallax.css" />
<script src="./node_modules/parallaxx-js/dist/parallax.js"></script>
```

### CDN

##### jsDelivr

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/parallaxx-js/dist/parallax.css"
/>
<script src="https://cdn.jsdelivr.net/npm/parallaxx-js/dist/parallax.js"></script>
```

##### unpkg

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/parallaxx-js/dist/parallax.css"
/>
<script src="https://unpkg.com/parallaxx-js/dist/parallax.js"></script>
```

### 🚀 Basic Usage

```html
<html>
<head>
  <title>Parallax Effect</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/parallaxx-js/dist/parallax.css">
<body>

  <div class="parallax"
       data-speed="0.5"
       data-image="https://picsum.photos/id/1018/1000/600">
    <h1>Parallax Effect</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/parallaxx-js/dist/parallax.js"></script>
</body>
</html>
```

The `.parallax` class automatically applies the parallax background effect using `data-image`, `data-speed`, and optional `data-height` without requiring extra HTML wrappers.

---

### Configuration Options

| Attribute   | Type   | Default | Description                                                              |
| ----------- | ------ | ------- | ------------------------------------------------------------------------ |
| data-image  | URL    | –       | The background image URL. This is a REQUIRED attribute.                  |
| data-speed  | Number | 0.3     | A multiplier for the scroll speed. A higher value means a faster effect. |
| data-height | String | 100vh   | A custom height for the parallax section (e.g., 500px, 80vh).            |

---

## 🧩 How `.parallax` Works

When you add the class `.parallax` to an element, the library will:

1. **Wrap it automatically** in a `.parallax-container` element.
2. **Create a `.parallax-layer`** behind it using the `data-image` attribute for the background.
3. Apply the **scroll transform effect** to `.parallax-layer` based on the value of `data-speed`.
4. Keep your original `.parallax` content **on top** (foreground) with a higher z-index.

### Default Styling

By default:

- `.parallax` has `position: relative`, `display: flex`, `align-items: center`, `justify-content: center`.
- Height is `100vh` unless overridden via `data-height`.

- `.parallax-layer` is `position: absolute`, full width/height, and uses `background-size: cover` and `background-position: center`.

This means:

- You only need to provide **your content** and `data-*` attributes.

- No need to manually create `.parallax-container` or `.parallax-layer` in your HTML.

- Works seamlessly with Bootstrap, Tailwind, or any CSS framework.

---

### EXAMPLES

#### Hero Section with Bootstrap

Combine parallaxx-js with Bootstrap for a responsive and stunning hero section.

```html
<section
  class="parallax"
  data-speed="0.4"
  data-image="https://picsum.photos/id/1005/1600/900"
>
  <div
    class="container h-100 d-flex flex-column justify-content-center align-items-center text-white"
  >
    <h1 class="display-3 fw-bold text-center">Welcome to My Site</h1>
    <p class="lead text-center">Bootstrap Hero with Parallax Effect</p>
    <a href="#content" class="btn btn-primary btn-lg mt-3">Explore More</a>
  </div>
</section>
```

### Multiple Parallax Sections

You can use parallaxx-js for multiple sections on a single page, each with its own configuration.

```html
<div
  class="parallax"
  data-speed="0.2"
  data-image="https://picsum.photos/id/1022/1200/800"
  data-height="80vh"
>
  <h2>Section One</h2>
</div>

<div style="height: 500px; background: #eee; padding: 2rem;">
  <p>Regular content...</p>
</div>

<div
  class="parallax"
  data-speed="0.5"
  data-image="https://picsum.photos/id/1043/1200/800"
>
  <h2>Section Two</h2>
</div>
```

---

### LIVE DEMO

Want to see it in action? Check out the live CodePen example.

Link to CodePen: https://codepen.io/razorzero0/pen/KwdZZoG

---

##### LICENSE

MIT License © 2025 Ainun
