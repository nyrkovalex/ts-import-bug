# Typescript import bug reproduction repository

## The Bug
Typescript compiler incorrectly generates import statements for inferred types when ran in a folder with uppercased letters in its name O_o

**This bug is reproduced on Windows**

## Steps to reproduce
1. Clone this repository to `C:\ts-import-bug` _Important! Make sure to clone to this path_
1. Go to `Uppercased_Dir`
1. Install dependencies with `npm i`
1. Run build script with `npm run build`
1. Open `Uppercased_Dir/dist/index.d.ts`

## Expected result
* Return type of `method()` is declared as
    ```
    method(): import("./types").Merge<import("./type-a").TypeA, {
    ```

## Actual result
* Return type of `method()` is declared as
    ```
    method(): import("../../Uppercased_Dir/src/types").Merge<import("../../Uppercased_Dir/src/type-a").TypeA, {
    ```

As we can see `tsc` incorrectly generates an import statement. It includes several _up_ segments (`../`) to reach the project folder (`C:\ts-import-bug`) and then goes down to sources directory to find the referenced type when we expect it to use simple relative path `./types`.

For comparison we also provide a `./lowercased_dir`.
If reproduction steps are followed using this folder instead of an uppercased one the resulting import statements would be generated as expected.