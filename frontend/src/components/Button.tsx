function Button({onClick, children} : {onClick: () => void, children: React.ReactNode}) {
  return (
    <button onClick={onClick} 
    className="py-2 px-4  text-2xl bg-green-500 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
    {children}
    </button>
  )
}

export default Button
