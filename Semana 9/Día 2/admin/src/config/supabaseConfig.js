import {createClient} from "@supabase/supabase-js";
const urlSupabase="https://cswijufdrprmpxrglyeu.supabase.co";

const apikeySupabase=import.meta.env.VITE_SUPABASE_KEY;

const supabase=createClient(urlSupabase,apikeySupabase);
export default supabase;