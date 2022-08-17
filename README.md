# Contributing to NexGen

The following is a set of guidelines for contributing to the NexGen App.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

# Guideline

### Structure of folders

1.  The constant file includes all the constant data which are used globally located in `src/constants`.

2.  All custom hooks used in components should have a folder inside `src/hooks` and all of them should start the with "use" keyword.

3.  All `pages` that refer to a specific route in the NextJS application should be defined in `src/pages` (this is a NextJS convention). This folder also includes the predefined files to manage NextJS behavior like `_app.tsx`

4.  All global styles should be inside `src/styles`. It contains the styles for each particular page and the name of each style file should be represented by the name of the page followed by `.module.scss`.

5.  The editorconfig and prettierrc file contains all attribute for corresponding editor code style in each IDEs

6.  eslint file expose the rules for linting the project

7.  tsconfig and next.config file include the configuration of TypeScript and Next

---

# Coding style

The import/order plugin, which is configured with eslint by this [document](https://github.com/import-js/eslint-plugin-import), decides the order of all the imports. They should be listed according to the following ordering:

- 1.  Built-in packages/modules
- 2.  External packages/modules/functions
- 3.  Internal packages/modules/functions
- 4.  Parent components
- 5.  Sibling components
- 6.  Types and interfaces

---

# References

we are using some frameworks and third parties in this app and we could refer to them by following links

- NextJS official documentation [here](https://nextjs.org/docs)
- ReactJS official documentation [here](https://reactjs.org/)
- TypeScript official documentation [here](https://www.typescriptlang.org/)
- ESlint Rules [here](https://eslint.org/docs/latest/rules)
- Fake Api documentation [here](https://reqres.in/)
- Form validation [here](https://docs.yup.io/)
- Forms library [here](https://react-hook-form.com/)
- Package manager [here](https://yarnpkg.com/)
- Javascript style guide from [Airbnb](https://github.com/airbnb/javascript)
- SASS guidelines [here](https://sass-guidelin.es/#architecture)

---

# Project setup

```
yarn install
```

# Project run

```
yarn dev
```

# Project build for production

```
yarn build
```

# Project lint

```
yarn lint
```
