import { ReactElement, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";

interface DataTypes {
  photo: string;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataTypes>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataTypes[] = [];

const Product = () => {
  const [data] = useState<DataTypes[]>(arr);
  const Table = TableHOC<DataTypes>(
    columns,
    data,
    "dashboard-product-box",
    "Product"
  );
  return (
    <div className="admin_container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Product;
