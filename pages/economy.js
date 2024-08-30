import Link from "next/link";

export default function Economy() {
  return (
    <div className="text-yellow-600 text-2xl flow-root m-6 gap-9">
      Economy News
      <Link className="text-cyan-500 text-3xl  " href={"/"}>
        {" "}
        Home
      </Link>
    </div>
  );
}
