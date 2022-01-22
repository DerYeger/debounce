/**
 * Debounce a callback with an optional delay.
 * @param cb - The callback that will be invoked.
 * @param delay - A delay after which the callback will be invoked.
 * @returns The debounced callback.
 */
export function debounce(cb: () => void, delay?: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timeout: any = undefined
  return () => {
    if (timeout !== undefined) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => cb(), delay)
  }
}
