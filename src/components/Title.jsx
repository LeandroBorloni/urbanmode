export default function Title({children}) {
    return (
        <>
            <h2 className="text-xl font-semibold border-yellow-500 border-l-8 m-2 pl-2 text-white">
                {children}
            </h2>
        </>
    )
}