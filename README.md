# Dominoes Scorekeeper

A lightweight browser-based scorekeeper for dominoes games. Record games quickly, compare player performance over time, and explore trends with simple, mobile-friendly analytics.

## Getting Started

Visit:

https://evanvliet.github.io/dominoes

You will see the main scoring tab:

To start a game, click on
the player with the highest double. Then enter numbers and credit
a score by clicking the player tile.

<first_screen>

After entering some scores, note the status area lists some recent ones. Click the red
**X** to delete that score, and possibly replace by adding another score.

<after_scores>

When a player *goes out* (plays all their tiles), tap the domino tile below the 9 to mark the hand complete. The status area shows hand totals and who plays next.

After a domino play, the player with the most points above the top score wins.
The status area shows the winner. Tap the domino tile tap to clear and begin the next game.

There are also Stats and Options tabs. Stats has runnint totals averages and charts. Options
is for creating separate contests labeled by player names. You can also configure top score, appearance, and import/export of data. Screenshots:

<stats> <options>

Also note that most modern browsers can install the app to your home screen
for a more native experience.[^webapp]

[:webapp]
* Android (Chrome): Go to the site, tap the three dots beside
the address bar, and select Add to Home screen.
* iOS (Safari): Go to the website, tap the Share button at
the bottom of the screen, and select Add to Home Screen.

## Features

### Game Tracking

* Record completed dominoes games in seconds
* Track multiple players and contest sessions
* Automatically identify winners and final standings
* Keep a permanent history in your browser

### Lifetime Statistics

Track long-term performance across many games:

* Games played
* Wins
* Win percentage
* Total points scored
* Average score
* Highest score
* Ranking history

### Visual Analytics

View player trends at a glance:

* Cumulative points history
* Games played over time
* Win distribution
* Margin-of-victory histograms
* Performance comparisons

### Mobile Friendly

* Works on phones, tablets, and desktops
* No login required
* No backend server required
* Designed for use during actual game play

## Why This Exists

Long time friend Peter and I have played dominoes for years. We kept scores on scraps of paper, and graphs on sheets of graphpaer taped together.

We would scheme on an alternative to pencil-and-paper scorekeeping: a fast, browser-based alternative that preserves game history and reveals who is really winning over time. It would:

* Preserve game history permanently
* Track lifetime statistics automatically
* Surface winning trends and rankings
* Provide useful charts and insights
* Run in any modern browser

The set of AI coding tools was too tempting, this is the result.  See [prompts](prompts.md) for most of input.

## Data Storage

Game history is stored locally in your browser using local storage.

That means:

* No account required
* No cloud service required
* Your data stays under your control

Because data is stored locally, be sure to export or back up your history if you want to preserve it.

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

Potential improvements:

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

Report issues at: https://github.com/evanvliet/dominoes/issues

## License

MIT License
