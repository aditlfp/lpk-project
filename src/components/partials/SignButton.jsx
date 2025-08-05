function SignInButton() {
  return (
    <button className="relative group text-black font-semibold">
      Sign In
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}
function SignUpButton() {
  return (
    <button className="relative group text-black font-semibold">
      Sign Up
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}

export {SignInButton, SignUpButton}
