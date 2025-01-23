import "./App.css";
import { useQuery, gql, useMutation } from "@apollo/client";

function App() {
  const getStudents = gql`
    query Students {
      students {
        name
        age
        email
      }
    }
  `;

  const { data } = useQuery(getStudents);
  console.log(data);

  return (
    <>
      <h1>Students</h1>
      <br />
      {data?.students?.map((item) => (
        <div key={item?.id}>
          <h1>{item?.name}</h1>
          <p>{item?.age}</p>
          <p>{item?.email}</p>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
