import { useLingui } from "@lingui/react/macro";
import {
  Avatar,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  styled,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { LOCALES_ARRAY } from "utils/constants";

const LOCALE_ICONS: { [key: string]: string } = {
  en: require(`flag-icons/flags/1x1/gb.svg`),
  fr: require(`flag-icons/flags/1x1/fr.svg`),
  it: require(`flag-icons/flags/1x1/it.svg`),
};

const DIM = 20;

const LinkStyled = styled(Link)({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
});

const HeaderLanguageSelector: React.FC = () => {
  const {
    i18n: { locale },
  } = useLingui();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [locale]);

  const handleModal = () => setShow((prevCount) => !prevCount);

  return (
    <>
      <Tooltip title="Change language">
        <IconButton onClick={handleModal} sx={{ alignSelf: "center" }}>
          <Avatar sx={{ height: DIM, width: DIM }}>
            <Image
              src={LOCALE_ICONS[locale!]}
              alt={locale}
              width={DIM}
              height={DIM}
            />
          </Avatar>
        </IconButton>
      </Tooltip>

      <Dialog open={show} onClose={handleModal}>
        <DialogTitle>Choose a language</DialogTitle>
        <List disablePadding component="nav">
          {LOCALES_ARRAY.map(({ code, name }) => (
            <ListItem disableGutters key={code} sx={{ display: "block" }}>
              <LinkStyled href={pathname.replace(`/${locale}`, `/${code}`)}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar sx={{ height: DIM, width: DIM }}>
                      <Image
                        src={LOCALE_ICONS[code]}
                        alt={locale}
                        width={DIM}
                        height={DIM}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} />
                </ListItemButton>
              </LinkStyled>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default HeaderLanguageSelector;
