# SETUP FROM SCRATCH

#### Inits

````
npm install -g nodemon ts-node prettier typescript

npm init

npm install dotenv express joi mongoose

npm install --save-dev typscript @types/express
````

#### Preliminary
*add build, start and lint script to package.json file*
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node build/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint . --ext .ts"
  }
}
```

#### TypeScript ESLint & Config Init
```
tsc --init
```

```json
//example file (Visit https://aka.ms/tsconfig to read more about this file)
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/*"],
  "exclude": ["node_modules"]
}
```

```shell
#Run the following commands to setup ESLint in your TypeScript project
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install eslint-plugin-import --save-dev
```

```json
//create a file named .eslintrc
//use the following starter config.
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        "ignoreParameters": true
      }
    ],
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-new": 0,
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": "warn",
    "quotes": [2, "single", { "avoidEscape": true }],
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "extends": [
    "plugin:import/typescript",
    "plugin:import/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}

```

```eslint
#Create an .eslintignore in order to prevent ESLint from linting stuff we don't want it to.
node_modules
build
```
