import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import { SERVER_ENDPOINTS } from "../config";

const URLShortenerForm = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);

  const handleSumbmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, { destination })
      .then((resp) => resp.data)
      .catch((e) => console.error(e));

    setShortUrl(result);

    debugger;
  };
  return (
    <Box pos="relative" zIndex="99" backgroundColor="white" padding="6">
      <form onSubmit={handleSumbmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          />
          <Button type="submit">CREATE</Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a href={`/${shortUrl?.shortId}`}>
          {window.location.origin}/{shortUrl?.shortId}
        </a>
      )}
    </Box>
  );
};

export default URLShortenerForm;
