report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/test_entire-document_0_document_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_entire-document_0_document_0_desktop_s.png",
        "selector": "document",
        "fileName": "test_entire-document_0_document_0_desktop_s.png",
        "label": "entire-document",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_entire-document_0_document_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_entire-document_0_document_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_entire-document_0_document_1_desktop_m.png",
        "selector": "document",
        "fileName": "test_entire-document_0_document_1_desktop_m.png",
        "label": "entire-document",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 6
          },
          "misMatchPercentage": "11.95",
          "analysisTime": 181
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_entire-document_0_document_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_header-tag_0_header_0_desktop_s.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_0_desktop_s.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "11.36",
          "analysisTime": 86
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_header-tag_0_header_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_header-tag_0_header_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_header-tag_0_header_1_desktop_m.png",
        "selector": "header",
        "fileName": "test_header-tag_0_header_1_desktop_m.png",
        "label": "header-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "9.69",
          "analysisTime": 153
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_header-tag_0_header_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-tag_0_nav_0_desktop_s.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_0_desktop_s.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 26,
            "height": -46
          },
          "misMatchPercentage": "9.37",
          "analysisTime": 112
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-tag_0_nav_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-tag_0_nav_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-tag_0_nav_1_desktop_m.png",
        "selector": "nav",
        "fileName": "test_nav-tag_0_nav_1_desktop_m.png",
        "label": "nav-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 26,
            "height": -46
          },
          "misMatchPercentage": "9.37",
          "analysisTime": 38
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-tag_0_nav_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-hovered_0_data-qanav-hover_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-item-hovered_0_data-qanav-hover_0_desktop_s.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qanav-hover_0_desktop_s.png",
        "label": "nav-item-hovered",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -175,
            "height": -206
          },
          "misMatchPercentage": "10.93",
          "analysisTime": 201
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-item-hovered_0_data-qanav-hover_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-hovered_0_data-qanav-hover_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-item-hovered_0_data-qanav-hover_1_desktop_m.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "test_nav-item-hovered_0_data-qanav-hover_1_desktop_m.png",
        "label": "nav-item-hovered",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -175,
            "height": -206
          },
          "misMatchPercentage": "10.93",
          "analysisTime": 232
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-item-hovered_0_data-qanav-hover_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-item-active_0_ais-active_0_desktop_s.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_0_desktop_s.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 46
          },
          "misMatchPercentage": "12.27",
          "analysisTime": 16
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-item-active_0_ais-active_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_nav-item-active_0_ais-active_1_desktop_m.png",
        "selector": "a.is-active",
        "fileName": "test_nav-item-active_0_ais-active_1_desktop_m.png",
        "label": "nav-item-active",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 46
          },
          "misMatchPercentage": "12.27",
          "analysisTime": 5
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_nav-item-active_0_ais-active_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_main-tag_0_main_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_main-tag_0_main_0_desktop_s.png",
        "selector": "main",
        "fileName": "test_main-tag_0_main_0_desktop_s.png",
        "label": "main-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "14.95",
          "analysisTime": 132
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_main-tag_0_main_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_main-tag_0_main_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_main-tag_0_main_1_desktop_m.png",
        "selector": "main",
        "fileName": "test_main-tag_0_main_1_desktop_m.png",
        "label": "main-tag",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "12.76",
          "analysisTime": 142
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_main-tag_0_main_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_0_data-qacard_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_0_data-qacard_0_desktop_s.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-default_0_data-qacard_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "18.89",
          "analysisTime": 163
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_test-card-default_0_data-qacard_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_1_data-qacard__n1_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_1_data-qacard__n1_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "test_test-card-default_1_data-qacard__n1_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_1_data-qacard__n1_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_2_data-qacard__n2_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_2_data-qacard__n2_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "test_test-card-default_2_data-qacard__n2_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_2_data-qacard__n2_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_3_data-qacard__n3_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_3_data-qacard__n3_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "test_test-card-default_3_data-qacard__n3_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_3_data-qacard__n3_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_4_data-qacard__n4_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_4_data-qacard__n4_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "test_test-card-default_4_data-qacard__n4_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_4_data-qacard__n4_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_5_data-qacard__n5_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_5_data-qacard__n5_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "test_test-card-default_5_data-qacard__n5_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_5_data-qacard__n5_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_6_data-qacard__n6_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_6_data-qacard__n6_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "test_test-card-default_6_data-qacard__n6_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_6_data-qacard__n6_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_7_data-qacard__n7_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_7_data-qacard__n7_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "test_test-card-default_7_data-qacard__n7_0_desktop_s.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_7_data-qacard__n7_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_0_data-qacard_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_0_data-qacard_1_desktop_m.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-default_0_data-qacard_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "18.89",
          "analysisTime": 240
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_test-card-default_0_data-qacard_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_1_data-qacard__n1_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_1_data-qacard__n1_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "test_test-card-default_1_data-qacard__n1_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_1_data-qacard__n1_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_2_data-qacard__n2_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_2_data-qacard__n2_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "test_test-card-default_2_data-qacard__n2_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_2_data-qacard__n2_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_3_data-qacard__n3_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_3_data-qacard__n3_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "test_test-card-default_3_data-qacard__n3_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_3_data-qacard__n3_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_4_data-qacard__n4_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_4_data-qacard__n4_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "test_test-card-default_4_data-qacard__n4_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_4_data-qacard__n4_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_5_data-qacard__n5_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_5_data-qacard__n5_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "test_test-card-default_5_data-qacard__n5_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_5_data-qacard__n5_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_6_data-qacard__n6_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_6_data-qacard__n6_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "test_test-card-default_6_data-qacard__n6_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_6_data-qacard__n6_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-default_7_data-qacard__n7_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-default_7_data-qacard__n7_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "test_test-card-default_7_data-qacard__n7_1_desktop_m.png",
        "label": "test-card-default",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-default_7_data-qacard__n7_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_0_data-qacard_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_0_data-qacard_0_desktop_s.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-hover_0_data-qacard_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "18.89",
          "analysisTime": 214
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_test-card-hover_0_data-qacard_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_1_data-qacard__n1_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_1_data-qacard__n1_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "test_test-card-hover_1_data-qacard__n1_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_1_data-qacard__n1_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_2_data-qacard__n2_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_2_data-qacard__n2_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "test_test-card-hover_2_data-qacard__n2_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_2_data-qacard__n2_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_3_data-qacard__n3_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_3_data-qacard__n3_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "test_test-card-hover_3_data-qacard__n3_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_3_data-qacard__n3_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_4_data-qacard__n4_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_4_data-qacard__n4_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "test_test-card-hover_4_data-qacard__n4_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_4_data-qacard__n4_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_5_data-qacard__n5_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_5_data-qacard__n5_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "test_test-card-hover_5_data-qacard__n5_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_5_data-qacard__n5_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_6_data-qacard__n6_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_6_data-qacard__n6_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "test_test-card-hover_6_data-qacard__n6_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_6_data-qacard__n6_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_7_data-qacard__n7_0_desktop_s.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_7_data-qacard__n7_0_desktop_s.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "test_test-card-hover_7_data-qacard__n7_0_desktop_s.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_s",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_7_data-qacard__n7_0_desktop_s.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_0_data-qacard_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_0_data-qacard_1_desktop_m.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "test_test-card-hover_0_data-qacard_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "18.89",
          "analysisTime": 127
        },
        "diffImage": "../bitmaps_test/20190429-123258/failed_diff_test_test-card-hover_0_data-qacard_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_1_data-qacard__n1_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_1_data-qacard__n1_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "test_test-card-hover_1_data-qacard__n1_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_1_data-qacard__n1_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_2_data-qacard__n2_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_2_data-qacard__n2_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "test_test-card-hover_2_data-qacard__n2_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_2_data-qacard__n2_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_3_data-qacard__n3_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_3_data-qacard__n3_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "test_test-card-hover_3_data-qacard__n3_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_3_data-qacard__n3_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_4_data-qacard__n4_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_4_data-qacard__n4_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "test_test-card-hover_4_data-qacard__n4_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_4_data-qacard__n4_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_5_data-qacard__n5_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_5_data-qacard__n5_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "test_test-card-hover_5_data-qacard__n5_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_5_data-qacard__n5_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_6_data-qacard__n6_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_6_data-qacard__n6_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "test_test-card-hover_6_data-qacard__n6_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_6_data-qacard__n6_1_desktop_m.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/test_test-card-hover_7_data-qacard__n7_1_desktop_m.png",
        "test": "../bitmaps_test/20190429-123258/test_test-card-hover_7_data-qacard__n7_1_desktop_m.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "test_test-card-hover_7_data-qacard__n7_1_desktop_m.png",
        "label": "test-card-hover",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "desktop_m",
        "error": "Reference file not found /Users/Onisko/PROjects/layout_catalog/backstop_data/bitmaps_reference/test_test-card-hover_7_data-qacard__n7_1_desktop_m.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});