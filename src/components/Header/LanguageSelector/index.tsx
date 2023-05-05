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
import linguiConfig from "i18n/config.json";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";

const DIM = 20;

const LanguageSelector: React.FC = () => {
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
          <Avatar sx={{ width: DIM, height: DIM }}>
            <Image
              src={`/flags/${locale}.svg`}
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
                    <Avatar sx={{ width: DIM, height: DIM }}>
                      <Image
                        src={`/flags/${locale}.svg`}
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

export default LanguageSelector;
