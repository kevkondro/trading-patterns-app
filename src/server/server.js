const express = require("express");
const cors = require("cors");
const { google } = require('googleapis');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Authorizes a client using service account credentials.
 *
 * @return {Promise<google.auth.GoogleAuth>}
 */
async function authorize() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  const client = await auth.getClient();

  return client;
}

/**
 * Retrieves data from a Google Sheets spreadsheet and sends it as a JSON response.
 *
 * @param {express.Request} req The HTTP request object.
 * @param {express.Response} res The HTTP response object.
 */
app.get("/data", async (req, res) => {
  try {
    const client = await authorize();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1wzzOgKLx3ox6HPBSQf62Ukf63KG8MXtgwWgpm_4dltk',
      range: 'Result estimation!A2:E',
    });
    const data = response.data.values;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
