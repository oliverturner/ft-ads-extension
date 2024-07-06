# FT Ads

## Overview

FT Ads is a Chrome extension intended to give users at-a-glance access to ads-related traffic properties.

Both Multi- (OAds) and Single Request Architectures (PG) are supported.

## Features

- **Ad Server** The query params of requests to the Ad Server are parsed and pretty-printed for easier reading.
- **Spoor Traffic** the body of POST requests with the query strings `type=ads:slot-requested` and `type=ads:slot-rendered` are parsed and pretty-printed for easier reading.

The unedited raw data is viewable in the summary/details element at the foot of each column

## Usage

### Development

To start the project, run:

```sh
npm start
```

This will launch the panel as a hot-reloading HTML page pre-loaded with sample data, allowing you to quickly tweak and refine the UI and behaviour

To see the extension in action you will need to install it:
1. Run `npm run dev` to generate the `/dist` folder containing the compiled assets comprising the extension
1. Open Chrome's Manage Extensions page at chrome://extensions
1. Enable "Developer mode"
1. Click "Load unpacked" and navigate to the path of your `/dist` folder

With these steps taken you should now see the extension show up:

![Chrome Extensions Panel](docs/chrome-extensions-panel.png)

Navigate to a page on FT.com and open the dev tools: the FT Ads tab should now be available:

![FT Ads Tab](docs/devtools-tab.png)


## Release [WIP]

This extension is yet to be published on the Chrome Store.

<!--
### Once publication has been set up...

1.
    ```sh
    npm run build
    ```
1. _Further details to come_
-->

## TODO

- [ ] Playwright tests
- [ ] More compact layout
- [ ] Better parity with [Google Publisher Console](https://developers.google.com/publisher-tag/guides/publisher-console): link out to
    - Line item
    - Creative detail
    - Delivery diagnostics
