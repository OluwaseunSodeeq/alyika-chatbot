import Chatbot from "./components/Chatbot";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main className=" w-full md:w-[80%] relative min-h-screen ">
      <h1 className="text-center text-3xl font-bold p-4">Welcome to My Chatbot Page</h1>
      {/* <Chatbot /> */}
      <RootLayout>
        <Chatbot />
      </RootLayout>
    </main>
  );
}

