# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

This repository hosts the Ledger Live Platform SDK.

## JavaScript styleguide

- ES6+ features.
- [prettier](https://prettier.io/) for formatting convention. Check `yarn format:check`.
- ESLint is used to enhance code quality. Check with `yarn lint:check`.
- TypeScript is used to typecheck the library. Check with `yarn build`.

> NB. for the 3 points above, the best is to have integration of Prettier,
> ESlint, Flowtype in your text editor (there are plugin for most editors).

## Documentation

Documentation is paramount for any project, especially a public and open sourced one.

To document this project, we use the popular [diataxis](https://diataxis.fr/) documentation framework.

The documentation content, either generated or manually added, can be found under the [`docs`](./docs/) folder.

We use [typedoc](https://typedoc.org/) to generate our _reference_ documentation, located under [`docs/reference`](./docs/reference/), don't forget to add appropriate comments to your code.
