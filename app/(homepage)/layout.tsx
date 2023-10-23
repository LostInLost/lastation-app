import React from "react";
import { Navbar } from "../_components/navbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <>
        <Navbar />
        <section>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0369a1" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,224C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
          <div className="my-[50px]">{children}</div>

          <div className="mt-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0369a1"
                fill-opacity="1"
                d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,229.3C672,277,768,299,864,288C960,277,1056,235,1152,192C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
      </>
    );
}