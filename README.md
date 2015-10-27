# Notes (example angularJS application)
### Instructions:
Prepare and build a simple AngularJS “Notes” application. We require to be able to install and run
the Application in node.js. Repository clone will be used to deploy Application.
BSC prepared mock REST API to be used during the development. See:
- Root URL: http://private-9aad-note10.apiary-mock.com/

### Available methods:
- GET /notes
- GET /notes/{id}
- POST /notes
- PUT /notes/{id}
- DELETE /notes/{id}

### Functional requirements:
- After installation and application starting on the address localhost:9000 browser will display
starting page with the list of Notes.
- It is possible to display detail, edit, delete and crete new Note (mock interface will already
return same data, the goal of this task is to call right REST methods).
- In application it will be possible to switch language EN/RU (CZ, SK or any other) (values and
labels)

#How to install and run  application

1) Clone this repository and (or) download files

2) Install nodeJS

3) You need Gulp installed globally:
```sh
npm i -g gulp
```
4) Go to directory, where you saved files

5) install packages
```sh
npm i gulp-connect gulp-concat-css gulp-minify-css gulp-autoprefixer gulp-minify-html gulp-uglify gulp-imagemin imagemin-pngquant gulp-html-replace --save-dev
```

6) Run the command 
```sh
gulp
```
and application starting on the address localhost:9000

### Tests
You can run the tests that have been written using protractor js library. All tests are in the directory **tests**. Please run the file **conf.js**
