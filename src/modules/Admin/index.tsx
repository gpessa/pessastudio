import { Avatar, Grid, LinearProgress, Link } from "@mui/material";
import { Section } from "components";
import { signOut, useSession } from "next-auth/react";

export { getServerSideProps } from "utils/getProps";

const Admin = () => {
  const { data: session } = useSession();

  return (
    <Section spacing="small">
      {!session?.user ? (
        <LinearProgress />
      ) : (
        <>
          <Grid container alignItems="center" gap={1}>
            <Grid>
              <Avatar
                src={session?.user?.image!}
                alt={(session.user.name || session.user.email)!}
              />
            </Grid>
            <Grid>
              Ciao{" "}
              <strong>{session?.user?.name || session?.user?.email}</strong> (
              <Link onClick={() => signOut()}>Esci</Link>)
            </Grid>
          </Grid>
        </>
      )}
    </Section>
  );
};

export default Admin;
