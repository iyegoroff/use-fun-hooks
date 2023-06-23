import { pipe } from 'pipe-ts'
import { useCallback } from 'react'

type UnknownFunction = (...params: readonly unknown[]) => unknown

export function usePipe<A extends readonly unknown[], B>(
  ab: (...a: A) => B
): (...args: A) => B

export function usePipe<A extends readonly unknown[], B, C>(
  ab: (...a: A) => B,
  bc: (b: B) => C
): (...args: A) => C

export function usePipe<A extends readonly unknown[], B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D
): (...args: A) => D

export function usePipe<A extends readonly unknown[], B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E
): (...args: A) => E

export function usePipe<A extends readonly unknown[], B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): (...args: A) => F

export function usePipe<A extends readonly unknown[], B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): (...args: A) => G

export function usePipe<A extends readonly unknown[], B, C, D, E, F, G, H>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): (...args: A) => H

export function usePipe<A extends readonly unknown[], B, C, D, E, F, G, H, I>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): (...args: A) => I

export function usePipe<
  A extends readonly unknown[],
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J
>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): (...args: A) => J

export function usePipe(...fns: readonly [UnknownFunction]): UnknownFunction {
  return useCallback(pipe(...fns), fns)
}

export function usePartial<
  Heads extends readonly unknown[],
  Tails extends readonly unknown[],
  Result
>(fn: (...args: readonly [...Heads, ...Tails]) => Result, ...heads: Heads) {
  return useCallback(
    (...tails: Tails) => fn(...heads, ...tails),
    [fn, ...heads]
  )
}
