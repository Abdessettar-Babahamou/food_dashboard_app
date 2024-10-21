import NavBar from "@/components/NavBar";
  import { redirect } from 'next/navigation'

export default function Home() {


  redirect('/home');
  return (
    <div className=" min-h-screen ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NavBar/>
        Landing page
      </main>
    </div>
  );
}
