# Interfaces vs Types in TypeScript

## 📌 Basic Concept

| Criteria   | Interface                                             | Type                                                              |
| ---------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| Definition | Used to define the structure of an object or a class. | Used to define types for variables, functions, objects, and more. |
| Syntax     | `interface Person { name: string; age: number; }`     | `type Person = { name: string; age: number; }`                    |

## 💡 Extensibility

| Criteria             | Interface                        | Type                                      |
| -------------------- | -------------------------------- | ----------------------------------------- |
| Extension            | Can be extended using `extends`. | Can be extended using `&` (intersection). |
| Multiple Inheritance | Supports multiple inheritance.   | Achieved using intersections.             |

### Example

**Interface:**

```typescript
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
```

**Type:**

```typescript
type Animal = {
  name: string;
};
type Dog = Animal & {
  breed: string;
};
```

## 🛠️ Usage and Features

| Criteria            | Interface                          | Type                                             |
| ------------------- | ---------------------------------- | ------------------------------------------------ |
| Declaration Merging | Supports merging.                  | Does not support merging.                        |
| Implements in Class | Ideal for class implementation.    | Not commonly used for classes.                   |
| Complex Types       | Limited to object-like structures. | Supports union, intersection, and complex types. |

## ⚡ Function and Callable Signatures

| Criteria       | Interface                       | Type                                   |
| -------------- | ------------------------------- | -------------------------------------- |
| Function Types | Can define callable signatures. | Supports callable signatures directly. |

### Example

**Interface:**

```typescript
interface Add {
  (a: number, b: number): number;
}
const add: Add = (x, y) => x + y;
```

**Type:**

```typescript
type Add = (a: number, b: number) => number;
const add: Add = (x, y) => x + y;
```

## ✅ Key Differences

* **Interfaces** are ideal for defining object shapes and class structures.
* **Types** are more flexible and versatile, suitable for union and intersection.
* Interfaces support declaration merging; types do not.

## 🌟 Conclusion

* Use **interfaces** when defining the shape of objects or implementing classes.
* Use **types** when you need flexible and complex type definitions.
* Both can be used interchangeably in many cases, but context matters.

---

# Differences between `any`, `unknown`, and `never` in TypeScript

## 📌 Basic Concept

| Type      | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `any`     | Represents any type. No type checking is enforced.                                            |
| `unknown` | Represents any value but requires type checking before usage.                                 |
| `never`   | Represents values that never occur, such as functions that never return (e.g., throw errors). |

## 💡 Key Differences

| Type      | Safety                | Use Case                                        |
| --------- | --------------------- | ----------------------------------------------- |
| `any`     | Unsafe                | Use when you don't care about the type.         |
| `unknown` | Safe                  | Use when the type is not known at compile time. |
| `never`   | Irrelevant (no value) | Use when a function never returns or throws.    |

### Example

```typescript
let value: any = 5;
value = "Hello";  // No error

let data: unknown = "World";
if (typeof data === "string") {
  console.log(data.toUpperCase());  // Type-safe check
}

function throwError(): never {
  throw new Error("Something went wrong!");
}
```

## 🌟 Conclusion

* Use `any` for flexibility when you are unsure about the data type.
* Use `unknown` for better type safety while handling unknown values.
* Use `never` when a function is not supposed to return, like throwing errors.
