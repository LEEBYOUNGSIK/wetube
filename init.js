import app from "./app";

var PORT = 4000;

const handleListening = () => 
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
