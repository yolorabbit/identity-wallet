import { supabase } from "./supabase";
import { IUser } from "../types/type";

const fetchUser = async (email: string) => {
    try {
        let { data } = await supabase.from('user').select('*').eq('email', email);
        if (data) {
            return data[0] as IUser;
        }
        else {
            return null;
        }
    } catch (err) {
        console.log(err);
    }
}

const insertUser = async (userData: IUser) => {
    try {
        let { data } = await supabase.from('user').insert([userData]);

        return data;
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (email: string, userData: IUser) => {
    try {
        console.log(email);
        console.log(userData);
        let { data, error } = await supabase.from('user').update(userData).eq('email', email);
        console.log(error);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export {
    fetchUser,
    insertUser,
    updateUser
}