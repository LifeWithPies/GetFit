# GetFit

## What This Is
Self-contained HTML/CSS/JS workout artifacts for a lean hypertrophy program.
Goal: 134 lb → 150+ lb in 6 months, building visible muscle mass and size.
No backend, no build step, no framework. Open any HTML file in a browser.

## User Profile
- Weight: 134 lb → target 150+ lb | Experience: Intermediate | Equipment: Full commercial gym
- Session: 45-60 min | Goal: Hypertrophy (look big and muscular), lean bulk nutrition

## File Conventions

### HTML
- `<!DOCTYPE html>` + semantic HTML5 (`<article>`, `<section>`, `<figure>`, `<details>`)
- 2-space indentation, no inline styles
- Stylesheet: `<link rel="stylesheet" href="../assets/style.css">`
- Tracker: `<script src="../assets/tracker.js"></script>` at end of `<body>`

### Exercise Card Pattern
```html
<article class="exercise-card" data-day="1" data-exercise="bench-press" data-sets="4" data-reps="6-8">
  <div class="exercise-header">
    <h3>Barbell Bench Press</h3>
    <span class="exercise-meta">4 × 6-8 reps · 2.5 min rest</span>
  </div>
  <div class="exercise-body">
    <figure class="exercise-demo">
      <img src="../assets/exercise-placeholder.svg"
           alt="Barbell Bench Press — lower to mid-chest in 3s, press explosively"
           loading="lazy">
      <figcaption><a href="https://exrx.net/WeightExercises/PectoralMajor/BBBenchPress" target="_blank" rel="noopener">View demo on ExRx ↗</a></figcaption>
    </figure>
    <div class="exercise-info">
      <p class="muscles"><strong>Primary:</strong> Chest &nbsp;|&nbsp; <strong>Secondary:</strong> Anterior Delt, Tricep</p>
      <p class="cue">Drive shoulder blades into the bench. 3-second eccentric; press explosively. Squeeze chest at the top.</p>
    </div>
  </div>
  <div class="set-log" data-day="1" data-exercise="bench-press" data-sets="4" data-reps="6-8"></div>
</article>
```

### localStorage Key Spec
```
getfit_start_date                            → ISO date string (e.g. "2026-05-18")
getfit_skips                                 → JSON array of ISO date strings
getfit_day{N}_{exercise-slug}_set{M}_weight  → number string (lbs)
getfit_day{N}_{exercise-slug}_set{M}_checked → "true" | "false"
```
Example: `getfit_day1_bench-press_set2_weight = "155"`

### GIF / Demo Rules
- Use `../assets/exercise-placeholder.svg` as `src` — always loads, looks clean
- Always add `<a href="https://exrx.net/..." target="_blank">View demo on ExRx ↗</a>` below the image
- Never use Giphy, YouTube embeds, or third-party CDN images

### Nutrition Source of Truth
Macros are defined in `nutrition/calorie-targets.html`. Never hardcode duplicates.
- Workout days (1-6): **2,986 kcal** | Protein 154g | Carbs 326g | Fat 119g
- Rest/recovery (day 7): **2,786 kcal** | Protein 154g | Carbs 271g | Fat 121g

## Color Theme
```
--bg: #0f0f0f    --surface: #1a1a1a    --border: #2d2d2d
--text: #e5e5e5  --muted: #9ca3af
--accent: #22c55e (green) --accent2: #3b82f6 (blue) --danger: #ef4444 (red)
```

## Hypertrophy Training Philosophy
This plan targets AESTHETIC muscle gain — the goal is to look big and muscular.
- Rep ranges: 6-12 for compounds, 12-20 for isolation/pump finishers
- Always include 3-second eccentric cue (slow lowering phase = more time under tension)
- Mind-muscle connection cues in every exercise card
- Pump finisher at end of each session (cable or machine, 15-20 reps)
- Progressive overload: add 5 lb when you hit top of rep range for all sets

## Accessibility
- All `<img>` elements need descriptive `alt` text with a biomechanical cue
- All interactive elements need `aria-label`
- Color is never the sole state indicator (checkboxes also show text)

## Commands
- `/workout` — generate or update a workout day HTML artifact
