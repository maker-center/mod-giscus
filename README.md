# Hinode Module – Giscus

A Hugo module that adds giscus comments to a Hinode site.

Giscus is a free, open-source commenting system for websites and blogs, powered by GitHub Discussions.

## Features

- Easy integration with Hugo and Hinode
- Support for multilingual sites
- No database or additional server required

## Prerequisites

Before configuring this module, make sure you have:

- [Hugo](https://gohugo.io) (Extended version)
- [Go](https://go.dev/dl/), for module resolution
- A site using the [Hinode](https://github.com/gethinode/hinode) theme
- A GitHub repository with [GitHub Discussions](https://github.com/features/discussions) enabled
- The [giscus](https://giscus.app) app installed on the repository

## Installation

Add this module to your project's `hugo.toml` (or `config.toml`) file:

```toml
[[module.imports]]
path = "github.com/maker-center/mod-giscus"
```

Then initialize the module:

```bash
hugo mod tidy
```

## Configuration

Get your repository details from [giscus.app](https://giscus.app/) and add the following configuration to your `params.toml` file (or `config/_default/params.{lang_code}.toml` for language-specific files) under the `[comments]` section:

```toml
[comments]
enabled = true
dataRepo = "your-github-username/your-repository"
dataRepoID = "repository-id"
dataCategory = "Announcements"
dataCategoryID = "category-id"
dataMapping = "pathname"
dataStrict = "0"
dataReactionsEnabled = "1"
dataEmitMetadata = "0"
dataInputPosition = "top"
dataTheme = ""
dataLang = "en"
```

### Giscus Parameters

- `enabled`: Set to `true` to display the comments section
- `dataRepo`: Your public GitHub repository (e.g., `username/repository`)
- `dataRepoID`: Repository ID (obtained from the Giscus configuration page)
- `dataCategory`: The GitHub Discussions category name (e.g., `Announcements`)
- `dataCategoryID`: Category ID (from the Giscus configuration page)
- `dataMapping`: How discussions are mapped to pages. `pathname` is the recommended default option
- `dataStrict`: Defines whether discussions should match strictly
- `dataReactionsEnabled`: Set to `1` to enable emoji reactions
- `dataEmitMetadata`: Controls whether Giscus emits metadata
- `dataInputPosition`: Where the comment box appears (`top` or `bottom`)
- `dataTheme`: Giscus theme. Leave blank to let the site decide, or set a specific theme (`light` or `dark`)
- `dataLang`: The language code for the Giscus interface

## Multilingual Sites

For multilingual sites, create a `params` file for each language and adjust `dataLang` accordingly.

Example:

```toml
# config/_default/params.pt-br.toml
[comments]
# Paste all other parameters here
dataLang = "pt"
```

## Additional Settings

You can disable the comments section on specific pages of your site by including the following in the front matter:

```yaml
showComments: false
```

## License

This project is licensed under the [MIT License](https://github.com/maker-center/mod-giscus/blob/main/LICENSE).

## Credits

Built with [giscus](https://giscus.app) and [Hinode](https://gethinode.com/).
