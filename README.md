> [!WARNING]
> This project will soon be deprecated in favor of my new project, [O-Search](https://o-search.link). Usage of Fast-Search will still be possible.

# 🪄 Fast Search

DuckDuckGo's bang system is great, but slow. Our objective is to fix that!

## 🤔 Why should you use our service?

- [x] 🔖 Completely static - no server requests needed
- [x] ✒️ Local-first - all processing happens on your machine
- [x] 🔒 Zero data collection - your privacy is protected

## 🔎 How to Use

Add the following URL to your browser's search engine settings:

```
https://fast-search.clst.dev/?q=%s
```

### 📐 Setting a Default Bang

The default bang is [Google (`g`)](https://www.google.com/). You can change it by visiting:

```
https://fast-search.clst.dev/?s=bang
```

> [!NOTE]  
> Be sure to replace `bang` with a valid bang code[^1].

### ❌ Removing a Custom Default Bang

To reset the default bang to the original setting ([Google (`g`)](https://www.google.com/)), visit:

```
https://fast-search.clst.dev/?r=0
```

## ✨ Information

> [!WARNING]  
> Please be aware that all code is cached. It may take several days for new changes to be reflected.

This project is inspired by [Unduck](https://github.com/t3dotgg/unduck/).

[^1]: Currently, there is no user-friendly website listing all available bangs. However, a developer-friendly list is available in our [repository](https://github.com/PluckyDevv/Fast-Search/blob/main/src/bangs.ts).
