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
import { useState } from "react";

const DIM = 20;

const LANGAUGES: { [index: string]: string } = {
  en: "English",
  it: "Italiano",
  fr: "Français",
};

const LanguageSelector: React.FC = () => {
  const { locales, locale } = useRouter();
  const [show, setShow] = useState(false);
  const { pathname } = useRouter();

  const handleModal = () => setShow((prevCount) => !prevCount);

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
                  <ListItemText primary={LANGAUGES[locale]} />
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
