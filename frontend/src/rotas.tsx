import {BrowserRouter, Route } from "react-router-dom";
import {Landing} from "./pages/Landing";
import {TeacherForm} from "./pages/TeacherForm";
import {TeacherList} from "./pages/TeacherList";

export function Rotas(){
    return(
        <BrowserRouter basename="/app">
            <Route path="/"  element={<Landing />} />
            <Route path="/study"  element={<TeacherList />} />
            <Route path="/give-classes"  element={<TeacherForm />} />
        </BrowserRouter>
    )
}