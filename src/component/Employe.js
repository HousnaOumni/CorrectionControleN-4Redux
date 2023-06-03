import { useDispatch, useSelector } from "react-redux";
import {
  ADD_EMPLOYE,
  REMOVE_EMPLOYE,
  UPDATE_EMPLOYE,
  SEARCH_EMPLOYE,
} from "../action/actions";
import React, { useState } from "react";

export default function Employe() {
  const dispatch = useDispatch();
  const employes = useSelector((state) => state.employe);
  const employesSearch = useSelector((state) => state.Search);

  const [employe, setEmploye] = useState({
    Id: "",
    Nom: " ",
    Prenom: " ",
    Age: "",
  });
  const [employe_id, setEmployeId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmploye((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeId = (e) => {
    setEmployeId(e.target.value);
  };

  const AddEmploye = (e) => {
    e.preventDefault();
    dispatch(ADD_EMPLOYE(employe));
  };

  const UpdateEmploye = (e) => {
    e.preventDefault();
    dispatch(UPDATE_EMPLOYE(employe.Id, employe));
  };

  const SearchEmploye = (e) => {
    e.preventDefault();
    dispatch(SEARCH_EMPLOYE(employe_id));
  };

  const DeleteEmploye = (e) => {
    e.preventDefault();
    dispatch(REMOVE_EMPLOYE(employe_id));
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="Id"
          value={employe.Id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Nom"
          value={employe.Nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Prenom"
          value={employe.Prenom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Age"
          value={employe.Age}
          onChange={handleChange}
        />
        <button onClick={AddEmploye}>Add</button>
        <button onClick={UpdateEmploye}>Update</button>
      </form>
      <form>
        <input
          type="text"
          name="employe_id"
          value={employe_id}
          onChange={handleChangeId}
        />
        <button onClick={SearchEmploye}>Search</button>
        <button onClick={DeleteEmploye}>Delete</button>
      </form>
      <br />
      {employesSearch == "" ? (
        ""
      ) : (
        <div>
          <span>Nom : {employesSearch.Nom} - </span>
          <span>Prenom : {employesSearch.Prenom} - </span>
          <span>Age : {employesSearch.Age} - </span>
        </div>
      )}
      <div>Tous les employés</div>
      {
        <ul>
          {employes.map((e) => (
            <li key={e.Id}>
              <span>Id : {e.Id} - </span>
              <span>Nom :{e.Nom} - </span>
              <span>Prenom :{e.Prenom} - </span>
              <span>Age :{e.Age}</span>
            </li>
          ))}
        </ul>
      }
    </>
  );
}
