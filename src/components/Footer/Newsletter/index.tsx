import Send from "@mui/icons-material/Send";
import {
  Alert,
  IconButton,
  Input,
  InputAdornment,
  styled,
} from "@mui/material";
import { Trans, useTranslation } from "next-i18next";
import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const NewsletterSubscription: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>();

  const placeholder = t("General.newsletter.field.placeolder", {
    defaultValue: `Email`,
  });

  const url =
    "https://pessastudio.us4.list-manage.com/subscribe/post?u=9827f22cb9c00c4d7ff1c48ab&amp;id=199848d4fd";

  return (
    <>
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
                  placeholder={placeholder}
                  inputProps={{ "aria-label": placeholder }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        type="submit"
                        color="inherit"
                        size="large"
                        aria-label={
                          t("General.newsletter.field.subscribe", {
                            defaultValue: `Iscriviti`,
                          })!
                        }
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
                <Trans i18nKey="General.newsletter.response.error">
                  Si è verificato un problema, riprova
                </Trans>
              </StyledAlert>
            )}
            {status === "success" && (
              <StyledAlert severity="success">
                <Trans i18nKey="General.newsletter.response.success">
                  Complimenti! Ti sei iscritto
                </Trans>
              </StyledAlert>
            )}
          </>
        )}
      />
    </>
  );
};

export default NewsletterSubscription;
