import React from "react";
import { Button, TextField } from "@material-ui/core";

type WelcomeProps = {
  onCPFReady: (cpf: string) => void;
  nextPage: () => void;
};

export const Welcome = ({
  onCPFReady,
  nextPage
}: WelcomeProps) => (
  <div>
    <ul>
      <p>
        <h1>Title</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            nextPage();
          }}
        >
          Ler QR
        </Button>
      </p>
      <p>
        <TextField
          id="standard-name"
          label="CPF"
          margin="normal"
          onChange={evt => {
            if (evt.target.value.length < 11) {
              return;
            }
            onCPFReady(evt.target.value);
          }}
        />
      </p>
    </ul>
  </div>
);
