## How do we declare types in TS?

We can do so by using `type` and `interface` operators, as follows:

```ts
type animal = {
    name: string,
    species: string,
    age: number
}

interface animal {
    name: string,
    species: string,
    age: number
}
```

The primary difference between the two is that a `type` is _closed_ - once declared, it cannot be extended or redeclared to add more properties.

For example,

```ts
interface animal {
    name: string,
}

interface animal {
    species: string,
}

interface animal {
    age: number,
}

const Whisky: animal = {
    name: 'Whisky',
    species: 'Canis familiaris',
    age: 2,
}
```
 In the above example, each definition of the `animal` interface describes a single property. TS merges all declarations into a single interface - making `Whisky` a valid object of type `animal`.
