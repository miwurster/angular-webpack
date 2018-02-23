
# DEPRECATED

Unless you have very, very good reasons, consider using [`@angular/cli`](https://github.com/angular/angular-cli) in order to bootstrap, manage, and work with your Angular projects.
If you need a specialized setup, you may `export` a Webpack configuration using `@angular/cli` and go ahead from there.

---

Tour of Heroes: Editor
----------------------

This is a proof-of-concept [application](https://angular.io/docs/ts/latest/tutorial) based on the _Tour of Heroes_ Angular tutorial that uses [**webpack**](https://webpack.github.io) as module bundler and a tool for bundling the application.


### Usage

```
npm install
npm test       # Runs the unit tests
npm start      # Starts the development server
npm run build  # Runs the production build
```


### Useful Resources

* [Awesome Webpack](https://github.com/d3viant0ne/awesome-webpack)


### TODOs

- [x] Basic prod/dev webpack setup
- [x] Implement tutorial _Tour of Heroes_
- [x] Incorporate unit testing with Karma and Jasmine
- [ ] Incorporate end-to-end testing with Protractor
