export function wait(duration: number) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, duration)
  })
}
