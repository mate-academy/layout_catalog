report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "8.01",
          "analysisTime": 61
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Entire_document_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "6.84",
          "analysisTime": 59
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Entire_document_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "6.65",
          "analysisTime": 40
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Header_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "5.68",
          "analysisTime": 141
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Header_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -70,
            "height": 0
          },
          "misMatchPercentage": "12.87",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -70,
            "height": 0
          },
          "misMatchPercentage": "12.87",
          "analysisTime": 54
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "8.10",
          "analysisTime": 50
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Main_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -6
          },
          "misMatchPercentage": "6.91",
          "analysisTime": 54
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Main_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 225
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 224
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 155
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 272
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 154
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 150
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 138
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 18
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 218
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 196
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 243
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 155
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 120
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 222
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 220
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 190
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 241
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 198
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 20
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 219
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 24
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 85
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 16
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 148
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 225
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 17
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 247
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 147
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 119
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20230304-154421/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 3
          },
          "misMatchPercentage": "1.49",
          "analysisTime": 103
        },
        "diffImage": "../bitmaps_test/20230304-154421/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    }
  ]
});