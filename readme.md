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

```bash
bun install
```

* Config environments

```bash
vi /.env
vi /.env.development
vi /.env.staging
vi /.env.production
```

* App configurations

```bash
vi /src/@constants/app.constant.tsx
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
bun build:development
bun build:staging
bun build:production
```

## Release

```bash
bun release
bun release:development
bun release:staging
bun release:production
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
