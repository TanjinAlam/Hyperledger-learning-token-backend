import { Form, Formik, FormikProps } from "formik";
import { useRef } from "react";
import * as XLSX from "xlsx";
import { number, object, string } from "yup";
import Button from "../../components/Button";
import SelectInput from "../../components/SelectInput";
import { initWeb3 } from "../../utils";
const initialValues = {
  token_type: "attendance_token",
  attendance: null,
};

const validationSchema = object().shape({
  token_type: string().required("Please select an institution"),
  attendance: object()
    .shape({
      courseId: number(),
      amount: number(),
      learnerId: number(),
    })
    .required("At least 1 attendance should be added"),
});
const Attendance = () => {
  const formikRef = useRef<FormikProps<any>>(null);

  const handleSubmit = async (values: any) => {
    const contract = await initWeb3();

    const tx = await contract!.mintAttendanceToken(
      values.attendance.learnerId,
      values.attendance.amount,
      values.attendance.courseId,
      Date.now()
    );

    console.log(tx);
  };

  const handleFileChange = (e: any, formik: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        const learnerAddress = jsonData.map((learner: any) => {
          return {
            courseId: learner.courseId,
            amount: learner.amount,
            learnerId: learner.learnerId,
          };
        });
        formik.setFieldValue("attendance", learnerAddress[0]);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const tokenType = [
    { value: "attendance_token", label: "Attendance Token" },
    { value: "helping_token", label: "Helping Token" },
    { value: "score_token", label: "Score Token" },
    { value: "instructorScore_token", label: "Instructor Score Token" },
  ];

  return (
    <div className="w-[800px] mx-auto my-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        innerRef={formikRef}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className="flex flex-col items-center justify-between">
            <SelectInput
              containerStyle={"w-full"}
              label="Token"
              size="small"
              name="token_type"
              options={tokenType}
            />
            <input
              type="file"
              name="attendance"
              onChange={(event) => handleFileChange(event, formik)}
            />
            <Button
              size="small"
              className="w-full"
              variant="primary"
              type="submit"
            >
              Distribute
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Attendance;
