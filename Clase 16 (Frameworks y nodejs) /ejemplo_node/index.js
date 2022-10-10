

import mongoose from "mongoose";
import app from "./app.js";
const port = 3001;
mongoose
  .connect(`mongodb://localhost:27017/bdUsers`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // start the Express server
    app.listen(port, async () => {
      console.log(`App is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("🚀 ~ file: index.ts ~ line 16 ~ error", error);
  });