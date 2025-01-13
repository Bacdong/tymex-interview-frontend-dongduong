# TymeX Interview Frontend - Dong Duong

## Reference Links

* [React](https://react.dev/) version 18.3.1.
* [Ant Design](https://ant.design/) version 5.23.0.

## Environment

* Bun: v1.1.33
* NodeJS: v22.10.0
* React: v18.3.1
* NPX: v10.9.0
* Typescript: v5.6.2

## Environment Installation

* Install packages:

```
bun install
```

* Config environments

```
vi /.env
vi /.env.prod
```

* App configurations

```
vi /src/configs/app.config.tsx
```

## Web Serve

```bash
bun dev
bun start
```

## Build

* Using Bun

```bash
bun build
```

## Release With Versioning

* PATCH Version

```bash
bun release:patch
```

* MINOR Version

```bash
bun release:minor
```

* MAJOR Version

```bash
bun release
```

## Deployment

* Localhost (Docker)

```bash
cd bash/local
bash start_web.sh
```

* Using Docker Compose

```bash
docker compose up -d --built
```
