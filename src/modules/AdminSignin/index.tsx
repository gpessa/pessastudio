import { Box, Button } from "@mui/material";
import { Section, Title } from "components";
import { getProviders, signIn } from "next-auth/react";

export default function AdminSignIn({
  providers,
}: {
  providers: ReturnType<typeof getProviders>;
}) {
  return (
    <Section>
      <Box textAlign={"center"}>
        <Title title={"Usa uno dei sistemi loggarti"} />
        {Object.values(providers).map((provider) => (
          <Button onClick={() => signIn(provider.id)} key={provider.name}>
            {provider.name}
          </Button>
        ))}
      </Box>
    </Section>
  );
}
