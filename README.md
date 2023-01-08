# Hugo-Minimalist

A minimalist theme for [Hugo][hugo] built with [Tailwind CSS][tailwind_css], inspired by [Hugo PaperMod][hugo_papermod] theme.

## Screenshots

![hugo-minimalist-dark][theme_dark_mode]

![hugo-minimalist-light][theme_light_mode]

## Installation

-   Add the theme as a git submodule for your hugo site

    ```sh
    git submodule add --depth=1 https://github.com/krish-r/hugo-minimalist.git themes/hugo-minimalist
    git submodule update --init --recursive
    ```

    -   To Update, run

        ```sh
        git submodule update --remote --merge
        ```

-   Clone/Download the theme inside your hugo site

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
    ```

-   `robots` (optional):

    -   Remove the following tag from you `hugo-minimalist/layouts/partials/head.html`

        ```html
        <meta name="robots" content="noindex, nofollow" />
        ```

    -   Remove the robots.txt file from `hugo-minimalist/layouts/robots.txt`

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
[theme_light_mode]: https://user-images.githubusercontent.com/54745129/211208294-76b66279-d5f9-4eb6-8c1c-d60064be03c9.png
[theme_dark_mode]: https://user-images.githubusercontent.com/54745129/211208296-865ee594-8645-4967-8d46-ed487666212e.png
[hugo_papermod]: https://github.com/adityatelange/hugo-PaperMod/
