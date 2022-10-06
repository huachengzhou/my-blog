## 创建命令 

```
D:\nodejsProject\my-blog>npm i -g create-react-app
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

added 67 packages, and audited 68 packages in 15s

4 packages are looking for funding
  run `npm fund` for details

2 high severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

D:\nodejsProject\my-blog>npm install -g yarn

added 1 package, and audited 2 packages in 12s

found 0 vulnerabilities

D:\nodejsProject\my-blog>yarn --version
1.22.19

D:\nodejsProject\my-blog>create-react-app vlog

Creating a new React app in D:\nodejsProject\my-blog\vlog.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1394 packages in 6m

210 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 56 packages in 29s

210 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1450 packages in 5s

210 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created vlog at D:\nodejsProject\my-blog\vlog
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd vlog
  npm start

Happy hacking!

D:\nodejsProject\my-blog>cd vlog

D:\nodejsProject\my-blog\vlog>npm start

> vlog@0.1.0 start
> react-scripts start

(node:752) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:752) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
Starting the development server...
Compiled successfully!

You can now view vlog in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.79.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully


```
