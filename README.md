# MyMonorepo

✨ Hey! this is react prectice repo. don't forget to click on start ✨.

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve project-1
```

To create a production bundle:

```sh
npx nx build project-1
```

To see all available targets to run for a project, run:

```sh
npx nx show project project-1
```

## Add new projects

While you could add new projects to your workspace manually,

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively,
