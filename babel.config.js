const presets = [
  [
    "@babel/preset-env",
    {
      // preset a utilizar
      targets: {
        // versiones de navegadores en las que queremos que nuestro código sea compatible
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },

      // utiliza polyfills para los navegadores especificados en la opción targets anterior
      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

module.exports = { presets };
