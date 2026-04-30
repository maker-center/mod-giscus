# Hinode Module - Giscus

A Hugo module that adds [giscus](https://giscus.app) comments to a [Hinode](https://gethinode.com/) site.

Giscus is a comment system powered by GitHub Discussions. It lets visitors comment using their GitHub account and keeps all discussions within your GitHub repository.

## Features

- Easy integration with Hugo and Hinode
- Uses GitHub Discussions as the comments backend
- Supports multilingual sites
- Theme-friendly configuration
- Lightweight, no extra database or server required

## Prerequisites

Before configuring this module, make sure you have:

- [Hugo](https://gohugo.io) (Extended version)
- [Go](https://go.dev/dl/) installed, for module resolution
- A site using the [Hinode](https://github.com/gethinode/hinode) theme
- A **public** GitHub repository
- **GitHub Discussions** enabled on that repository
- The **giscus app** installed for the repository

## Installation

Add this module to your project's `hugo.toml` (or `config.toml`) file:

```toml
[[module.imports]]
  path = "github.com/maker-center/mod-giscus"
```

Then initialize the module in your project:

```bash
hugo mod tidy
```

## Configuration

Get your repository details from [giscus.app](https://giscus.app/) and add the following configuration to your `params.toml` file (or `config/_default/params.en.toml` for language-specific files) under the `[comments]` section:

```toml
[comments]
  enabled = true
  dataRepo = "your-github-user/your-repo"
  dataRepoID = "your-repo-id"
  dataCategory = "Announcements"
  dataCategoryID = "your-category-id"
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
- `dataRepo`: Your public GitHub repository (e.g., `username/repo`)
- `dataRepoID`: Repository ID (from the Giscus configuration page)
- `dataCategory`: The GitHub Discussions category name (e.g., `Announcements`)
- `dataCategoryID`: Category ID (from the Giscus configuration page)
- `dataMapping`: How discussions are mapped to pages. `pathname` is the recommended default option
- `dataStrict`: Whether discussions should be matched strictly
- `dataReactionsEnabled`: Set to `1` to enable emoji reactions
- `dataEmitMetadata`: Controls whether Giscus emits metadata
- `dataInputPosition`: Where the comment box appears (`top` or `bottom`)
- `dataTheme`: Giscus theme. Leave blank to let the site decide, or set a specific theme (`light` or `dark`)
- `dataLang`: The language code for the Giscus interface

## Multilingual Sites

For multilingual sites, create one `params` file per language and adjust `dataLang` accordingly.

Example:

```toml
# config/_default/params.pt-br.toml
[comments]
  # Paste all other parameters here
  dataLang = "pt"
```

## Extra Settings

You can disable the comments section on specific pages by including the following in the front matter:

```yaml
showComments: false
```

## License

This project is licensed under the [MIT License](https://github.com/maker-center/mod-giscus/blob/main/LICENSE).

## Credits

Developed by [Maker Center](https://makercenter.com.br).
Powered by [giscus](https://giscus.app) and [Hinode](https://gethinode.com/).
