function SignInButton() {
  return (
    <button className="relative group text-black font-semibold">
      Sign In
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}
function SignUpButton() {
  return (
    <button className="relative group text-black font-semibold">
      Sign Up
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}

function ReqButton({ isActive }) {
  
  return (
    <button className={`relative font-semibold ${isActive ? 'text-primary' : 'group text-black'}`}>
      Syarat Pendaftaran
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}

function HomeButton({ isActive }) {
  
  return (
    <button className={`relative font-semibold ${isActive ? 'text-primary' : 'group text-black'}`}>
      Home
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all ease-in-out duration-150 group-hover:w-full"></span>
    </button>
  );
}

export {SignInButton, SignUpButton, ReqButton, HomeButton}
