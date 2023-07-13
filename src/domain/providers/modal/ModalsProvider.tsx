import Provider from "../Provider";
import ModalsContextType from "./ModalsContextType";

export default interface ModalsProvider extends Provider<ModalsContextType> {
}

export const ModalsProviderName = "ModalsProvider";