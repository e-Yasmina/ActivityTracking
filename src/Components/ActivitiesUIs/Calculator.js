const Calculator= () => {
    return (
      <>
        <div id="bg-0" className="bg-item" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.4375" width="100%" height="100%" fill="#AB61E4" />
          </svg>
        </div>
  
        <div id="bg-1" className="bg-item" style={{ bottom: 0, left: 0 }}>
          <svg width="371" height="476" viewBox="0 0 371 476" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M371 0H-60V538H371V0Z" fill="#F56CF0" />
          </svg>
        </div>
  
        <div id="bg-2" className="bg-item" style={{ bottom: "-15%", right: "calc(35% - 217px)" }}>
          <svg width="478" height="430" viewBox="0 0 478 430" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M523 0H0V480H523V0Z" fill="#D2578B" />
          </svg>
        </div>
  
        <div id="bg-3" className="bg-item" style={{ bottom: "20%", left: "15%" }}>
          <svg width="254" height="211" viewBox="0 0 254 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M254 0H0V211H254V0Z" fill="#F56CF0" />
          </svg>
        </div>
  
        <div id="bg-4" className="bg-item" style={{ top: 0, right: 0, bottom: 0 }}>
          <svg width="332" height="600" viewBox="0 0 332 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M338.5 -169L676.68 26V416L338.5 611L0.316986 416V26L338.5 -169Z" fill="#AB61E4" />
          </svg>
        </div>
  
        <div id="bg-5" className="bg-item" style={{ bottom: "20%", right: "3%" }}>
          <svg width="299" height="344" viewBox="0 0 299 344" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M149.5 0L298.889 86V258L149.5 344L0.110992 258V86L149.5 0Z" fill="#AB61E4" />
          </svg>
        </div>
  
        <div id="bg-6" className="bg-item" style={{ top: 0, left: "calc(50% - 281px)" }}>
          <svg width="563" height="393" viewBox="0 0 563 393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M281.5 393C436.968 393 563 270.774 563 120C563 -30.7737 436.968 -153 281.5 -153C126.032 -153 0 -30.7737 0 120C0 270.774 126.032 393 281.5 393Z"
              fill="#7A8DF4"
            />
          </svg>
        </div>
  
        <div id="bg-7" className="bg-item" style={{ top: 0, left: 0 }}>
          <svg width="454" height="329" viewBox="0 0 454 329" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.5 -377L453.965 328.75H-360.965L46.5 -377Z" fill="#9879F0" />
          </svg>
        </div>
  
        <div id="bg-8" className="bg-item" style={{ top: "15%", left: 0 }}>
          <svg width="590" height="330" viewBox="0 0 590 330" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-11 18L141 281H-163L-11 18Z" fill="#9879F0" />
            <path d="M590 0H413V330H590V0Z" fill="#9879F0" />
          </svg>
        </div>
  
        <div id="bg-9" className="bg-item" style={{ top: "32%", left: "36%" }}>
          <svg width="174" height="237" viewBox="0 0 174 237" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M174 0H0V237H174V0Z" fill="#F56CF0" />
          </svg>
        </div>
  
        <div id="bg-10" className="bg-item" style={{ top: 0, left: "calc(50% - 182px)" }}>
          <svg width="364" height="234" viewBox="0 0 364 234" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M182 234C282.516 234 364 152.516 364 52C364 -48.5158 282.516 -130 182 -130C81.4842 -130 0 -48.5158 0 52C0 152.516 81.4842 234 182 234Z"
              fill="#7A8DF4"
            />
          </svg>
        </div>
  
        <main className="calculator-wrapper">
          <div className="title-wrapper">
            <div className="title">Glassmorphism</div>
            <div className="title">Glassmorphism</div>
          </div>
  
          <section className="calculator">
            <button id="toggler" className="toggle-theme">
              <svg
                id="dark"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ display: "block" }}
              >
                <path d="M6 .278a.768.768..." />
              </svg>
              <svg
                id="light"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ display: "none" }}
              >
                <path d="M8 12a4 4..." />
              </svg>
            </button>
            <header className="calculator-header">
              <div className="calculator-operation">5874 + 2547</div>
              <div className="calculator-operation-result">7,895</div>
            </header>
            <main className="calculator-body"></main>
            <div className="calculator-button-wrapper">
              <button type="button" className="calculator-button">
                <span>C</span>
              </button>
              <button type="button" className="calculator-button">
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 10C5 9.83424 5.06585..." />
                  </svg>
                </span>
              </button>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default Calculator;
  