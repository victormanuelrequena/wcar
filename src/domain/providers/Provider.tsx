import ProviderProps from "./ProviderProps";

export default interface Provider<T> {
    context: React.Context<T>;
    Provider: React.FC<ProviderProps>
    Actions: T;
}