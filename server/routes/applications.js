const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

// Configure Google Sheets credentials
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your/credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = 'your_spreadsheet_id';

router.post('/submit', async (req, res) => {
  try {
    const {
      submission_id,
      application_date,
      discord_id,
      roblox_id,
      date_of_birth,
      speaks_english,
      has_microphone,
      voice_call_comfort,
      timezone,
      network_level,
      why_staff,
      previous_experience,
      enjoy_most,
      good_fit,
      handle_promotions,
      handle_mod_calls,
      respect_role,
      higher_standard,
      accept_feedback,
      hour_requirement,
      attend_meetings,
      contact_policy,
      additional_questions,
    } = req.body;

    // Prepare the row data
    const values = [
      [
        submission_id,
        application_date,
        discord_id,
        roblox_id,
        date_of_birth,
        speaks_english,
        has_microphone,
        voice_call_comfort,
        timezone,
        network_level,
        why_staff,
        previous_experience,
        enjoy_most,
        good_fit,
        handle_promotions,
        handle_mod_calls,
        respect_role,
        higher_standard,
        accept_feedback,
        hour_requirement,
        attend_meetings,
        contact_policy,
        additional_questions,
      ],
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:W', // Adjust range based on your columns
      valueInputOption: 'RAW',
      resource: { values },
    });

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

module.exports = router;
