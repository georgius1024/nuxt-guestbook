# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Create DB
```bash
createdb nuxt_guestbook
```

```bash
psql -h localhost -U postgres -d nuxt_guestbook
```

```bash
create table guestbook (id char(36) primary key, title varchar(128), author varchar(80), text text,created_at timestamp );
```

```bash
insert into guestbook values('123', 'TTT', 'ME', 'NOT NOW', NOW());
```

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
