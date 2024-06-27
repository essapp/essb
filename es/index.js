import * as components from "./components";
export * from "./components";
export var install = function install(app) {
  Object.keys(components).forEach(function (key) {
    // @ts-ignore
    var component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};
export default {
  install: install
};