const CharacterAI = require("node_characterai");
const express = require('express');
const characterAI = new CharacterAI();
const app = express();
const port = 3555;


app.use(express.json());

// example:
// https://old.character.ai/chat2?char=4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ
// use only 4WOVrCApi4JYwfYwU2e5eDeFalLOkGBw6IfUZPX1XVQ
const chatcharcater = "-eR9tzXFK_pR4k4owactNsHKTgj6mt0ONCMs1BmwkP8";

(async () => {
  try {
    await characterAI.authenticateAsGuest();
    // await characterAI.authenticateWithToken('YOURAPIKEYHERE');
    console.log("Authentication with AI service successful");
  } catch (error) {
    console.error("Error authenticating with AI service:", error);
    process.exit(1); 
  }
})();

app.get('/', (req, res) => {
  res.send('Working!');
});

app.post('/ai', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) throw new Error("Question is missing in the request body");

    const chat = await characterAI.createOrContinueChat(chatcharcater);
    const response = await chat.sendAndAwaitResponse(question, true);
    const responseData = {
      text: response.text
    };
    
    res.json(responseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
