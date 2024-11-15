module.exports = {
  id: "layout_catalog_test",
  viewports: [
    {
      label: "desktop",
      width: 1920,
      height: 1080,
    },
    {
      label: "tablet",
      width: 768,
      height: 1024,
    },
  ],
  scenarios: [
    {
      label: "Home Page",
      url: "http://localhost:8080",
      selectors: ["document"],
      misMatchThreshold: 0.1,
    },
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  engine: "puppeteer",
  report: ["browser"],
  debug: false,
};
