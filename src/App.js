import './App.css';

function App({productId}) {

  async function search(formData) {
    'use server'
    const productId = formData.get('productId')
    // await updateCart(productId)
  }

  return (
    <form action={search}>
      <input name="productId" type='hidden' value={productId}/>
      <button type="submit">Search</button>
    </form>
  );
}

export default App;
