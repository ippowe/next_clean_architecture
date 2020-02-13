module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "dsplayName": true,
        "preprocess": false,
      }
    ]
  ]
}