# loamseason-website




# Working in windows

## Setup wsl
install wsl
run (this will install ubuntu)
`wsl --install`
Optional
`ssh -L <local-port>:<remote-host>:<remote-port> <username>@wsl.localhost`

## Switch the version to 1 because the file performance is crap for 2

`wsl -l -v` to show versions
`wsl --set-version Ubuntu 1`
## setup docker
install docker for desktop
https://docs.docker.com/desktop/wsl/
https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly
Instructions above dont quite work, have to use the cat /etc/resolv.conf the ip to use for `export DOCKER_HOST=tcp://localhost:2375`
https://learn.microsoft.com/en-us/windows/wsl/networking


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
