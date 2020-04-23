# Conflict between React & Vue Next JSX typings

When loading both @types/react and vue-next beta 3, TSX never compiles. For projects who are trying to move from react to vue, it can be a great barrier of entry.

To run into the problem just run the following commands in a prompt

```sh
git checkout
npm ci
npm start
```

When I do this, I read the following error:

```sh
node_modules/@types/react/index.d.ts:2966:19 - error TS2430: Interface 'IntrinsicElements' incorrectly extends interface 'NativeElements'.
  Types of property 'symbol' are incompatible.
    Type 'SVGProps<SVGSymbolElement>' is not assignable to type 'ElementAttrs<SVGAttributes>'.
      Type 'SVGProps<SVGSymbolElement>' is not assignable to type 'SVGAttributes'.
        Types of property 'autoReverse' are incompatible.
          Type 'Booleanish' is not assignable to type 'string | number'.
            Type 'false' is not assignable to type 'string | number'.

2966         interface IntrinsicElements {
                       ~~~~~~~~~~~~~~~~~
```