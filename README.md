# 🎨 RGB Color Game

A browser-based color guessing game — you're shown an RGB value like `rgb(142, 78, 200)` and must pick the matching color from a grid of circles. Built with vanilla HTML, CSS, and JavaScript during my undergraduate studies (Mar 2018).

## 🎮 How to Play

1. Look at the **RGB value** displayed in the header
2. Click the circle that you think matches that color
3. ✅ **Correct** — all circles change to the winning color and you see **"GREAT!!!"**
4. ❌ **Wrong** — that circle turns black and you see **"TRY AGAIN!!!"**
5. Click **"COLORS AGAIN!!!"** to reset with new random colors
6. Switch between **Easy / Medium / Hard** difficulty levels

## 🛠️ Built With

- **HTML5** — Semantic structure, 9 color circle `div`s
- **CSS3** — CSS circles via `border-radius: 50%` + `padding-top` trick, `transition` animations on squares and buttons, black background with a pink header
- **Vanilla JavaScript (ES5)** — Pure DOM manipulation, no libraries

## 🚀 How to Run

No build tools or dependencies. Just open in your browser:

```bash
open RGB.html
```

## 📁 Project Structure

```
RGB-COLOR-GAME/
├── RGB.html    # Game structure — grid of 9 circles + navbar
├── RGB.css     # Styles — circles, navbar, transitions
└── RGB.js      # Game logic — color generation, click handling, win/lose
```

## 💡 How It Works

```js
// Generate N random RGB colors
function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Pick one as the answer
function choosecolor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

// On correct guess — flood all squares with the winning color
function greatcolor(col) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = col;
    }
}
```

**The CSS circle trick:** `border-radius: 50%` + `padding-top: 30%` (equal to `width: 30%`) creates a perfect responsive circle without a fixed height — a classic CSS technique.

## 💡 What I Learned

Built in March 2018 — the earliest project in this collection, predating even the TO-DO-LIST-APP. Key concepts practiced:

- **Random color generation** — using `Math.random() * 256` to generate valid RGB channel values
- **`querySelectorAll` + `for` loop** — assigning colors and event listeners to multiple elements at once
- **Win/lose state** — comparing `this.style.background` to the target color string
- **CSS circles** — the `border-radius: 50%` + equal `width`/`padding-top` technique for responsive circles
- **CSS `transition`** — smooth color changes on squares and button hover effects
- **Difficulty modes** — Easy / Medium / Hard button UI (framework laid in HTML)

---

*Guess the RGB. Simple concept, satisfying when you get it right. 🎯*
