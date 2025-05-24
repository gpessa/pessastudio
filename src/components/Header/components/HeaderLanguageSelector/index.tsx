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
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import linguiConfig from "i18n/config.json";

const LOCALE_ICONS: { [key: string]: string } = {
  en: require(`flag-icons/flags/1x1/gb.svg`),
  fr: require(`flag-icons/flags/1x1/fr.svg`),
  it: require(`flag-icons/flags/1x1/it.svg`),
};

const DIM = 20;

const HeaderLanguageSelector: React.FC = () => {
  const { locales, locale } = useRouter();
  const [show, setShow] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setShow(false);
  }, [locale]);

  const handleModal = () => setShow((prevCount) => !prevCount);

  const getLocaleName = (locale: string): string => {
    return linguiConfig.find((lang) => lang.code === locale)!.localName;
  };

  return (
    <>
      <Tooltip title="Change language">
        <IconButton onClick={handleModal}>
          <Avatar sx={{ height: DIM, width: DIM }}>
            <Image
              src={LOCALE_ICONS[locale!]}
              alt={locale!}
              width={DIM}
              height={DIM}
            />
          </Avatar>
        </IconButton>
      </Tooltip>

      <Dialog open={show} onClose={handleModal}>
        <DialogTitle>Choose a language</DialogTitle>
        <List disablePadding component="nav">
          {(locales || []).map((locale) => (
            <ListItem disableGutters key={locale}>
              <Link href={pathname} locale={locale} passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemAvatar>
                    <Avatar sx={{ height: DIM, width: DIM }}>
                      <Image
                        src={LOCALE_ICONS[locale!]}
                        alt={locale}
                        width={DIM}
                        height={DIM}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={getLocaleName(locale)} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default HeaderLanguageSelector;
