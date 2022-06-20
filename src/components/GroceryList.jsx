import "../App.css";
const GroceryList = ({ allData, handleDelete }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Grocery Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allData.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>
                            <button onClick={() => handleDelete(item.id)}> DELETE </button>
                        </td>
                    </tr>
                )
            } 
        )}
        </tbody>
      </table>
    </>
  );
};
export default GroceryList;
