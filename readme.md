# Ionic starter kit

This repository represents a boilerplate to start work with Ionic mobile project. It's a blank project with prepared Gulp tasks, hooks and angularJS organization to make a modular and reusable code.
The code organization is inevitable when project starts to grow and application becomes much harder to maintain. So the key is to organize your files well and make your logic modular and reusable through whole app (and for other projects as well).

### Blog posts
We also described every detail of creating the project in series of blog posts where you can go step by step to see how every part of the application fits together.
[Introduction](http://netmedia.io/mobile-development/4-steps-to-properly-set-mobile-app-project-using-ionic-framework-introduction_5356)
[Blank Ionic mobile project setup (1/4)](hhttp://netmedia.io/mobile-development/blank-ionic-mobile-project-setup_5392)
[Organize AngularJS code (2/4)](http://netmedia.io/mobile-development/organize-angularjs-code-mobile-app-project-ionic-framework_5413)
[Gulp tasks (3/4)](http://netmedia.io/mobile-development/gulp-tasks-34-steps-to-properly-set-mobile-app-project-using-ionic-framework_5420)
[Cordova hooks (4/4)](http://netmedia.io/mobile-development/cordova-hooks-properly-set-mobile-app-project-using-ionic-framework_5433)

### Quick start
There's only a few steps you have to do in order to run the application. It implies you have installed all necessary tools for building Ionic project (android/ios sdk, ionic, cordova, node, git ...) which is not covered in this topic. Also, you have to be in root project directory when executing the following commands.

***Clone git repository***
```javascript
$ git clone https://github.com/netmedia/ionic-starter-kit
```

***Install dependencies***
```javascript
$ npm install
$ gulp install
```

*```npm install```* command installs all dependencies listed in *package.json* file, required for runnung Gulp tasks.

*```gulp install```* command installs ionic javascript files and it's dependencies (angular scripts) from repository listed in *bower.json* file. This way we don't have to manually download and include all ionic scripts in the project, but only point to Ionic github repository. Gulp task will take care for the rest.

***Add platform***
```javascript
$ ionic platform add android/ios
```

***Build application***
```javascript
$ ionic build android/ios [--production]
```

*--production* flag means that application will be shipped with minified and uglified javascript/css assets and optimized for production. Unnecessary files will be deleted and excluded from executable file (.apk/.ipa) so the application will be smaller size when uploading on Google play and Apple store. Also, the app version will be automatically increased by one (only the patch number e.g. 0.0.1 --> 0.0.2).

***Run application in browser***
```javascript
$ ionic serve [--nolivereload]
```

*--nolivereload* flag disables browser to be reloaded after every change made in the code. This helps Gulp *watch* task to build and bundle all assets into single file but you'll have to reload browser manually.