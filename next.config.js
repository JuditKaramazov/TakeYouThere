// @ts-check
const pkg = require('./package.json')

// Starts a command line process to get the git hash.
const commitHash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()

/**
 * @type {import('next').NextConfig}
 **/

const { withGlobalCss } = require('next-global-css')

const withConfig = withGlobalCss()

module.exports = withConfig({
  env: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    APP_VERSION: pkg.version,
    APP_LICENSE: pkg.license,
    HOMEPAGE: pkg.homepage,
    BUG_TRACKER: pkg.bugs,
    REPOSITORY_URL: pkg.repository.url,
    COMMIT_HASH: commitHash
  }
})
