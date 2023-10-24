# Hugo-Minimalist

A minimalist theme for [Hugo][hugo] built with [Tailwind CSS][tailwind_css], inspired by [Hugo PaperMod][hugo_papermod] theme.

## Screenshots

<details>

<summary>Dark Mode</summary>

![hugo-minimalist-dark][theme_dark_mode]

![hugo-minimalist-dark-single][hugominimalist_dark_single]

![hugo-minimalist-dark-grid][hugominimalist_dark_grid]

</details>

<details>

<summary>Light Mode</summary>

![hugo-minimalist-light][theme_light_mode]

![hugo-minimalist-light-single][hugominimalist_light_single]

![hugo-minimalist-light-grid][hugominimalist_light_grid]

</details>

## Installation

### Prerequisites

-   [Git][git_installation]
-   [Hugo][hugo_installation]
-   A Hugo site

    <details>

    <summary>Example based on Hugo quick start</summary>

    ```sh
    hugo new site <site-name> -f yaml
    # hugo new site my-awesome-site -f yaml
    ## use a 'yaml' for configuration file instead of 'toml'

    cd <site-name>
    # cd my-awesome-site

    git init
    ```

    </details>

### Adding the Theme

-   Add the theme using any one of the following options -

    -   Add the theme as a git submodule to the hugo site

        ```sh
        git submodule add --depth=1 https://github.com/krish-r/hugo-minimalist.git themes/hugo-minimalist
        git submodule update --init --recursive
        ```

        -   To Update, run

            ```sh
            git submodule update --remote --merge
            ```

    -   Clone/Download the theme inside the hugo site

        ```sh
        git clone --depth=1 https://github.com/krish-r/hugo-minimalist.git themes/hugo-minimalist
        ```

        -   To Update, run

            ```sh
            git pull
            ```

## Usage

-   Append this example template to the site's config file (`config.yaml`)

```yaml
# config.yaml

theme: hugo-minimalist

menu:
    main:
        - identifier: "home"
          name: "Home"
          url: "/"
          weight: 10

        ## Additional Pages
        # Single Page
        - identifier: "contact"
          name: "Contact"
          url: "/contact"
          weight: 20

        # Grid Page
        - identifier: "grid"
          name: "Grid Example"
          url: "/grid"
          weight: 30

params:
    home:
        greeting: Hello
        name: Hugo Minimalist
        shortDesc: |
            Description Line 1

            Description Line 2

    image:
        # images should be placed under "assets/images" directory under the site directory
        logo: /images/logo.png
        profile: /images/profile.png

        # favicon should be placed under "assets" directory under the site directory
        favicon: favicon.ico

enableRobotsTXT: true
```

-   `robots` (optional, to allow search engine indexing & crawling):

    -   Remove the following tag from `hugo-minimalist/layouts/partials/head.html`

        ```html
        <meta name="robots" content="noindex, nofollow" />
        ```

    -   Remove the robots.txt file from `hugo-minimalist/layouts/robots.txt`

    -   set `enableRobotsTXT` to `true` in config file

### Adding pages

Create pages under `content` subdirectory under the site directory

```sh
hugo new <page-name>.md
# hugo new contact.md
# hugo new grid.md
```

#### Using single page layout

<details>

<summary>Example `content/contact.md` page</summary>

```md
---
title: "Contact"
date: 2023-01-01T00:00:00+05:30
draft: false
---

[GitHub](github-profile-link)

[LinkedIn](linkedin-profile-link)

[Twitter](twitter-profile-link)

[Facebook](facebook-profile-link)

[YouTube](youtube-channel-link)
```

</details>

#### Using grid layout and data file

Append the following to the front matter to use the grid layout

```
type: "custom"
layout: "grid"
dataFile: "<data-file-name>"
```

<details>

<summary>Example `content/grid.md` page</summary>

```md
---
title: "Grid Example"
date: 2023-01-01T00:00:00+05:30
draft: false
type: "custom"
layout: "grid"
dataFile: "grid_data"
---

Grid Example
```

</details>

##### data file

Create data file (`grid_data.yaml`) under `content` subdirectory under the site directory

<details>
<summary>Example `data/grid_data.yaml` data file</summary>

```yaml
# example `data/grid_data.yaml`

data:
    - heading 01:
          - sub heading 01:
                - value 01
                - value 02
                - value 03
                - value 04
          - sub heading 02:
                - value 01
                - value 02
    - heading 02:
          - value 01
          - value 02
          - value 03
          - value 04
    - heading 03:
          - sub heading 01:
                - value 01
                - value 02
                - value 03
                - value 04
          - sub heading 02:
                - value 01
                - value 02
          - sub heading 03:
                - value 01
                - value 02
    - heading 04:
          - value 01
          - value 02
```

</details>

### Starting Hugo development server

-   Run hugo development server to preview sites

    ```sh
    hugo server --buildDrafts
    ```

## Useful links

-   [Hugo Quick start][hugo_quickstart] - for more details on using Hugo
-   Hugo [Hosting and Deployment][hosting_deployment] guide

## Modifying the theme

```sh
# install dependencies
cd themes/hugo-minimalist
npm install

# edit the theme and live preview (by running `hugo server`)
npm run tw-watch

# build the theme
npm run tw-build
npm run tw-build-minify
```

## Credits

-   [Hugo PaperMod theme][hugo_papermod] for the design inspiration, toggle icons and git installation instructions

[hugo]: https://gohugo.io/
[tailwind_css]: https://tailwindcss.com/
[git_installation]: https://git-scm.com/downloads
[hugo_installation]: https://gohugo.io/installation/
[hugo_quickstart]: https://gohugo.io/getting-started/quick-start/
[hosting_deployment]: https://gohugo.io/hosting-and-deployment/
[theme_light_mode]: https://github.com/krish-r/hugo-minimalist/assets/54745129/7da0360a-3502-45a6-8c4e-4e738472a43b
[theme_dark_mode]: https://github.com/krish-r/hugo-minimalist/assets/54745129/88aa5d5c-714a-4df4-9141-2e426aa0a073
[hugominimalist_light_single]: https://github.com/krish-r/hugo-minimalist/assets/54745129/3df2ed91-1fb7-4679-a88c-62515800afe5
[hugominimalist_light_grid]: https://github.com/krish-r/hugo-minimalist/assets/54745129/d7d2311a-0ae9-4700-ba73-4591dc63a249
[hugominimalist_dark_single]: https://github.com/krish-r/hugo-minimalist/assets/54745129/599df01e-49bb-4379-9eae-ce6126df7b8a
[hugominimalist_dark_grid]: https://github.com/krish-r/hugo-minimalist/assets/54745129/7e45c509-9066-41f3-8230-41ea938b4d8e
[hugo_papermod]: https://github.com/adityatelange/hugo-PaperMod/
