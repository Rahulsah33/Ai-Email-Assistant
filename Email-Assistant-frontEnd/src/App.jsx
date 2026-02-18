import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  CircularProgress,
} from "@mui/material";

const App = () => {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        },
      );

      setGeneratedReply(response.data);
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        AI Email Generator
      </Typography>

      <Box sx={{ mx: 3, display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel>Tone (optional)</InputLabel>
          <Select
            value={tone}
            label="Tone (optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="formal">Formal</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? <CircularProgress size={24} /> : "Generate Reply"}
        </Button>
      </Box>

      {generatedReply && (
        <Box
          sx={{
            mx: 3,
            mt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            multiline
            rows={6}
            value={generatedReply}
            InputProps={{ readOnly: true }}
          />

          <Button
            variant="outlined"
            onClick={() => navigator.clipboard.writeText(generatedReply)}
          >
            Copy to Clipboard
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default App;
