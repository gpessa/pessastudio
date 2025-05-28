import { LanguageSwitcher } from "@/components";
import { initLingui, PageLangParam } from "@/utilities/initLingui";
import { Trans } from "@lingui/react/macro";
import { Typography } from "@mui/material";

export default async function Page(props: PageLangParam) {
  const lang = (await props.params).lang;
  initLingui(lang);

  return (
    <>
      <Typography>
        <Trans>Test</Trans>
      </Typography>
    </>
  );
}
