import type { NextPage } from "next";
import CarouselBook from "@/apps/components/carouselBook";

const Home: NextPage = () => {
  return (
    <div
      className="container-about"
      style={{ backgroundColor: "transparent !important" }}
    >
      <CarouselBook
        pages={[
          {
            page: <>Back</>,
          },
          {
            page: <>Front</>,
          },
          {
            page: <>Back</>,
          },
          {
            page: <>Back</>,
          },
          {
            page: <>Front</>,
          },
          {
            page: <>Front</>,
          },
          {
            page: <>Back</>,
          },
        ]}
        cover={{
          frontCover: {
            frontSide: (
              <div
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('images/frontPageImage.webp')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  color: "#ffffff",
                  fontSize: "1.5vw",
                }}
              >
                <h1 style={{}}>
                  Are You Ready
                  <br />
                  For a New Journey?
                </h1>
                <h1
                  style={{
                    fontSize: "5vw",
                    marginTop: "7vw",
                  }}
                >
                  Open the Book!
                </h1>
              </div>
            ),
            backSide: (
              <div
                style={{
                  background: "url('images/backPageImage.webp')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  padding: "1vw",
                  paddingRight: "0",
                  boxSizing: "border-box",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#1b5e36",
                  }}
                ></div>
              </div>
            ),
          },
          backCover: {
            frontSide: (
              <div
                style={{
                  background: "url('images/cover.webp')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  minHeight: "100%",
                }}
              ></div>
            ),
            backSide: (
              <div
                style={{
                  background: "url('images/cover.webp')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  padding: "1vw",
                  paddingLeft: "0",
                  boxSizing: "border-box",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#1b5e36",
                  }}
                ></div>
              </div>
            ),
          },
        }}
        styles={{
          timeToFinishSlidePage: 2,
          biggerCovers: true,
          pagesNumbers: "corners",
          coverType: "hardcover",
        }}
      />
    </div>
  );
};

export default Home;
