# Dominoes Scorekeeper

A lightweight browser-based scorekeeper for domino games. Record games quickly, compare player performance over time, and explore trends with simple, mobile-friendly analytics.

## Usage

Visit:

https://evanvliet.github.io/dominoes

You will see the main scoring tab, note status advising to click on highest double. This is for play where who goes first alternates on each hand, the one with the highest double starts.

<img src="screenshots/first_screen.png" alt="First run screen" width="300">

After selecting the starting player, add scores by entering a number and clicking on the scorer.
After some play, the status lists recent scores.
Click the red **X** to delete a score, and possibly replace by adding another score.

<img src="screenshots/after_scores.png" alt="Options tab" width="300"> 

When a player *dominoes* (plays all their tiles), the hand ends. First, enter any score from that play, then tap the domino tile below the **9** to mark the hand complete. A highlit border indicates who goes first on the next hand and the status area gives hand totals.
After a domino, the player with the most points above the top score wins.
The status area shows the winner. Tap the player
with the highest double to begin the next game.

The middle tab is STATS; it has three sections: numric data, graphs, and histograms. Click on the first to cycle through points, averages, and games. The middle toggles between graphs of point and game scores. The third has three histograms, click to see winning margins for each player, and another for both. 

Screenshots: 

| Statistics | Options |
| :--- | :--- |
| <img src="screenshots/stats.png" alt="Statistics tab" height="350"> | <img src="screenshots/options.png" alt="Options tab" height="350"> |

Last is Options: set up separate contests labeled by player names. Choose **New contest...** or use **Players**, then enter both player names in the Data box. The Parameters box also configures top score, cloud backup, and dark mode. Scores can be imported or exported with the shared Data and Status boxes.

### Web App

Browsers can install the app to your home screen
for a more native experience:
* Android (Chrome): Go to the site, tap the three dots beside
the address bar, and select Add to Home screen.
* iOS (Safari): Go to the website, tap the Share button at
the bottom of the screen, and select Add to Home Screen.

### Data

Options has one shared Data box for player names, import/export data, and a cloud backup URL.
The three score actions operate on the selected contest.
* *Export* shows current contest data in the Data box and copies it to the clipboard:

    ```text
    Date,Host,Guest
    1978-01-02T18:00,51,49
    1978-01-03T18:00,54,31
    ```

First player names header, followed by date, time and player scores for each completed game. You have to paste the clipboard data into a mail message or web document to save it.
* *Import* first switches Data to score-entry mode. Paste data and select Import again to add
  scores to the currently selected contest. If a timestamp already exists, the existing local
  score is kept. Status reports how many records were added out of those supplied. For testing,
  you can import 75 scores from [test75](test75).
* *Erase* deletes the selected contest's scores from this device and, when cloud backup is on,
  from the server, after confirmation.

To use cloud backup for a contest, deploy the current [code.gs](code.gs) as an Apps Script web app
and switch on **Cloud backup** in that contest's Parameters. The saved URL (or the last verified
URL) appears in Data; select Check/Update, then confirm the successful connection in Status.
Each contest remembers its own Local/Cloud choice and URL. Newly created contests start in Local
mode and can reuse the last verified URL when Cloud is enabled. Existing app-wide backup settings
are copied to existing contests the first time the updated app loads.
Completed games are uploaded when possible; the active cloud-backed contest is reconciled with
the server at startup or when selected, at most once per day. Sync merges by contest and minute-level timestamp:
local scores win timestamp conflicts, cloud-only scores are added locally, and local-only or
conflicting local scores are sent to the server. The server keeps at most one score record per
contest timestamp and sorts records by date. Therefore, two games in the same contest during
the same minute resolve to one record at sync time.

## Why This Exists

Long time friend Peter and I have played dominoes for years. We kept scores on scraps of paper, and graphs on sheets of graph paper taped together. Here's a gallery of those:

| Games / Points | Histogram / Scores |
|-|-|
|<img src="history/games.jpg" alt="Games" width="250">|<img src="history/hist.jpg" alt="Games" width="250">. |
|<img src="history/scores.jpg" alt="Games" width="250">|<img src="history/points.jpg" alt="Games" width="250">|

We would scheme on an alternative to pencil-and-paper scorekeeping: a fast, browser-based alternative that preserves game history and reveals who is really winning over time. It would:

* Preserve game history permanently
* Track lifetime statistics automatically
* Surface winning trends and rankings
* Provide useful charts and insights
* Run in any modern browser

The arrival of AI coding tools was too tempting, and this is the result.

### More info
See [prompts](prompts.md) for the initial development logs.
And [info](info.md) has AI genearted feature details.
