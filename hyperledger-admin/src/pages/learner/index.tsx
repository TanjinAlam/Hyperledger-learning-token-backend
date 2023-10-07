import { Table, Toggle } from "rsuite";
import { data } from "../../config/data";
const { Column, HeaderCell, Cell } = Table;
const Learner = () => {
  return (
    <div className="py-3">
      <Table data={data} autoHeight rowClassName={"cursor-pointer"}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={130}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={200}>
          <HeaderCell>Status</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <>
                  <Toggle checked={rowData.status} />
                </>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default Learner;
