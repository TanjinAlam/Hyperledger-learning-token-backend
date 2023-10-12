import React from "react";
import { Loader, Table, Toggle } from "rsuite";
import {
  useGetInstitutionQuery,
  useUpdateInstitutionStatusMutation,
} from "../../store/features/admin/adminApi";
import { initWeb3 } from "../../utils";
const { Column, HeaderCell, Cell } = Table;

const Institution: React.FC = () => {
  const { data, isLoading } = useGetInstitutionQuery();
  const [updateInstitutionStatus] = useUpdateInstitutionStatusMutation();

  const toggleStatus = async (rowData: any) => {
    const contract = await initWeb3();
    const tx = await contract!.registerInstitution(
      rowData.name,
      rowData.publicAddress,
      Date.now()
    );
    if (tx) {
      await updateInstitutionStatus(rowData);
    }
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
            {(rowData: any) => {
              return (
                <>
                  <Toggle
                    checked={rowData.status}
                    onClick={() => toggleStatus(rowData)}
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
