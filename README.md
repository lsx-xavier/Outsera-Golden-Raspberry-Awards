
# Outsera - Golden Raspberry Awards

This project showing some infos about the "bad" movies and producers ranking. It's just a preview about what that will be.

## Tech Stack

**Client:** React, vite, Axios, TailwindCSS

**Versions:** node v21.5.0 | npm 10.2.4

## Run Locally

Clone the project

```bash
  git clone https://github.com/lsx-xavier/Outsera-Golden-Raspberry-Awards.git
```

Go to the project directory

```bash
  cd Outsera-Golden-Raspberry-Awards.git (or cd "name-given-to-project")	
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Explanations about the project

### Folders

- **/src/modules/**: All the modules of the project
  - **/src/modules/MODULE_NAME/**: Folder of the specific module
    - **/src/modules/MODULE_NAME/components/**: All the components of the module
    - **/src/modules/MODULE_NAME/hooks/**: All the hooks of the module
    - **/src/modules/MODULE_NAME/services/**: All the services of the module
  - **/src/modules/MODULE_NAME/page/**: All the pages of the modules
- **/src/shared/**: All the shared components of the project
  - **/src/modules/components/**: All the components that are shared
  - **/src/modules/core/**: All the core components that are shared
  - **/src/modules/infra/**: All the infra components that are shared
  - **/src/modules/Layout/**: All components of the layout and the main layout
  - **/src/modules/router/**: All files related to the router (to navigate between pages)
  - **/src/modules/utils/**: All the utils functions that are shared


### Modules

#### ListMovies

The module that shows the list of movies. You can search by year and filter by winner or not.

#### Dashboard

The module that shows the dashboard with some stats about the movies and producers.

### Shared

#### Components

All the shared components of the project.

#### Layout

The layout of the project.

#### Router

The router of the project.

#### Utils

Some utils functions.

## License

[MIT](https://choosealicense.com/licenses/mit/)