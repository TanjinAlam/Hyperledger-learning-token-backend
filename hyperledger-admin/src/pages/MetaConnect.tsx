import { Form, Formik, FormikProps } from "formik";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import Button from "../components/Button";
import SelectInput from "../components/SelectInput";
const initialValues = {
  type: "learner",
};

const validationSchema = object().shape({
  type: string()
    .required("Please select a type")
    .oneOf(["admin", "institution", "instructor", "learner"]),
});
const MetaConnect = () => {
  const formikRef = useRef<FormikProps<any>>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
      } else {
        console.log("not");
      }
      // const web3 = window.ethereum;
      // const networkId = await web3.eth.net.getId();
      // const networkName = await web3.eth.net.getNetworkType();
      // const accounts = await web3.eth.getAccounts();
      // const account = accounts[0];
      // const balance = await web3.eth.getBalance(account);

      if (values.type === "admin") {
      } else if (values.type === "institution") {
      } else if (values.type === "instructor") {
      } else {
      }
    } catch (e) {}
  };
  return (
    <div className="min-h-screen min-w-[100vw] flex items-center justify-center">
      <div className="rounded border shadow p-5 w-[25vw]">
        <div className="font-bold text-xl text-center my-3">Hyperledger</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          innerRef={formikRef}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center justify-between">
            <SelectInput
              containerStyle={"w-full"}
              label="Connect As"
              size="small"
              name="type"
              options={[
                { value: "admin", label: "Admin" },
                { value: "institution", label: "Institution" },
                { value: "instructor", label: "Instructor" },
                { value: "learner", label: "Learner" },
              ]}
            />
            <Button
              size="small"
              className="w-full"
              variant="primary"
              type="submit"
            >
              Connect
            </Button>
          </Form>
        </Formik>
        <div className="text-xs my-3 text-center">
          <Link to={"/register"}>Not registered? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default MetaConnect;
