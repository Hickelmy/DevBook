import React from "react";
import TopBannerIMG from "../../Assets/topbannerimg.jpg";
import { Button } from "primereact/button";

export function HomeTop() {
  return (
    <div>
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Texto Aleatorio
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              Texto AleatorioTexto AleatorioTexto Aleatorio
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button
              label="Saiba Mais"
              type="button"
              className="mr-3 p-button-raised"
            />
            <Button
              label="Testar"
              type="button"
              className="p-button-outlined"
            />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src={TopBannerIMG}
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              width: "56rem",
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
