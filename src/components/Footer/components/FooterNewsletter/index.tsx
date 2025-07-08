import { msg } from "@lingui/core/macro";
import { Trans, useLingui } from "@lingui/react/macro";
import Send from "@mui/icons-material/Send";
import { Alert, IconButton, Input, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const FooterNewsletter: React.FC = () => {
  const { t } = useLingui();
  const [email, setEmail] = useState<string>();

  const url =
    "https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd";

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status }) => (
        <>
          {status !== "success" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                email && subscribe({ EMAIL: email });
              }}
            >
              <Input
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
                fullWidth
                type="email"
                name="email"
                placeholder={t`Email`}
                inputProps={{ "aria-label": t`Email` }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      type="submit"
                      color="inherit"
                      size="large"
                      aria-label={t`Iscriviti`}
                    >
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </form>
          )}
          {status === "error" && (
            <StyledAlert severity="error">
              <Trans>Si è verificato un problema, riprova</Trans>
            </StyledAlert>
          )}
          {status === "success" && (
            <StyledAlert severity="success">
              <Trans>Complimenti! Ti sei iscritto</Trans>
            </StyledAlert>
          )}
        </>
      )}
    />
  );
};

export default FooterNewsletter;
