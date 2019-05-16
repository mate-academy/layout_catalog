'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'test', // name of the test
  url: 'http://localhost:8080',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/catalog/',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ['[data-qa-hidden]'],
  removeSelectors: ['[data-qa-remove]'],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true,
};

module.exports = {
  id: 'test',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'desktop_s',
      width: 1024,
      height: 768,
    },
    {
      name: 'desktop_m',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basicScenario,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basicScenario,
      label: 'header-tag',
      selectors: ['header'],
    },
    {
      ...basicScenario,
      label: 'nav-tag',
      selectors: ['nav'],
    },
    {
      ...basicScenario,
      label: 'nav-item-hovered',
      selectors: ['[data-qa="nav-hover"]'],
      hoverSelector: '[data-qa="nav-hover"]',
      postInteractionWait: 1000,
    },
    {
      ...basicScenario,
      label: 'nav-item-active',
      selectors: ['a.is-active'],
    },
    {
      ...basicScenario,
      label: 'main-tag',
      selectors: ['main'],
    },
    {
      ...basicScenario,
      label: 'test-card-default',
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basicScenario,
      label: 'test-card-hover',
      hoverSelector: '[data-qa="card-hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
    },

    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 1,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
