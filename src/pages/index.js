import { useContext } from "react";
import Head from "next/head";
import { CallContext } from "src/context/CallContext";
import Card from "@/components/Card";

export default function Home() {
  const { calls } = useContext(CallContext);

  return (
    <div className="m-10 lg:mx-36 pb-10">
      <Head>
        <title>Birlikte Güçlüyüz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p className="text-6xl text-center text-pink-600 mt-10 font-bold">
            Kim yapar?
          </p>
          <p className="text-6xl text-center text-pink-600 mt-4 font-bold font-marker">
            BEN YAPARIM
          </p>
          <p className="text-center max-w-xl w-1/2 m-auto my-20">
            Ben Yaparım! <br /> Afet zamanlarında belli yetkinliklere sahip acil
            gönüllü ihtiyacı duyan kurumlarla, bu ihtiyacı karşılayabilecek
            gönüllü uzmanları bir araya getiren platformdur.
          </p>

          <p className="text-xl text-center text-pink-600  font-bold">
            Aktif çağrıları incele
          </p>
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 m-auto mb-10"
          >
            <circle
              cx="37.0006"
              cy="36.9999"
              r="14.4167"
              stroke="#FB3968"
              strokeWidth="2"
            />
            <path
              d="M43.1673 33.9167L37.0007 40.0834L30.834 33.9167"
              stroke="#FB3968"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 place-items-stretch items-center">
          {calls?.map((call, i) => {
            return (
              <Card
                key={i}
                title={call?.title}
                description={call?.description}
                startDate={call?.date?.startDate}
                endDate={call?.date?.endDate}
                needOfVolunteer={call?.needOfVolunteer}
                applicants={call?.applicants}
                checkedCertificates={call?.checkedCertificates}
                checkedLanguages={call?.checkedLanguages}
                checkedSkills={call?.checkedSkills}
                location="İstanbul"
                id={call.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
