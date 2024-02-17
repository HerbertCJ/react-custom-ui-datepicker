import "./App.css";
import { Datepicker } from "../";

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Datepicker
        config={{ dateFormat: "dd/MM/yyyy HH:mm", locale: "pt-BR" }}
      />
      <Datepicker variant="dark" range />
    </div>
  );
}

export default App;
