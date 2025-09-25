; (function () {
  // URL of the site where the iframe content is hosted
  const site = "https://reich.tf"

  // Path to the iframe content
  const path = "iframe-index.html"

  // Path to the iframe-resizer parent script
  const parentScript = "node_modules/@iframe-resizer/parent/index.umd.min.js"

  // Options for iframe-resizer
  const options = {
    log: "collapsed",
  }

  // iframe configuration
  const width = "100%"
  const height = "100vh"

  // Create the iframe
  const iframe = document.createElement("iframe")
  iframe.src = `${site}/${path}`
  iframe.style.width = width
  iframe.style.height = height

  // Load iframe-resizer parent script
  const script = document.createElement("script")
  script.src = `${site}/${parentScript}`
  script.async = true
  script.fetchPriority = "high"
  script.onload = () => iframeResize(options, iframe)
  script.onerror = function () {
    console.error("Failed to load iframe-resizer library.")
  }

  // Insert iframe and script files after this script
  document.currentScript.after(iframe, script)
})()
