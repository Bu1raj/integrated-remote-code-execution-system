import CodingPage from "./CodingPlatform/CodingPage";
export default function Home() {
  return (
    <main>
      <div>
        <CodingPage params={{
          questionId: "1"
        }}></CodingPage>
      </div>
    </main>
  );
}
