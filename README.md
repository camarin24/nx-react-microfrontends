Here's a simple README file based on the provided project structure to guide users on how to set up and run the project:

---

# React Monorepo with Nx and Module Federation

This repository provides a starter setup for a React monorepo using Nx and Module Federation for microfrontends. The structure includes applications (`apps`) and shared libraries (`libs`).

## 📂 Project Structure

- **`apps/shell`**: The main host application (entry point for microfrontends).
- **`apps/inventory`**: A remote microfrontend.
- **`libs/auth`**: A shared library for authentication functionality.

## 🛠 Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **Nx CLI**: Install globally with `npm install -g nx`
- **Bun** (if used in the project): [Bun Installation Guide](https://bun.sh/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/camarin24/nx-react-microfrontends.git
cd nx-react-microfrontends
```

### 2. Install Dependencies

Using **npm** or **yarn**:

```bash
npm install
```

Or, if you're using **Bun**:

```bash
bun install
```

---

## ▶️ Running the Project

### Start the Host Application (`apps/shell`)

```bash
npx nx serve shell
```

or

```bash
npx nx serve shell --devRemotes=="inventory"
```

The application will be available at [http://localhost:4200](http://localhost:4200).

### Start the Remote Application (`apps/inventory`)

```bash
npx nx serve inventory
```

Ensure that the remote application is running to integrate with the host.

---

## 📚 Additional Commands

- **Build a project**:

  ```bash
  npx nx build <project-name>
  ```

  Example:

  ```bash
  npx nx build shell
  ```

- **Lint a project**:

  ```bash
  npx nx lint <project-name>
  ```

- **View the project graph**:
  ```bash
  npx nx graph
  ```

---

## 🌟 Notes

- Modify `rspack.config.js` files in the `apps/shell` directory to configure Module Federation settings.
- Shared libraries (`libs`) can be imported directly into apps for code reuse.

---
