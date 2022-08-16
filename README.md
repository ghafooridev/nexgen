# Contributing to Immorise

The following is a set of guidelines for contributing to the Immorise App.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

# Guideline

### Structure of folders

1.  All `assets` including fonts should go to the `src/assets/fonts`.
2.  All `assets` including images should go to the `src/assets/images`.
3.  All `components` that are used in the pages which are indicated as forms should go to `src/components/forms`.
4.  All `components` that are used by more than one `pages` or `forms` go inside `src/components/generic`.
5.  The `layout` which used as a container for all pages in the app should be in the `src/components/layout`.
6.  The `config` folder is for environment variables configuration. They belong in `src/config`.
7.  All constant values and parameters which are used globally across the project should go inside `src/constants`.
8.  All custom hooks used in components should have a folder inside `src/hooks` and all of them should start the with "use" keyword.
9.  In terms of using 3rd party libraries, create a folder for each of them in `src/lib`.
10. All `pages` that refer to a specific route in the NextJS application should be defined in `src/pages` (this is a NextJS convention). This folder also includes the predefined files to manage NextJS behavior like `_error.tsx`,`_app.tsx`, and `_document.tsx`.

11. All global styles should be inside `src/styles`. It also includes a folder at `src/styles/pages` which contains the styles for each particular page and the name of each style file should be represented by the name of the page followed by `.module.scss`. The name of the page should be converted to `snake-case`. For example, the style of the login page should be `login-page.module.scss`

---

# Coding style

1. The import/order plugin, which is configured with eslint by this [document](https://github.com/import-js/eslint-plugin-import), decides the order of all the imports. They should be listed according to the following ordering:

   - 1. Built-in packages/modules
   - 2. External packages/modules/functions
   - 3. Internal packages/modules/functions
   - 4. Parent components
   - 5. Sibling components
   - 6. Types and interfaces

2. The description of each variable such as a functional component, a util function, a custom hook, etc. should be documented with [JSdoc](https://jsdoc.app/) syntax and determine the `function name`,`params`,`return value` (when the function is not a React component),`description` and other information deemed useful.

---

# Conventional Commit & Branches

1. All `commit messages` should follow following convention:

- `<structural elements (feat - fix ....)>:<taskNO><space>[task description]`
  EX: feat:PLAT-100 Implement the list of projects

2. Each `branch name` should start with its task number together with the name of the task, as in `PLAT-100-project-list`, all in `snake-case`.

---

# References

Make sure you read the following style guide and the official document of the packages used in the app :

- Github Repository [here](https://github.com/techtile-software/immorise-nextjs-frontend)
- NextJS official documentation [here](https://nextjs.org/docs)
- ReactJS official documentation [here](https://reactjs.org/)
- TypeScript official documentation [here](https://www.typescriptlang.org/)
- ESlint Rules [here](https://eslint.org/docs/latest/rules)
- Documentation [here](https://jsdoc.app/)
- State management [here](https://redux-toolkit.js.org/)
- Testing library [here](https://testing-library.com/)
- Form validation [here](https://docs.yup.io/)
- Forms library [here](https://formik.org/)
- Package manager [here](https://yarnpkg.com/)
- Conventional commit [here](https://www.conventionalcommits.org/en/v1.0.0/)
- Change log reference [here](https://github.com/CookPete/auto-changelog)
- Javascript style guide from [Airbnb](https://github.com/airbnb/javascript)
- SASS guidelines [here](https://sass-guidelin.es/#architecture)
- CSS guidelines [here](https://gist.github.com/fleishmanhillard/9983654)

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

# Project test

```
yarn test
```

<!-- NOT YET IMPLEMENTED
# Project documentation
```
yarn docs
```

# Project changelog
```
yarn changelog
```
-->
