import './App.css';

function App() {

  const search=(formData)=>{
    alert(`you have searched for ${formData.get('query')}`)
  }

  return (
    <form action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}

export default App;
