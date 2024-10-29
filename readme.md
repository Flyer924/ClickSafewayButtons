# Introduction

This is my [tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (a chrome extension to run custom javascript) script to click all of the Safeway For U buttons (instead of doing it manually or only select ones).

## Installation Instructions

1. Install the [tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) chrome extension
    - if the script doesn't work you might have to enable [Developer Mode for extensions](#Enabling-Chrome-Developer-Mode)
2. Click on the tampermonkey chrome extension and "Create a new script..."
3. Replace all of the code in the new script with the code from "ClickSafewayButtons.js"
4. Make sure the script is enabled under the "Installed Userscripts" tab (called "Click Safeway For U Buttons")

And that's it! All you have to do now is visit the safeway for u page, and it will automatically click all of the buttons.

I've only tested the script on chrome and only with tampermonkey, but theoretically it should work on other browsers and can just be run on it's own.

## Enabling Chrome Developer Mode

I think this is a new change required by chrome?

1. To enable developer mode go to [chrome://extensions](chrome://extensions)
2. In the top right there will be a button to enable developer mode
3. close all chrome windows
4. That's it, the script should work once you re-open chrome

## Final Notes

The script attempts to click all of the buttons every 0.5 seconds, and I don't account for the browser being slow and not recognizing button clicks. What this means is that the safeway website will probably give you an error about being unable to click a button. This is because the script tried to click a button that was already clicked, but not updated yet. The script will continue to click the buttons regardless if the error message is closed or not.