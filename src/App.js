export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Finally, vacation! 👜</h1>;
}

function Form() {
  return (
    <form>
      <h3>Thing you need for your exciting trip</h3>
      <select>
        <option></option>
      </select>
      <input type="text" placeholder="What do you need?"></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div>
      <ul></ul>
      <div>
        <select>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <p>
      <em>Start adding some items to your packing list</em>
    </p>
  );
}
