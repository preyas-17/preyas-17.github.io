<script>
  // Quartz renders Markdown into the page body, so we redirect via JS.
  // Using a relative URL keeps this compatible with non-root deployments.
  ;(() => {
    const target = "./About-Me"
    try {
      window.location.replace(target)
    } catch {
      window.location.href = target
    }
  })()
</script>

<noscript>
  <p>
    JavaScript is disabled — open <a href="./About-Me">About Me</a>.
  </p>
</noscript>

Redirecting to [About Me](./About-Me)…
