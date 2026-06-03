# Dominoes Scorekeeper

A lightweight web application for recording dominoes games, tracking player performance, and visualizing long-term statistics.

Built for family game nights, friendly rivalries, and anyone who wants more than a pencil-and-paper score sheet.

## Features

### Game Tracking

* Record completed dominoes games in seconds
* Track multiple players
* Automatically identify game winners
* Maintain a permanent game history

### Lifetime Statistics

Track performance across hundreds of games:

* Games played
* Wins
* Win percentage
* Total points scored
* Average score
* Highest game score
* Historical rankings

### Visual Analytics

View player trends over time:

* Cumulative points history
* Total games played
* Win distributions
* Margin-of-victory histograms
* Long-term performance comparisons

### Mobile Friendly

* Works on phones, tablets, and desktops
* No account required
* No server backend required
* Fast, simple interface designed for use during actual game play

## Why I Built This

Our family has played dominoes for years. We started by keeping scores on scraps of paper, then notebooks, then spreadsheets.

Eventually I wanted something that would:

* Preserve game history permanently
* Track lifetime statistics automatically
* Show who was really winning over time
* Provide interesting charts and trends
* Work from any browser

This project is the result.

## Screenshots

### Score Entry

*(Add screenshot here)*

### Statistics Dashboard

*(Add screenshot here)*

### Historical Charts

*(Add screenshot here)*

## Getting Started

### Option 1: Use the Hosted Version

Visit:

http://volvliet.us/dom

### Option 2: Run Locally

Clone the repository:

```bash
git clone https://github.com/evanvliet/dom.git
cd dom
```

Serve the files using any web server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Data Storage

Game history is stored locally in your browser.

This means:

* No account required
* No cloud service required
* Your data stays under your control

Be sure to export or back up your data periodically if preserving long-term history is important.

## Statistics Tracked

| Statistic         | Description                             |
| ----------------- | --------------------------------------- |
| Games Played      | Total recorded games                    |
| Wins              | First-place finishes                    |
| Win Percentage    | Wins ÷ Games Played                     |
| Total Points      | Lifetime points scored                  |
| Average Score     | Mean score per game                     |
| Highest Score     | Best game score                         |
| Margin of Victory | Difference between winner and runner-up |

## Future Enhancements

Ideas under consideration:

* Data import/export
* Cloud synchronization
* Tournament mode
* Team play support
* Additional chart types
* Player profiles
* Progressive Web App (PWA) support
* Installable mobile app experience

## Contributing

Bug reports, feature requests, and pull requests are welcome.

## License

MIT License
