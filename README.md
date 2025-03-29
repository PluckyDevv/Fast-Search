# Fast Search

Fast Search provides a quicker alternative to DuckDuckGo's bangs system. While DuckDuckGo bangs are powerful, they can sometimes be slow. Fast Search uses a lightweight implementation with cached scripts to deliver faster performance with the same functionality.

No tracking, privacy focused.

## Features

- Lightning fast redirection
- Customizable default search engine 
- Privacy focused - no tracking
- Uses the same bang syntax you're familiar with

## How to Use

Add the following URL to your browser's search engine settings:

```
https://fast-search.clst.dev/?q=%s
```

Once configured, you can use bangs just like with DuckDuckGo:
- `!w search term` to search Wikipedia
- `!g search term` to search Google
- `!yt search term` to search YouTube
- And thousands more!

### Setting a Default Bang

The default bang is Google ('g'). You can change it by visiting:

```
https://fast-search.clst.dev/?s=BANGNAME
```

Replace `BANGNAME` with your preferred bang (e.g., `w` for Wikipedia, `yt` for YouTube, etc.)

### Removing a Custom Default Bang

To reset to the system default, visit:

```
https://fast-search.clst.dev/?r=0
```

## About

This project is inspired by [Unduck](https://github.com/t3dotgg/unduck/).