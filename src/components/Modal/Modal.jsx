export default function Modal({ children, open }) {
    if(open) {
        return(
            {...children}
        )
    }
}