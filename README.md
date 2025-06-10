# Lazy Daisy

![Lazy Daisy Banner](./banner.png)

- ⚡ Nuxt 3 with Vite for fast development
- 🎨 DaisyUI for prebuilt Tailwind components
- 🔧 Built-in dark/light theme support
- 🧱 Scalable file structure for apps and dashboards
- 📁 Auto-imported components & composables
- ✅ ESLint + Prettier configured
- 📝 **Form Library**: Comprehensive form components with Vee-Validate & Yup

## Why

I am lazy and like to have lots of micro-projects with the same stack.

[Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
[Daisy Ui Documentation](https://daisyui.com/)

## Features

### Form Library

A comprehensive form library built with DaisyUI, Reka UI v2, Vee-Validate, and Yup:

- 🎨 **DaisyUI Integration**: Beautiful, accessible form components
- ✅ **Vee-Validate**: Powerful form validation with real-time feedback
- 📝 **Yup Schemas**: Type-safe validation schemas
- 🎯 **TypeScript Support**: Full type safety throughout
- 🔄 **Reactive Forms**: Real-time validation and state management

**Components:**

- `FormField` - Base field wrapper with validation
- `FormInput` - Text input with validation
- `FormTextarea` - Multi-line text input
- `FormSelect` - Dropdown select
- `FormCheckbox` - Single checkbox
- `FormRadioGroup` - Radio button group
- `Form` - Form wrapper with validation context
- `FormButton` - Styled button with loading states

**Demo:** Visit `/form-library-demo` to see all components in action.

**Documentation:** See [docs/form-library.md](./docs/form-library.md) for comprehensive documentation.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

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
pnpm build

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
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
