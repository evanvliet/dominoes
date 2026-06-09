## Dominoes Scorekeeper Features

### Web App

Browsers can install the app to your home screen
for a more native experience:
* Android (Chrome): Go to the site, tap the three dots beside
the address bar, and select Add to Home screen.
* iOS (Safari): Go to the website, tap the Share button at
the bottom of the screen, and select Add to Home Screen.

### Data

The options tab includes Data buttons for Export, Import, and Clear.
* *Export* pastes current contest as plain ascii into the clipboard: 

    ```text
    Peter | Eric
    5/31 09:33 50 60
    5/31 09:42 51 35
    ```

    First player names, followed by date, time and player scores for each completed game. You have to paste the clipboard data into a mail message or web document to save it.
* *Import* opens an edit control; paste data in above format to add scores. It
 appends scores to the contest per the first line. If no such contest exists, it creates
 a new one. For testing, you can import 75 scores from [test75](test75).
* *Clear* deletes the contest, both scores and players, from the data.

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
