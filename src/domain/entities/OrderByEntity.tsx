export default interface OrderByEntity {
    label: string,
    value: {
        keyname: string,
        desc: boolean | undefined,
    }
}