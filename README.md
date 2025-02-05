# TanStack Query vs React Query

TanStack Query and React Query are essentially the same library, but the difference lies in naming and branding.

## 1. React Query (Old Name)
- Initially, this library was named **React Query** and was designed specifically for managing server state in React applications.
- It became extremely popular for handling data fetching, caching, and synchronization in React projects.

## 2. TanStack Query (New Name)
- As the library evolved, the team behind it decided to **expand support beyond React**.
- It was **rebranded as "TanStack Query"** to support multiple frameworks like **React, Vue, Solid, and Svelte**.
- The core functionality remains the same, but the name **TanStack Query** is now used for the broader multi-framework version.

## Key Differences

| Feature          | React Query (Old) | TanStack Query (New) |
|-----------------|------------------|----------------------|
| **Name**        | React Query       | TanStack Query      |
| **Framework Support** | Only React | React, Vue, Solid, Svelte |
| **Package Name** | `@tanstack/react-query` (renamed) | `@tanstack/query-core` for core features |
| **Functionality** | Same as TanStack Query | Same as React Query but supports other frameworks |

## 3. Which One Should You Use?
- If you're working with **React**, you should install **TanStack Query for React**:
  ```bash
  npm install @tanstack/react-query
  ```
- If you're using **Vue, Solid, or Svelte**, you can install the respective package:
  ```bash
  npm install @tanstack/vue-query  # For Vue
  npm install @tanstack/solid-query # For Solid.js
  npm install @tanstack/svelte-query # For Svelte
  ```

## 4. Conclusion
- **"React Query" is now part of "TanStack Query."**
- If you're using **React**, you can still call it React Query, but officially, the name is now **TanStack Query** because it supports multiple frameworks.
- The **functionality remains unchanged**—only the branding and support for more frameworks have been updated. 🚀
