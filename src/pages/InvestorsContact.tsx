import React, { useEffect } from "react";

const InvestorContact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-4 py-8 md:px-28 bg-gray-100">
      {/* Title */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blu">Investor contact</h1>
      </header>

      {/* Shareholders Department */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Shareholders Department</h2>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-[30%]">
            <p className="font-semibold">Direction</p>
            <p>Hendaya 60, piso 15, Las Condes, Santiago.</p>
          </div>
          <div className="w-full md:w-[30%]">
            <p className="font-semibold">Head of Department</p>
            <p>
              Alejandro González Avilés <br />
              <a
                href="mailto:agonzalez@hendaya.cl"
                className="text-orange-400 hover:underline"
              >
                agonzalez@hendaya.cl
              </a>{" "}
              /{" "}
              <a
                href="tel:+56224413780"
                className="text-orange-400 hover:underline"
              >
                +56 2 2441 3780
              </a>
            </p>
          </div>
          <div className="w-full md:w-[30%]">
            <p className="font-semibold">Secretary</p>
            <p>
              Maria Isabel Wong Estefania <br />
              <a
                href="mailto:miwong@hendaya.cl"
                className="text-orange-400 hover:underline"
              >
                miwong@hendaya.cl
              </a>{" "}
              /{" "}
              <a
                href="tel:+56224413770"
                className="text-orange-400 hover:underline"
              >
                +56 2 2441 3770
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-300 mb-8" />

      {/* Administration and Finance */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Administration and Finance Elecmetal
        </h2>
        <p className="mb-4">
          In relation to inquiries from shareholders and investors regarding the
          situation, progress and business of the company with information that
          is public and/or by law is provided to shareholders and the general
          public.
        </p>
        <p className="font-semibold">Administration and Finance Manager</p>
        <p>
          Nicolás Cuevas O. <br />
          <a
            href="mailto:ncuevas@elecmetal.cl"
            className="text-orange-400 hover:underline"
          >
            ncuevas@elecmetal.cl
          </a>{" "}
          /{" "}
          <a
            href="tel:+56223614020"
            className="text-orange-400 hover:underline"
          >
            +56 2 2361 4020
          </a>
        </p>
      </div>
    </section>
  );
};

export default InvestorContact;
