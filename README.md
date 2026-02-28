<div align="center">

# 🃏 FLIP 2 WIN

**A Fun & Interactive Memory Card Matching Game**

[![Live Demo](https://img.shields.io/badge/🎮_Play_Now-Flip2Win-F59E0B?style=for-the-badge)](https://flip2win.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Anas-Sd/Flip-2-Win?style=for-the-badge&color=gold)](https://github.com/Anas-Sd/Flip-2-Win)

> Flip the cards. Match the pairs. Test your memory. 🧠

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📖 About

**Flip 2 Win** is a classic memory card matching game built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean vanilla code.

Flip two cards at a time, find all matching pairs, and try not to run out of lives!

```javascript
const flip2win = {
    type: "Memory Card Game",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript"],
    mechanics: ["Flip", "Match", "Score", "Survive"],
    status: "🟢 Live",
    funFactor: "∞"
};

while (lives > 0) {
  flip(card1);
  flip(card2);
  card1 === card2 ? score++ : lives--;
}
```

---

## ✨ Features

<div align="center">

| Feature | Description |
|:--------|:------------|
| 🎴 **Flip Animation** | Smooth CSS card flip transitions |
| 🔀 **Randomized Shuffle** | Cards are shuffled every new game |
| 🎯 **Score Tracking** | Earn points for every matched pair |
| ❤️ **Lives System** | Limited lives — match wisely! |
| 🔄 **Restart Option** | Reset and play again anytime |
| ⚡ **Responsive UI** | Clean, smooth, distraction-free interface |

</div>

---

## 🎮 How to Play

```
Step 1 → Click a card to flip it
Step 2 → Flip a second card
Step 3 → Match? → Cards stay open + earn points ✅
Step 4 → No match? → Lose a life + cards flip back ❌
Step 5 → Match all pairs before lives run out to WIN 🏆
```

---

## 🛠️ Tech Stack

<div align="center">

<table>
<tr>
<td align="center"><b>🏗️ Structure</b></td>
<td align="center"><b>🎨 Styling</b></td>
<td align="center"><b>⚡ Logic</b></td>
<td align="center"><b>🚀 Deployment</b></td>
</tr>
<tr>
<td align="center">HTML5</td>
<td align="center">CSS3</td>
<td align="center">Vanilla JavaScript</td>
<td align="center">Vercel</td>
</tr>
</table>

</div>

---

## 🏗️ System Architecture

```
User Click → Event Listener → Flip Card → Check Match
                                              │
                                    ┌─────────┴─────────┐
                                    ▼                     ▼
                              ✅ Match                ❌ No Match
                              Score++                  Lives--
                              Cards Stay               Cards Flip Back
                                    │                     │
                                    └─────────┬───────────┘
                                              ▼
                                     All Matched? → 🏆 WIN
                                     Lives = 0?   → 💀 GAME OVER
```

---

## 🧠 Core Concepts

<div align="center">

| Concept | Usage |
|:--------|:------|
| 🔀 **Array Shuffle** | Fisher-Yates algorithm for card randomization |
| 🎯 **Event Listeners** | Click-based card flip interaction |
| ⏱️ **setTimeout** | Delay before unmatched cards flip back |
| 🧩 **DOM Manipulation** | Dynamic card rendering & state updates |
| 🏗️ **Game State** | Score, lives, matched pairs tracking |

</div>

---

## 📂 Project Structure

```
flip-2-win/
│
├── index.html          # Game layout & structure
├── style.css           # Styling, animations & responsiveness
├── script.js           # Game logic, shuffle, matching & state
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Anas-Sd/Flip-2-Win.git

# Navigate to the project
cd Flip-2-Win

# Open in browser
open index.html
# or simply double-click index.html
```

> No dependencies. No build tools. Just open and play! 🎮

---

## 🔮 Roadmap

<div align="center">

| Status | Feature |
|:------:|:--------|
| ✅ | Core matching game |
| ✅ | Score & lives system |
| ✅ | Card shuffle & animations |
| 🔜 | ⏱️ Timer mode |
| 🔜 | 🏆 Leaderboard system |
| 🔜 | 🔊 Sound effects |
| 🔜 | 🎨 Difficulty levels (Easy / Medium / Hard) |
| 🔜 | 📱 Enhanced mobile optimization |

</div>

---

## 🤝 Contributing

Contributions are welcome!

```
1. Fork the repository
2. Create your feature branch → git checkout -b feature/NewFeature
3. Commit your changes → git commit -m 'Add NewFeature'
4. Push to the branch → git push origin feature/NewFeature
5. Open a Pull Request
```

> 📌 Please open an issue before major feature proposals.

---

## 📬 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-syedanas.me-00D9FF?style=for-the-badge)](https://syedanas.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-syedanas)
[![Gmail](https://img.shields.io/badge/Gmail-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:anasannu44455@gmail.com)

</div>

---

## ⚖️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

**⭐ If you enjoyed playing, star the repo!**

Made with ❤️ and 🧠 by **[Syed Anas](https://github.com/Anas-Sd)**

</div>
