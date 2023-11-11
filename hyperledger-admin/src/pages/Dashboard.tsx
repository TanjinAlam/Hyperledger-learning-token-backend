import { useSelector } from "react-redux";
import { RootState } from "../store";
import { initWeb3Method } from "../utils";
import { number, object } from "yup";
import { Form, Formik, FormikProps } from "formik";
import { useRef, useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const initialValues = {
  tokenId: 0,
};

const validationSchema = object().shape({
  tokenId: number().required("Please provide a valid token ID"),
});

function Dashboard() {
  const auth = useSelector((state: RootState) => state.auth);
  const formikRef = useRef<FormikProps<any>>(null);
  const [balance, setBalance] = useState<any>(null);

  const handleSubmit = async (values: any) => {
    const contract = await initWeb3Method();
    const tx = await contract!.balanceOf(
      auth.user.publicAddress,
      values.tokenId
    );
    if (tx) {
      setBalance(Number(tx));
    } else {
      setBalance(null)
    }
  };

  if (auth.user.type === "learner") {
    return (
      <>
        <div className="font-bold text-lg">
          Hello <span className="capitalize">{auth.user.name}</span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <h3>
            Check your token balance - <span>{balance ? balance : "__"}</span>
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            innerRef={formikRef}
            onSubmit={handleSubmit}
          >
            <Form>
              <TextInput
                name="tokenId"
                type="text"
                label="Token ID"
                containerStyle={`w-full`}
                size="small"
              />
              <Button
                size="small"
                className="w-full"
                variant="primary"
                type="submit"
              >
                Check
              </Button>
            </Form>
          </Formik>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-bold text-lg">
        Hello <span className="capitalize">{auth.user.name}</span>
      </div>
    </>
  );
}

export default Dashboard;
