import { createRoot } from "react-dom/client";
import SimpleSample from "./SimpleSample";

const root = createRoot(document.querySelector("#root")!);
root.render(<SimpleSample />);
