# 🔎 adobe searches

_During an interview with [Adobe][adobe], I was asked to create a search bar with recent searches. Getting the user experience just right on this one was a lot of fun!_

[![vercel][vercel-badge]][vercel]
[![github actions][github-actions-badge]][github-actions]
[![codecov][codecov-badge]][codecov]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

## ❓ question

Reimplement the recent searches feature of the search bar found on the [Adobe Stock][adobe-stock] website.

![search bar][search-bar]

## 🤔 assumptions

I made two assumptions to simplify the problem.

-   Recent searches would be persisted across page loads.
-   The autocomplete feature did not exist.

## 💀 execution

```bash
git clone https://github.com/bradgarropy/adobe-searches.git
cd adobe-searches
npm install
npm start
```

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/adobe-searches/commits?author=bradgarropy" title="Code">💻</a> <a href="#design-bradgarropy" title="Design">🎨</a> <a href="https://github.com/bradgarropy/adobe-searches/commits?author=bradgarropy" title="Documentation">📖</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/bradgarropy/adobe-searches/commits?author=bradgarropy" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[vercel]: https://vercel.com/bradgarropy/adobe-searches
[vercel-badge]: https://img.shields.io/github/deployments/bradgarropy/adobe-searches/production?label=vercel&style=flat-square
[github-actions]: https://github.com/bradgarropy/adobe-searches/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/adobe-searches/%F0%9F%A7%AA%20test?style=flat-square
[codecov]: https://app.codecov.io/gh/bradgarropy/adobe-searches
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/adobe-searches?style=flat-square
[contributing]: https://github.com/bradgarropy/adobe-searches/blob/master/contributing.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors]: #-Contributors
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/adobe-searches?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[adobe]: https://www.adobe.com
[adobe-stock]: https://stock.adobe.com
[search-bar]: images/search-bar.png
