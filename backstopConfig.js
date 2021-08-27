'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/catalog/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: '1024px',
      width: 1024,
      height: 768,
    },
    {
      name: '1200px',
      width: 1200,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'Header tag',
      selectors: ['header'],
    },
    {
      ...basic,
      label: 'Nav tag',
      selectors: ['nav'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      selectors: ['[data-qa="nav-hover"]'],
      hoverSelector: '[data-qa="nav-hover"]',
      postInteractionWait: 1000,
    },
    {
      ...basic,
      label: 'Link with class_is-active',
      selectors: ['a.is-active'],
    },
    {
      ...basic,
      label: 'Main tag',
      selectors: ['main'],
    },
    {
      ...basic,
      label: 'Card with data-qa_card',
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basic,
      label: 'Card with data-qa_card-hover',
      selectors: ['[data-qa="card"]'],
      hoverSelector: '[data-qa="card-hover"]',
      postInteractionWait: 1000,
    },
  ],
};

module.exports = config;
