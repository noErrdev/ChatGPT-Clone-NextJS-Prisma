/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        // customKey: 'my-value',
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
    experimental: {
        appDir: true,
        modern: true,
        dynamicImports: true,
        css: true
    }, 
    webpack(config) {
      config.module.rules.push({
          test: /\.js$/,
          use: {
              loader: '@swc/loader',
              options: {
                  jsc: {
                      parser: {
                          syntax: 'ecmascript',
                          jsx: true
                      },
                      transform: {
                          react: true
                      }
                  }
              }
          }
      });
      return config;
  }
}

module.exports = nextConfig
