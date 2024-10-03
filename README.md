# Hide YouTube Recommendations - Chrome Extension

## Overview

This Chrome extension is designed to enhance your YouTube viewing experience by hiding the recommendations sidebar on the right-hand side of the video page. With this extension, you can watch your favorite videos without being distracted by suggested content.

## Features

- Automatically hides the YouTube recommendation sidebar when a video is playing.
- Simple, lightweight, and easy to install.
- Works seamlessly on the latest YouTube layout.

## Installation

1. Download the project files and unzip them.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the folder containing this extension (`hide-youtube-recommendations`).
5. The extension should now appear in your list of installed extensions.

## How It Works

- The extension uses a content script (`content.js`) to hide the YouTube recommendation sidebar by targeting the HTML element with the ID `#secondary`.
- A simple CSS rule (`style.css`) is also applied to ensure that the sidebar remains hidden, even if the page layout changes.

## Project Structure
