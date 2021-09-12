const changeCase = require('change-case');

module.exports = {
  helpers: {
    getDestinationPath: (path, name) => {
      if (!path) path = 'src/';
      const SANITIZED_PATH = path.endsWith('/') ? path.slice(0, -1) : path;
      const FILE_NAME = changeCase.paramCase(name);

      return `${SANITIZED_PATH}/${FILE_NAME}/`;
    },
    getComponentName: (name) => changeCase.pascalCase(name),
    getFileName: (name) => changeCase.paramCase(name),
  },
};
