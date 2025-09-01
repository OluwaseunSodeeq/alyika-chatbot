import RootLayout from "./layout";

export default function Home() {
  return (
    <main className=" w-full bg-navbar-bg relative">
      <h1 className="text-center text-3xl font-bold p-4">
        Welcome to My Chatbot Page
      </h1>
      <RootLayout>
        <div>
          <div className="font-satoshi">
            <h1 className="text-3xl font-bold font-dark-green">
              This is a test page using Satoshi font
            </h1>
            <p>I love it here</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class name="font-montserrat">
            <h1 className="text-3xl font-bold font-yellow">
              This is a test page using Montserrat font
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </RootLayout>
    </main>
  );
}
