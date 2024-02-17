import "./App.css";
import { Datepicker } from "../";

function App() {
  return (
    <div>
      <Datepicker
        config={{
          calendarFormat: {
            hideActionButtons: true,
          },
          calendarStyles: {
            hideInactiveDays: true,
          },
        }}
      />
    </div>
  );
}

export default App;

/// CHECK BOX-SIZING: BORDER BOX, PADDING AND MARGIN, WHEN SET IT THE CALENDAR CHANGES POSITION (NEED FIX IT)
