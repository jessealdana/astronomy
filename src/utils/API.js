import axios from "axios";

  // Gets the codex with the given id
  export const getCodex = id => axios.get("/api/codex/" + id);
  // Deletes the codex with the given id
  export const deleteCodex = id => axios.delete("/api/codex/" + id);
  // Saves a codex to the database
  export const saveCodex = (codex,id) => axios.put("/api/codex/"+id, codex);
  export const getSavedCodicess = () => axios.get("/api/codex");
  //Saves a user made "entry" to the database
  export const saveEntry = (entry,id) => axios.put("/api/codex/entries/"+id, entry);