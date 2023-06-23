# use-fun-hooks

[![npm](https://img.shields.io/npm/v/use-fun-hooks)](https://npm.im/use-fun-hooks)
[![build](https://github.com/iyegoroff/use-fun-hooks/workflows/build/badge.svg)](https://github.com/iyegoroff/use-fun-hooks/actions/workflows/build.yml)
[![publish](https://github.com/iyegoroff/use-fun-hooks/workflows/publish/badge.svg)](https://github.com/iyegoroff/use-fun-hooks/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/iyegoroff/use-fun-hooks/branch/main/graph/badge.svg?t=1520230083925)](https://codecov.io/gh/iyegoroff/use-fun-hooks)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fiyegoroff%2Fuse-fun-hooks%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/use-fun-hooks/0.0.2)
[![bundlejs](https://deno.bundlejs.com/?q=use-fun-hooks@0.0.2,use-fun-hooks@0.0.2&treeshake=[*],[{+default+}]&config={%22esbuild%22:{%22external%22:[%22react%22]}}&badge=)](https://bundlejs.com/?q=use-fun-hooks)
[![npm](https://img.shields.io/npm/l/use-fun-hooks.svg?t=1495378566925)](https://www.npmjs.com/package/use-fun-hooks)

Functional useCallbacks

## Getting started

`$ npm i use-fun-hooks`

## Overview

```js
import { pipe } from 'pipe-ts'
import { useCallback } from 'react'

export function usePipe(...fns) {
  return useCallback(pipe(...fns), fns)
}

export function usePartial(fn, ...heads) {
  return useCallback((...tails) => fn(...heads, ...tails), [fn, ...heads])
}
```

## Usage

See [test](/test/index.spec.tsx)
