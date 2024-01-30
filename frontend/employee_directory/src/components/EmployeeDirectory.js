import EmployeeCreate from "./EmployeeCreate";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import { PAGES } from "../enum";

function EmployeeDirectory({ currentPage }) {
  return (
    <main>
      {currentPage === PAGES.EMPLOYEE_LIST && (
        <>
          <h1>Employee list</h1>
          <EmployeeSearch />
          <EmployeeTable />
        </>
      )}
      {currentPage === PAGES.ADD_EMPLOYEE && <EmployeeCreate />}
    </main>
  );
}

export default EmployeeDirectory;
