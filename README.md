# GetFit — Muscle Gain Workout System

Self-contained HTML workout artifacts for a 6-month lean bulk program.
**Goal:** 134 lb → 150+ lb, building visible muscle mass and size.

## How to Use

1. Open `workouts/index.html` in any browser to see your weekly schedule
2. Click today's workout day to open the session page
3. Follow each exercise, log your weights, and check off sets
4. Use the **Skip Today** button if you miss a session — the schedule auto-adjusts

## Structure

```
workouts/
  index.html          ← Start here: weekly schedule overview
  day1-push-a.html    ← Chest / Shoulders / Triceps
  day2-pull-a.html    ← Back / Biceps / Forearms
  day3-legs-a.html    ← Quads / Calves
  day4-push-b.html    ← Shoulders / Chest / Triceps
  day5-pull-b.html    ← Back / Deadlift / Forearms
  day6-legs-b.html    ← Hamstrings / Glutes / Core
  day7-recovery.html  ← Active Recovery

nutrition/
  calorie-targets.html  ← Your daily macro targets and TDEE math
  meal-templates.html   ← Meal plan templates (workout & rest days)
```

## 7-Day Split

| Day | Focus | Primary Muscles |
|-----|-------|-----------------|
| 1 | Push A | Chest, Anterior Delt, Triceps |
| 2 | Pull A | Back, Biceps, Forearms |
| 3 | Legs A | Quads, Calves |
| 4 | Push B | Shoulders, Upper Chest, Triceps |
| 5 | Pull B | Back (Deadlift), Forearms |
| 6 | Legs B | Hamstrings, Glutes, Core, Calves |
| 7 | Recovery | Mobility, Foam Roll, Light Cardio |

## Nutrition at a Glance

| Day | Calories | Protein | Carbs | Fat |
|-----|----------|---------|-------|-----|
| Workout (1-6) | 2,986 kcal | 154g | 326g | 119g |
| Recovery (7) | 2,786 kcal | 154g | 271g | 121g |

## Schedule Logic

Your schedule is calendar-aware. The app tracks:
- Your start date (auto-set on first visit)
- Any days you skip

If you miss a day, press **Skip Today** and all future workouts shift forward automatically.
To restart your schedule from today, use **Reset Schedule** on the index page.

## Modifying Workouts

Each HTML file is self-contained. To update an exercise:
1. Open the workout day file in any text editor
2. Find the `<article class="exercise-card">` for the exercise
3. Update sets, reps, rest, or form cues
4. The `data-sets` and `data-reps` attributes on `.set-log` control the set log rows

See `CLAUDE.md` for the full HTML conventions and localStorage key spec.
