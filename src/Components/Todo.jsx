import React from "react";

const Todo = () => {
  const [inputValue, setInputvalue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [page,setPage] = React.useState(1);
  const [lastPage,setLastPage] = React.useState(4);
  

  const getTodos = async() => {
    try {
      setLoading(true);
      let res =await fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`);
      let data=await res.json();
      setTodos(data);
      for(var pg of res.headers.entries()){
        if(pg[0]==='x-total-count'){
          setLastPage(Math.ceil(pg[1]/3))
        }
      }
    } catch (error) {
      console.log(error)
        setError(true);
        //setTodos([]); 
    }
    setLoading(false)
      

  };

  React.useEffect(() => {
    getTodos();
  }, [page]);

  const addTodo = () => {
    // making a post requesting and saving the todo there ?
    const payload = {
      title: inputValue,
      status: false
    };
    setLoading(true);
    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getTodos();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div>
      <h1>TODO LIST USING JSON SERVER</h1>
      <input
        placeholder="Add A New TODO"
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button onClick={addTodo}>ADD TO DO</button>

      <br /> 

      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}

      <button onClick={()=>setPage(page-1)} disabled={page==1}>Previous</button>
      <button onClick={()=>setPage(page+1)} disabled={page==lastPage}>Next</button>
    </div>
  );
};

export { Todo };
