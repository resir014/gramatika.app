export default function Index() {
  return (
    <div className="px-4 lg:px-0">
      <div className="fixed left-0 right-0 backdrop-blur-sm bg-base-100/80">
        <div className="container mx-auto max-w-screen-lg text-5xl px-4 lg:px-0">
          <div className="flex flex-row justify-between items-center h-20">
            <img src="images/logo.svg" />
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row">
                <div className="form-control">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="toggle"
                    onChange={(e) => {
                      try {
                        if (e.target.checked) {
                          document.documentElement.dataset.theme = "light";
                        } else {
                          document.documentElement.dataset.theme = "dark";
                        }
                      } catch (e) {}
                    }}
                  />
                </div>
                <img src="images/light_mode.svg" className="ml-1" />
              </div>
              <a
                href="https://twitter.com/sonnylazuardi"
                className="text-sm text-black lg:text-base flex flex-row items-end font-semibold"
              >
                <span className="hidden md:inline-block">@sonnylazuardi</span>{" "}
                <img src="images/arrow_black.svg" className="mb-1 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg text-5xl">
        <div className="flex flex-col justify-center items-center mb-12">
          <div className="mt-32 text-center max-w-2xl text-3xl lg:text-6xl mb-4 font-bold">
            Memperkenalkan Gramatika!
          </div>
          <div className="text-base font-normal text-center max-w-md">
            Asisten menulis Bahasa Indonesia baku di peramban (browser) dan
            aplikasi ponsel.
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 mb-4 lg:mb-0">
          <div className="flex flex-row justify-center lg:justify-end">
            <a
              href="https://chrome.google.com/webstore/detail/gramatika-bahasa-indonesi/hhodeijkemcdbelkfdhglgmgpmgkfekk?hl=id"
              className="bg-black text-white text-sm flex flex-row p-4 items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl font-semibold"
            >
              <img src="images/chrome_logo.png" className="mr-4" />
              Pasang Pengaya di
              <br /> Chrome Webstore{" "}
              <img src="images/arrow_white.svg" className="ml-4" />
            </a>
          </div>
          <div className="flex flex-row justify-center lg:justify-start">
            <a
              href="https://twitter.com/sonnylazuardi/status/1476510329471258624?s=20"
              className="border border-base-content border-solid bg-base-100 text-base-content text-sm flex flex-row p-4 items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl font-semibold"
            >
              <img src="images/android_logo.png" className="mr-4" />
              Aplikasi Ponsel dalam
              <br /> Pengembangan{" "}
              <img src="images/arrow_black.svg" className=" ml-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 mb-20">
          <div className="bg-base-300 h-96 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl rounded-br-2xl mb-4 overflow-hidden">
            <img src="images/extension.png" style={{ width: 450 }} />
          </div>
          <div className="bg-base-300 h-96 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl rounded-br-2xl mb-4 overflow-hidden">
            <img src="images/mobile.png" style={{ width: 450 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
