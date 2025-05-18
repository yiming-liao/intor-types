# IntorTypes

A lightweight, strictly typed TypeScript declaration package for the [Intor](https://github.com/yiming-liao/intor) i18n library.  
This package provides core type definitions for translation message structures, fallback mechanisms, and rich replacement logic used within the Intor internationalization framework.

---

## Features

- **Comprehensive type declarations** for message formats and translation keys
- Support for **nested translation message structures**
- Types for **fallback translation handling**
- Strongly typed **rich replacement tokens and components**
- Easily consumable by projects using TypeScript to enhance type safety and developer experience

---

## Installation

```bash
npm install intor-types
```

or use **yarn**

```bash
yarn add intor-types
```

---

## Usage

- Import the types directly in your TypeScript code to ensure consistent typings across your i18n implementation:

```typescript
import type { MessageRecord } from "intor-types";

const messages: MessageRecord = {
  greeting: "Hello",
  farewell: "Goodbye",
  nested: {
    welcome: "Welcome to Intor",
  },
};
```
