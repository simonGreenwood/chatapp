import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <div className="flex items-center flex-shrink-0 text-xl text-slate-200 mr-6">
        Chat app
      </div>
      <div className="text-slate-400">
        <div className="inline mr-4">
          <Link href="/login">Login</Link>
        </div>
        <div className="inline mr-4">
          <Link href="/register">Register</Link>
        </div>
        <div className="inline mr-4">
          <Link href="/profile">Profile</Link>
        </div>
        <div className="inline mr-4">
          <Link href="/rooms">Rooms</Link>
        </div>
      </div>
    </nav>
  );
}
