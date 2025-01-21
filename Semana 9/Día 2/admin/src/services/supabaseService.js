import supabase from "../config/supabaseConfig";

const BUCKET_NAME = "g27storage";
const PATH_WEB_APP = "public"

const uploadFile = async (archivo) => {
  try {
    const nombreCompleto = `${PATH_WEB_APP}/${Date.now()}-${archivo.name}`; //estamos concatenando para que el nombre sea: 213421412-foto.jpg
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(nombreCompleto, archivo);
    if(error){
      throw error
    } else {
      //obtenemos la URL del archivo
      const archivoURL =  supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);
      return archivoURL;
    }
  } catch (error) {
    throw error
  }
};
export default uploadFile;