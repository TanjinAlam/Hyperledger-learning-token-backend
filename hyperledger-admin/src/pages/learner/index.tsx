import { Table, Toggle } from "rsuite";

import { useGetLearnerListQuery } from "../../store/features/admin/adminApi";
const { Column, HeaderCell, Cell } = Table;
const Learner = () => {
  const {data, isLoading}  =  useGetLearnerListQuery()

  if (isLoading) {
    return <>Loading...</>
  }

  console.log(data);
  
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
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      
      
        <Column flexGrow={1}>
          <HeaderCell>Public Address</HeaderCell>
          <Cell dataKey="publicAddress" />
        </Column>

       
      </Table>
    </div>
  );
};

export default Learner;
