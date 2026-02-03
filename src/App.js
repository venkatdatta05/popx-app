import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
return (
<Routes>
<Route path="/" element={<Welcome />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
path="/account"
element={
<ProtectedRoute>
<Account />
</ProtectedRoute>
}
/>
</Routes>
);
}


export default App;