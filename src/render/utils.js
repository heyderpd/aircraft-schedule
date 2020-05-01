export const on_ready = load => {
  const on_ready = () => setTimeout(
    load,
    200,
  )

  document.readyState !== 'complete'
    ? document.addEventListener('DOMContentLoaded', load)
    : on_ready()
}
