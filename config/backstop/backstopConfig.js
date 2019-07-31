'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/catalog/',
};

const config = {
  ...backstop,
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
      ...basic,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'header-tag',
      selectors: ['header'],
    },
    {
      ...basic,
      label: 'nav-tag',
      selectors: ['nav'],
    },
    {
      ...basic,
      label: 'nav-item-hovered',
      selectors: ['[data-qa="nav-hover"]'],
      hoverSelector: '[data-qa="nav-hover"]',
      postInteractionWait: 1000,
    },
    {
      ...basic,
      label: 'nav-item-active',
      selectors: ['a.is-active'],
    },
    {
      ...basic,
      label: 'main-tag',
      selectors: ['main'],
    },
    {
      ...basic,
      label: 'test-card-default',
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basic,
      label: 'test-card-hover',
      hoverSelector: '[data-qa="card-hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
    },
  ],
};

module.exports = config;
