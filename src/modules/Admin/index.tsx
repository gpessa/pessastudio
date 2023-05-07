import { Avatar, Button, Grid, Link } from "@mui/material";
import { Section, Title } from "components";
import { signIn, signOut, useSession } from "next-auth/react";

export { getServerSideProps, getStaticProps } from "utils/getProps";

const Admin = () => {
  const { data: session } = useSession();

  return session?.user ? (
    <>
      <Section spacing="small">
        <Grid container alignItems="center" gap={1}>
          <Grid>
            <Avatar
              src={session?.user?.image!}
              alt={(session.user.name || session.user.email)!}
            />
          </Grid>
          <Grid>
            Ciao <strong>{session?.user?.name || session?.user?.email}</strong>{" "}
            (<Link onClick={() => signOut()}>Esci</Link>)
          </Grid>
        </Grid>
      </Section>
      <Section spacing="small">
        <Title title={"Puoi modificare i prezzi"} />
      </Section>
    </>
  ) : (
    <Section spacing="small">
      <Title title={"Amministrazione"} />
      <Button onClick={() => signIn()}>Entra</Button>
    </Section>
  );
};

export default Admin;
