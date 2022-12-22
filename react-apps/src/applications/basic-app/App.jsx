function SayHello(props) {
  console.log(props);
  return <div style={{color:props.color}}>Hello {props.name}</div>;
}

function App() {
  return (
    <div>
      <div>Hello</div>
      <SayHello name = "Chen" color="red"/>
      <SayHello name = "Liat" color="blue"/>
      <p>To react</p>
    </div>
  );
}

export default App;
