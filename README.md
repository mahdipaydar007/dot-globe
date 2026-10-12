<div align="center">

# 🌍 Dot Globe

**A dreamy, interactive Earth made of thousands of tiny violet dots.**
Drag it, spin it, and watch shooting stars fly between world capitals.

![HTML](https://img.shields.io/badge/HTML-5-8b5cf6?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-3-8b5cf6?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-8b5cf6?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-c4b5fd?style=flat-square)

</div>

---

## ✨ Features

- **Realistic dot globe**: about 7,000 land dots sit on an evenly spaced sphere, so the poles look as clean as the equator. Dots shrink toward the edge to give real depth.
- **Drag to rotate**: grab the globe and spin it. It keeps its momentum when you let go, then slowly drifts on its own when idle.
- **Shooting stars**: every few seconds a star launches from a capital facing you and arcs through the sky to another capital, leaving a glowing trail and a ripple where it lands.
- **Pulsing capitals**: 33 major capitals glow and send out soft expanding rings.
- **Hover for names**: point at a highlighted capital and its city name appears.
- **Faint latitude and longitude grid**: just enough structure to read as a globe.
- **Dark violet theme**: a deep violet galaxy backdrop with soft nebula glows.
- **Zero dependencies**: plain HTML, CSS and JavaScript. No build step, no libraries, no network requests.

---

## 🚀 Getting started

1. Put the three files in the same folder.
2. Open `index.html` in any modern browser.

That's it. It works straight from your file system, with no server and no internet connection.

> Want to serve it locally? Any static server works, for example `python3 -m http.server`, then visit `http://localhost:8000`.

---

## 📁 Project structure

```
globe/
├── index.html   # Page structure: canvas, tooltip and labels
├── style.css    # Dark violet theme, background and tooltip styling
├── script.js    # Land data, 3D projection, animation and interaction
└── README.md
```

---

## 🎮 Controls

| Action                            | Result                                    |
| --------------------------------- | ----------------------------------------- |
| **Drag** (mouse or touch)         | Rotate the globe                          |
| **Release**                       | Momentum, then slow auto-rotation resumes |
| **Hover** a glowing capital       | Show the city name                        |
| **Tap** a glowing capital (touch) | Show the city name for a moment           |

---

## 🎨 Customizing

### Colors

All colors live at the top of `style.css`:

```css
:root {
  --bg: #07040f; /* page background */
  --land: #8b5cf6; /* land dots */
  --star: 237, 226, 255; /* shooting stars (RGB) */
}
```

### Behaviour and look

These values are in `script.js`:

| What                         | Where                                | Default      |
| ---------------------------- | ------------------------------------ | ------------ |
| Number of dots on the sphere | `const N`                            | `24000`      |
| Dot size                     | `.0058` in `buildSprites`            | `.0058`      |
| Idle spin speed              | `BASE_SPIN`                          | `0.12`       |
| Time between shooting stars  | `spawnT = 1.2 + Math.random() * 2.6` | 1.2 to 3.8 s |
| Max shooting stars at once   | `stars.length < 3`                   | `3`          |
| Trail length                 | `TR`                                 | `.3`         |
| Grid spacing                 | `lo += 30` / `la += 30`              | 30°          |

### Capitals

- **Highlighted capitals with hover names** are in the `HL` list, written as `Name|longitude latitude`.
- **Shooting-star endpoints** are in the `CAP` list, written as `longitude latitude`. Add any city you like.

---

## 🔧 How it works

1. **Land mask**: simplified continent, island and lake outlines are drawn onto a hidden canvas, then smoothed so coastlines look natural.
2. **Dot placement**: points are spread over a sphere with a Fibonacci spiral. Only the points that land on the mask are kept, so the ocean costs nothing to draw.
3. **Projection**: each frame, the land dots are rotated and projected onto the screen. Dots on the far side are skipped.
4. **Fast drawing**: dots are drawn from a handful of pre-rendered sprites instead of thousands of circle paths, which keeps the animation smooth.
5. **Shooting stars**: each one follows a great-circle arc between two capitals, lifted above the surface, with a tail sampled along its path.

---

## ⚠️ Good to know

- Coastlines are **hand-simplified**, so small bays, tiny islands and fine detail are approximate.
- Capital positions are accurate to about a degree.
- The globe is a stylized visualization, not a map to navigate by.

---

## 🌐 Browser support

Works in current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile. It needs HTML5 canvas support.

---

<div align="center">

Made with ✨ dots, a little math, and a lot of violet.

</div>
