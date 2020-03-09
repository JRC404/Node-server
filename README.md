# Node-server
An example project of a Node.js server with no express.

The beauty of Node is that you can do everything you can do with a framework but man, it is lengthy sometimes. 

## Where to go next
You can take a look at [express.js](https://www.npmjs.com/package/express) and then to add it into your project, you just need to do a few things. 

```sh
npm i express
```

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000)