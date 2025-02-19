import './App.css';

function App({productId}) {

  function search(productId, formData) {

    alert(`you have searched for ${formData.get('fullName')} ${productId}`)
  }

  const searchBind = search.bind(null, productId);

  return (
    <form action={searchBind}>
      <input name="fullName" type='text'/>
      <button type="submit">Search</button>
    </form>
  );
}

export default App;
