# Open Rivers

A template for a campaign or a charity that tells its cause as one long story: a hero over the river, three chapters, numbers the width of the page that count up as they arrive, a river line drawn down the page as you read, and a donate band. Its sample content, a clean-up of a made-up river called the Wend, is made up, numbers and all, and marked as such on the page and in `src/content`.

It is a static Astro site: no server, no database and no secret. Its donate band takes no payment; every Donate button goes to an address you set.

## Start it

- **In Piny:** pick it in the Templates tab.
- **Outside Piny:** `npm create astro -- --template github:pinylabs/open-rivers`, then `pnpm install` and `pnpm dev`.

It needs Node 22 or later and pnpm.

## Its words and its donate address

The words, numbers and photos are Astro content collections in `src/content`, so they change without touching the pages:

- `chapters/`: one Markdown file a chapter, with its number, kicker, heading and photo; the body is its text.
- `stats.json`: the numbers. A `wide` one is a band the width of the page; the `row` ones after the same chapter share a row.
- `amounts.json`: the gifts in the donate band, each saying what it buys; one is `chosen` when the page opens.
- `settings.json`: the site's name, the hero, the donate band's words and `donateUrl`.

`donateUrl` is where every Donate button goes: a Stripe Payment Link or your charity platform's donation page. The sample points to the template's own `/donate/` page, which says where to set it. In the donate band, the Once/Monthly choice and the amount change the button's words and add `?amount=…&often=…` to the address, with a few lines of script; without script the button simply goes to the address.

## Its look

The pages are styled with Tailwind CSS 4. Every colour, face, size, radius and measure is a token in `src/styles/theme.css`, so the look changes there: `primary` is the river green, `secondary` the water, `tertiary` the lime and `neutral` the chalk and ink, each a scale from 50 to 950. `src/styles/global.css` holds the page column, the river line and the motion. Light and dark follow the visitor's system, and all motion stops under `prefers-reduced-motion`.

## Photos

They are linked from Unsplash and never copied into this repository:

- The hero and the donate page: [Paulo Silva](https://unsplash.com/@pauloalbertosilva) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-river-running-through-a-forest-filled-with-lots-of-trees-T79k0zdkR1A), not copied.
- Chapter one, the problem: [Abyan Athif](https://unsplash.com/@abyanathif) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/a-bottle-floating-on-top-of-a-body-of-water-x5bgLqFRLsg), not copied.
- Chapter two, the clean-ups: [Vitaly Gariev](https://unsplash.com/@silverkblack) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/volunteers-cleaning-up-litter-on-a-sandy-shore-ciUuGGd1OKo), not copied.
- Chapter three, what comes back: [Jonah Townsley](https://unsplash.com/@jonah_t) on Unsplash, [Unsplash License](https://unsplash.com/license), linked from [its page](https://unsplash.com/photos/clear-water-over-rocky-riverbed-h5zG-NqeYQo), not copied.

## Licence

MIT, in [LICENSE](LICENSE). Made by the Pinies in [Piny](https://piny.studio/home/). The Piny Studio mark in `public/brand` is Piny's and is not covered by this template's MIT licence.
