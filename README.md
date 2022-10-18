To run

## `npm install`

and then

## `npm start`

To test with Jest

## `npm test`

To test E2E tests with playwright

## `npm start` 

and after app starts

`npm run test-ct`



Few notes about the assignment:

I used css grid in multiple places, which is supported from IE11 onwards. 
IE11 doesn't treat grid exactly the same as more up to date browsers, hence in order to achieve exactly same behaviour on all browsers I should add
polyfills, such as in this article: https://dev.to/theblairwitch/css-grid-in-ie11-it-s-possible-and-not-as-hard-as-you-think-okp#article-body


Things to improve:
1) Css modularity. Global css is incredibly hard to maintain with bigger apps, but left it hanging as for the demo purposes it's not an issue.
2) E2E tests could be more robust, with testing for error responses for all requests.
