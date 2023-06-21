import { useMutation, useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  LinearProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { Section, Title } from "components";
import { Field, FieldArray, Form, Formik } from "formik";
import {
  GetProductsQuery,
  GetProductsQueryVariables,
  ProductData,
  ProductRemoteInput,
  UpdateProductsMutation,
  UpdateProductsMutationVariables,
} from "gql/graphql";
import { signOut, useSession } from "next-auth/react";
import { PRODUCT_ATTRIBUTES } from "utils/constants";
import * as Yup from "yup";
import getProductsQuery from "./graphql/getProductsQuery";
import updateProductsMutation from "./graphql/updateProductsMutation";

const Schema = Yup.object().shape({
  products: Yup.array().of(
    Yup.object().shape({
      id: Yup.string().required("Required"),
      depth: Yup.number().nullable(),
      diameter: Yup.number().nullable(),
      height: Yup.number().nullable(),
      length: Yup.number().nullable(),
      price: Yup.number().nullable(),
      weight: Yup.number().nullable(),
      width: Yup.number().nullable(),
    })
  ),
});

type Attribute = keyof ProductData;

const Admin: React.FC = () => {
  const { data: session } = useSession();

  const { data } = useQuery<GetProductsQuery, GetProductsQueryVariables>(
    getProductsQuery
  );

  const [update, { loading }] = useMutation<
    UpdateProductsMutation,
    UpdateProductsMutationVariables
  >(updateProductsMutation);

  if (!data?.products || !session?.user) return <LinearProgress />;

  const PRODUCTS = [
    ...data?.products,
    ...data.productsMissing.map((id) => ({
      id,
      price: 0,
    })),
  ];

  const attributes: Attribute[] = [
    "depth",
    "diameter",
    "height",
    "length",
    "weight",
    "width",
  ];

  return (
    <Section spacing="small">
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
        <Formik
          initialValues={{ products: PRODUCTS }}
          onSubmit={async (values: { products: ProductRemoteInput[] }) => {
            const toSubmit = values?.products?.map((p) => ({
              id: p.id,
              depth: p.depth && Number(p.depth),
              diameter: p.diameter && Number(p.diameter),
              height: p.height && Number(p.height),
              length: p.length && Number(p.length),
              price: p.price && Number(p.price),
              weight: p.weight && Number(p.weight),
              width: p.width && Number(p.width),
            }))!;
            update({ variables: { input: toSubmit } });
          }}
          validationSchema={Schema}
        >
          {({ values, submitForm, errors }) => (
            <Form>
              {JSON.stringify(errors, null, 2)}
              <FieldArray name="products">
                {({ insert, push }) => (
                  <Table>
                    <TableBody>
                      {values.products?.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{product.id}</TableCell>
                          <TableCell>
                            <Field
                              as={TextField}
                              name={`products.${index}.price`}
                              disabled={loading}
                              label="Prezzo"
                              fullWidth
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    €
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </TableCell>

                          {attributes.map((id) => (
                            <TableCell key={`products.${index}.${id}`}>
                              <Field
                                as={TextField}
                                name={`products.${index}.${id}`}
                                disabled={loading}
                                label={PRODUCT_ATTRIBUTES[id]}
                                fullWidth
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </FieldArray>
              <Box mt={2} textAlign={"right"}>
                <Button onClick={submitForm}>Salva</Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Section>
    </Section>
  );
};

export default Admin;
