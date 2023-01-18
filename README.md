# Hugo-Minimalist

A minimalist theme for [Hugo][hugo] built with [Tailwind CSS][tailwind_css], inspired by [Hugo PaperMod][hugo_papermod] theme.

## Screenshots

### Dark Mode

![hugo-minimalist-dark][theme_dark_mode]

![hugo-minimalist-dark-single][hugominimalist_dark_single]

![hugo-minimalist-dark-grid][hugominimalist_dark_grid]

### Light Mode

![hugo-minimalist-light][theme_light_mode]

![hugo-minimalist-light-single][hugominimalist_light_single]

![hugo-minimalist-light-grid][hugominimalist_light_grid]

## Installation

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

-   Add this to config file

    ```yaml
    # config.yaml
    theme: hugo-minimalist

    menu:
        main:
            - identifier: "home"
              name: "Home"
              url: "/"
              weight: 10
            - identifier: "contact"
              name: "Contact"
              url: "/contact"
              weight: 20
            # Additional Menus

    params:
        home:
            greeting: Hello
            name: User
            shortDesc: |
                Description Line 1

                Description Line 2

        image:
            # images should be placed under "assets/images" directory under the site directory
            logo: /images/logo.png
            profile: /images/profile.png
            favicon: favicon.ico

    enableRobotsTXT: true
    ```

-   `robots` (optional):

    -   Remove the following tag from `hugo-minimalist/layouts/partials/head.html`

        ```html
        <meta name="robots" content="noindex, nofollow" />
        ```

    -   Remove the robots.txt file from `hugo-minimalist/layouts/robots.txt`

    -   set `enableRobotsTXT` to `false` in config file

### Modifying the theme

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
[theme_light_mode]: https://user-images.githubusercontent.com/54745129/213254674-9831fce2-b92d-47fc-af1b-0bd28762631a.png
[theme_dark_mode]: https://user-images.githubusercontent.com/54745129/213254752-ba81d522-d5c7-46ff-a58d-c88647af90bf.png
[hugominimalist_light_single]: https://user-images.githubusercontent.com/54745129/213254703-c3def5bc-580d-4962-9704-b1c055543c99.png
[hugominimalist_light_grid]: https://user-images.githubusercontent.com/54745129/213254717-fab9cf5a-3a5f-46e6-b278-ee96007d1850.png
[hugominimalist_dark_single]: https://user-images.githubusercontent.com/54745129/213254928-13d023e7-0089-4d85-b500-58e34c627c84.png
[hugominimalist_dark_grid]: https://user-images.githubusercontent.com/54745129/213254969-fd86e3a6-f2ae-4fa8-b13d-de6af8c1eea4.png
[hugo_papermod]: https://github.com/adityatelange/hugo-PaperMod/
