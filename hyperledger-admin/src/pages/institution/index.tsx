import { Contract, ethers } from "ethers";
import { Loader, Table, Toggle } from "rsuite";
import abi from "../../contracts/LearningToken.json";
import {
  useGetInstitutionQuery,
  useUpdateInstitutionStatusMutation,
} from "../../store/features/admin/adminApi";

const { Column, HeaderCell, Cell } = Table;
const SMART_CONTRACT = import.meta.env.VITE_SMART_CONTRACT;
const Institution = () => {
  const { data, isLoading } = useGetInstitutionQuery();
  const [updateInstitutionStatus] = useUpdateInstitutionStatusMutation();

  const toggleStatus = async () => {
    console.log("TOGGLED");
    // const provider = new ethers.BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    // console.log("signer", signer);
    // const contract = new Contract("test", abi, provider);
    // console.log(contract);

    // const signer = provider.getSigner();
    // const conc = new ethers.Contract(SMART_CONTRACT!, abi, signer);
    // console.log(conc);
    // await updateInstitutionStatus(rowData);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="py-3">
      <button onClick={() => toggleStatus()}>
        {console.log("HERE")}Connect
      </button>
      <Table data={data.result.data} autoHeight rowClassName={"cursor-pointer"}>
        <Column flexGrow={1} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Public Address</HeaderCell>
          <Cell dataKey="publicAddress" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Status</HeaderCell>
          <Cell>
            {async (rowData: any) => {
              const handleToggleClick = async () => {
                // Perform any asynchronous operations here
                // For example, make an API request
                try {
                  //   const response = await fetchData(); // Replace with your async logic
                  console.log("response");
                } catch (error) {
                  console.error(error);
                }
              };

              return (
                <>
                  <Toggle
                    checked={rowData.status}
                    onChange={handleToggleClick}
                  />
                </>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default Institution;
