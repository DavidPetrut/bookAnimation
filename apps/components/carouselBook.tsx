import React, { useEffect, useState } from "react";

interface TruncateTextProps {
  children: string;
  isMobile: boolean;
}

const TruncateText: React.FC<TruncateTextProps> = ({ children, isMobile }) => {
  const truncateText = (text: string) => {
    if (isMobile) {
      const words = text.split(" ");
      const halfLength = Math.ceil(words.length / 2);
      return words.slice(0, halfLength).join(" ") + "...";
    }
    return text;
  };

  return <>{truncateText(children)}</>;
};

interface PageButtonProps {
  label: string;
  url: string;
  isArabic?: boolean;
}

const PageButton: React.FC<PageButtonProps> = ({
  label,
  url,
  isArabic = false,
}) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="book-text"
      onClick={handleClick}
      style={{
        fontFamily: "Amiri, serif",
        padding: "10px 20px",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid black",
        color: "black",
        fontStyle: "italic",
        cursor: "pointer",
        fontSize: "1.3vw",
        marginTop: "20px",
        transition: "background-color 0.3s",
        position: "absolute",
        bottom: "25px",
        left: isArabic ? "unset" : "20px",
        right: isArabic ? "20px" : "unset",
        ...(isArabic && {
          display: "inline-block",
          fontStyle: "none",
          direction: "rtl",
          textAlign: "right",
          bottom: "25px",
          right: "20px",
          padding: "10px 20px",
          width: "auto",
        }),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#666666";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.borderRadius = "5px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#4a4a4a";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.borderRadius = "5px";
      }}
    >
      {label}
    </button>
  );
};

type PageProps = {
  page: JSX.Element;
};

type CoverType = "hardcover" | "softcover";

type CarouselBookProps = {
  pages: PageProps[];
  cover?: {
    frontCover: {
      frontSide: JSX.Element;
      backSide: JSX.Element;
    };
    backCover: {
      frontSide: JSX.Element;
      backSide: JSX.Element;
    };
  };
  styles?: {
    timeToFinishSlidePage?: number;
    biggerCovers?: boolean;
    pagesNumbers?: "center" | "corners";
    coverType?: CoverType;
  };
};

type BookClasses =
  | "containerBook"
  | "book"
  | "paper"
  | "front-back"
  | "shadowPage"
  | "frontContent-backContent";

const truncateText = (text: string, isMobile: boolean) => {
  if (isMobile) {
    const words = text.split(" ");
    const halfLength = Math.ceil(words.length / 2);
    return words.slice(0, halfLength).join(" ") + "...";
  }
  return text;
};

const CarouselBook: React.FC<CarouselBookProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 750;
      setIsMobile(newIsMobile);

      // Update pages when mobile state changes
      setPages((prevPages) =>
        prevPages.map((page) => ({
          page: React.cloneElement(page.page as React.ReactElement, {
            isMobile: newIsMobile,
          }),
        }))
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const headingClass = "";

  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
  };

  const manualPages: PageProps[] = [
    {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            Learn English
          </h2>
          <p className="book-text">
            Learning English has become essential in today's interconnected
            world. With over 400 million native speakers and more than 1 billion
            non-native speakers, English dominates as the global language of
            communication. It is the official language in more than 50 countries
            and is a key tool for international business, making it nearly
            indispensable for anyone seeking success in the global market. Many
            multinational companies prefer English as their primary working
            language, regardless of their origin. English’s influence extends
            beyond business—it’s the primary language of science, media.
            <span className="hide-on-super-small">
              Additionally, the ability to speak English facilitates
              international travel, allowing easier communication in diverse
              settings, from ordering drinks in a foreign bar to navigating
              airports where air traffic controllers use English universally
              internet.
            </span>
            <span className="hide-on-small">
              In fact, half of the content online is in English, making it
              crucial for accessing information and knowledge. For students,
              mastering English opens doors to study opportunities worldwide,
              with countless programs offered in English. Moreover, English has
              become a gateway to cultural richness, allowing individuals to
              engage with a vast array of literature, films, and music that
              shape global understanding. The language not only enhances career
              prospects but also enriches personal growth and development,
              providing a deeper connection with the world.
            </span>
          </p>

          <PageButton
            label="Find out more"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
          />
        </div>
      ),
    },
    {
      page: (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/romania_large.jpg"
            alt="Random cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ),
    },
    {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            Invata Romana
          </h2>
          <p className="book-text" style={{ fontSize: "1.3vw" }}>
            Limba română reprezintă identitatea, trecutul, prezentul și viitorul
            fiecărui român. Încă din primele zile ale vieții, suntem înconjurați
            de acest grai, care devine parte din noi. Vorbim cu părinții noștri,
            ne exprimăm sentimentele și ne dezvoltăm imaginația prin cuvintele
            limbii române. De-a lungul vieții, această limbă devine instrumentul
            cu care interacționăm cu ceilalți și ne construim lumea interioară.
            Româna este mai mult decât un simplu mijloc de comunicare; ea este
            patria spirituală a fiecărui român. Fie că trăim în România sau în
            afara granițelor, limba ne unește și ne definește.
            <span className="hide-on-super-small">
              Chiar și departe de casă, românii poartă cu ei limba, ca pe o
              cochilie care îi face să se simtă mereu "acasă." Limba română a
              fost transmisă din generație în generație timp de peste 2000 de
              ani, fiind moștenirea noastră comună.
            </span>
            <span className="hide-on-small">
              Expresii precum „Mi-e dor de tine” au o încărcătură emoțională
              aparte, pe care doar limba română o poate oferi. Limba română este
              limba în care ne regăsim rădăcinile, tradițiile, și legătura
              strânsă cu cei dragi. Fără ea, suntem doar oameni fără un punct de
              reper clar, dar cu ea, oriunde ne-am afla, purtăm acasă în inimile
              noastre, trăind cu mândrie identitatea de român.
            </span>
          </p>

          <PageButton
            label="Află mai multe"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
          />
        </div>
      ),
    },
    {
      page: (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/turkey.png"
            alt="Another random cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ),
    },

    {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            Türkçe Öğrenin
          </h2>
          <p className="book-text" style={{ fontSize: "1.3vw" }}>
            Türkçe, dünyada en çok konuşulan 15 ana dilden biri olup, 75 milyon
            kişi tarafından birinci dil olarak konuşulmaktadır. Ayrıca,
            Balkanlar ve Kafkasya'da önemli Türkçe konuşan topluluklar
            bulunmaktadır. Almanya gibi Batı Avrupa ülkelerinde ise Türkçe, en
            çok konuşulan ikinci dildir. Türkçe, dünya çapında yaklaşık 100
            milyon kişi tarafından konuşulmaktadır. Türkiye, coğrafi ve kültürel
            olarak Doğu Avrupa, Orta Asya ve Orta Doğu ile stratejik bir bağa
            sahiptir. Bu yüzden Türkçe bilmek, bu bölgelerle iş yapanlar için
            büyük avantaj sağlar. Türkiye’nin büyüyen ekonomik gücü, iş ve
            siyaset alanında fırsatlar sunmaktadır.
            <span className="hide-on-super-small">
              Ayrıca, Türkçe öğrenmek, Kazakça, Kırgızca, Tatarca, Özbekçe ve
              Uygurca gibi diğer modern Türk dillerini öğrenmeyi de
              kolaylaştırır. Bugün, dünya çapında 500.000'den fazla kişi Türkçe
              öğrenmek için kurslara katılmaktadır.
            </span>
            <span className="hide-on-small">
              Bu ilgi, Türk kültürünün ve medyasının dünya üzerindeki etkisinin
              artmasının bir yansımasıdır. Son yıllarda, Türk televizyon
              dizilerinin küresel popülaritesi, Türkçenin uluslararası arenadaki
              önemini artırdı. Amerikan dizilerinden sonra, dünya genelinde en
              çok izlenen yapımlar arasına girmesi, Türkçeye olan ilgiyi daha da
              artırdı. Bu sayede, Türkçe öğrenmeye olan talep önemli ölçüde
              arttı.
            </span>
          </p>

          <PageButton
            label="Daha fazla öğren"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
          />
        </div>
      ),
    },
    {
      page: (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/arabia2.png"
            alt="Another random cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ),
    },

    {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              fontStyle: "none",
              direction: "rtl",
              textAlign: "right",
            }}
          >
            تعلم اللغة العربية
          </h2>
          <p
            className="book-text"
            style={{ fontStyle: "1.3vw", direction: "rtl", textAlign: "right" }}
          >
            اللغة العربية تنتمي إلى الفرع الغربي من عائلة اللغات السامية، وهي
            واحدة من أكثر اللغات انتشارًا في العالم. يتحدث بها ما يقرب من 300
            مليون شخص، موزعين في الدول العربية من العراق إلى المغرب، بالإضافة
            إلى الشتات العربي. اللغة العربية ليست فقط وسيلة للتواصل، بل هي أيضًا
            حاملة للثقافة والقيم والتاريخ. تُستخدم اللغة العربية الفصحى في
            الكتابة الرسمية والصحافة والتعليم، وهي موحدة بين جميع الدول العربية.
            بينما تُستخدم العامية في الحياة اليومية، وتختلف من بلد لآخر، إلا أن
            هذه الفروق لا تمنع التواصل بين الشعوب الناطقة بالعربية. العربية هي
            أيضًا لغة الدين الإسلامي، الذي يوحد أممًا متعددة من خلال لغة مشتركة
            تُستخدم في النصوص الدينية مثل القرآن الكريم. هذه اللغة أصبحت تعبيرًا
            عن حضارة غنية ومتنوعة، ولكنها تحمل ثقافة مشتركة.
            <span className="hide-on-super-small">
              اليوم، اللغة العربية معترف بها كلغة رسمية في الأمم المتحدة، وتحتفل
              بها المنظمة سنويًا في 18 ديسمبر. هذه المناسبة تعزز دور اللغة
              العربية في نشر العلوم والأدب، وكذلك تسليط الضوء على التنوع الثقافي
              والاجتماعي الذي تقدمه للعالم.
            </span>
            <span className="hide-on-small">
              إضافة إلى ذلك، يُستخدم الحرف العربي في كتابة العديد من اللغات حول
              العالم، مثل الفارسية، الأوردو، والباشتو. هذا الانتشار يعكس مرونة
              اللغة العربية وتأثيرها الثقافي على مجتمعات مختلفة. اللغة العربية
              تشكل فرصة لتعزيز التواصل بين الثقافات وتسليط الضوء على مساهمات
              اللغة في تطور الحضارة الإنسانية عبر العصور.
            </span>
          </p>

          <PageButton
            label="اكتشف المزيد"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
            isArabic={true}
          />
        </div>
      ),
    },
    {
      page: (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/franta_large.jpg"
            alt="Another random cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ),
    },
    {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            Apprendre le français
          </h2>
          <p className="book-text" style={{ fontSize: "1.3vw" }}>
            Bienvenue en France, un pays célèbre pour son histoire riche, sa
            culture et son influence mondiale. Apprendre le français ne consiste
            pas uniquement à maîtriser la grammaire et le vocabulaire, mais à
            comprendre la culture et les personnes qui le parlent. Cette langue
            vous permettra de vous immerger dans l’art, la cuisine et les
            traditions françaises, tout en élargissant vos horizons culturels.
            Avec plus de 300 millions de locuteurs à travers le monde, le
            français est une langue clé. De plus, cela vous offrira une
            meilleure expérience lors de vos études ou de votre séjour en
            France.
            <span className="hide-on-super-small">
              De plus, le français est la langue de l’amour. Des expressions
              telles que « je t’aime » et « tu me manques » montrent à quel
              point la langue française est liée à l'émotion et à la romance.
            </span>
            <span className="hide-on-small">
              De plus, la montée en popularité de la culture française à travers
              les films, la musique et les séries télévisées a rendu la langue
              encore plus attrayante. De nombreuses personnes dans le monde
              entier choisissent aujourd'hui d'apprendre le français pour mieux
              s'intégrer dans cet univers culturel dynamique.
            </span>
          </p>

          <PageButton
            label="En savoir plus"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
          />
        </div>
      ),
    },
    {
      page: (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/rusia.jpg"
            alt="Another random cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ),
    },
  ];
  const [pages, setPages] = useState<PageProps[]>(manualPages);

  const defaultWidthBookValue = 42;
  const defaultHeightBookValue = isMobile ? 80 : 40;
  const defaultNumberOf3dPages = Math.round(pages.length / 4);
  const defaultTimeToFinishSlidePage = 1;

  const [backgroundContainerBook, setBackgroundContainerBook] = useState(false);
  const [imparePagesNumber, setImparePagesNumber] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [directionPageSlide, setDirectionPageSlide] = useState(0);
  const [hoverBook, setHoverBook] = useState(false);

  const bookCloseFace = currentPage === 0 ? true : false;
  const bookCloseBack = currentPage === pages.length ? true : false;
  const bookClose =
    currentPage < pages.length - 2 || bookCloseFace ? false : true;
  const numberOf3dPages =
    defaultNumberOf3dPages * 2 > 8 ? 8 : defaultNumberOf3dPages * 2;
  const timeToFinishSlidePage = props.styles?.timeToFinishSlidePage
    ? props.styles.timeToFinishSlidePage
    : defaultTimeToFinishSlidePage;

  useEffect(() => {
    const pagesClone = [...pages];

    if (pages.length % 2 !== 0) {
      pagesClone.push({ page: <></> });
      setImparePagesNumber(true);
    }

    // Create the inner front cover page with an image
    const innerFrontCoverPage = {
      page: (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/uk_large.jpg"
            alt="Inner Front Cover Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              boxShadow:
                "inset 3px 0 0 rgba(255, 255, 255, 0.5), inset 0 3px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(255, 255, 255, 0.5)",
            }}
          />
        </div>
      ),
    };

    // Create the English content page
    const englishContentPage = {
      page: (
        <div style={{ padding: "20px", height: "100%", overflow: "auto" }}>
          <h2
            className="book-heading"
            style={{
              marginBottom: "1rem",
              marginTop: "1rem",
              fontSize: "1.4vw",
            }}
          >
            Изучай Русский
          </h2>
          <p className="book-text" style={{ fontSize: "1.3vw" }}>
            Русский язык — один из самых востребованных языков в 2024 году.
            Более 258 миллионов человек говорят на русском, и его важность
            продолжает расти благодаря роли России на международной арене. Это
            не просто язык общения — это ключ к экономическим и культурным
            возможностям. Знание русского открывает доступ к странам
            Евразийского экономического союза с совокупным населением более 180
            миллионов человек и ВВП более 2 триллионов долларов. Россия занимает
            одно из первых мест по добыче природных ресурсов, и сотрудничество с
            её рынком требует глубокого понимания языка.
            <span className="hide-on-super-small">
              Более 10% мировой нефти и 25% природного газа поставляется
              Россией, и знание языка может сделать вас незаменимым игроком в
              этой индустрии.
            </span>
            <span className="hide-on-small">
              Русский язык также является языком науки и литературы, с богатой
              культурной наследием. Изучение русского открывает доступ к
              произведениям Толстого, Достоевского и Пушкина в оригинале. Кроме
              того, Россия активно развивает сотрудничество в области космоса и
              ядерной энергии, где знание языка может быть особенно полезным.
            </span>
          </p>

          <PageButton
            label="Узнать больше"
            url="https://ro.wikipedia.org/wiki/Limba_rom%C3%A2n%C4%83"
          />
        </div>
      ),
    };

    if (props.cover) {
      pagesClone.unshift(
        { page: props.cover.frontCover.frontSide },
        innerFrontCoverPage
      );
      pagesClone.push(englishContentPage, {
        page: props.cover.backCover.frontSide,
      });
    } else {
      // If no cover is provided, add default front cover
      pagesClone.unshift(
        {
          page: (
            <div
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Book Title</h1>
            </div>
          ),
        },
        innerFrontCoverPage
      );
      pagesClone.push(englishContentPage);
    }

    setPages(pagesClone);
  }, []);

  const back = () => {
    if (currentPage === 2) {
      setBackgroundContainerBook(false);
    }

    if (currentPage > 0) setCurrentPage(currentPage - 2);
    setDirectionPageSlide(0);
  };

  const next = () => {
    if (currentPage > 0 && currentPage < pages.length - 2)
      setBackgroundContainerBook(true);
    else setBackgroundContainerBook(false);

    if (currentPage < pages.length) setCurrentPage(currentPage + 2);

    setDirectionPageSlide(1);
  };

  const generateStyleStateBook = () => {
    switch (true) {
      case bookCloseFace:
        return "none";
      case bookCloseBack:
        return "translateX(100%)";

      default:
        return "translateX(50%)";
    }
  };

  const generateZIndexPage = (id: number) => {
    let zIndex;

    if (id > currentPage) zIndex = pages.length - id;

    if (
      (id === currentPage - 2 && directionPageSlide === 1) ||
      id === currentPage
    )
      zIndex = pages.length * 2;

    if (id === currentPage && currentPage === 0) zIndex = pages.length;

    return zIndex;
  };

  const generateMargin3dPages = (id: number, flipped: boolean) => {
    let margin;
    if (currentPage > 0 && currentPage < pages.length - 1) {
      if (id < numberOf3dPages)
        margin = `${
          currentPage >= numberOf3dPages
            ? id + 1 - numberOf3dPages
            : id - currentPage + 1
        }px`;

      if (
        id >= pages.length - numberOf3dPages &&
        !flipped &&
        currentPage >= pages.length - numberOf3dPages
      )
        margin = `${
          pages.length -
          (pages.length - numberOf3dPages) +
          (id - pages.length) -
          1
        }px`;

      if (
        id >= pages.length - numberOf3dPages &&
        flipped &&
        currentPage >= pages.length - numberOf3dPages
      )
        margin = `${
          pages.length - (pages.length - numberOf3dPages) + (id - pages.length)
        }px`;

      if (
        id >= pages.length - numberOf3dPages &&
        !flipped &&
        currentPage <= pages.length - numberOf3dPages
      ) {
        if (currentPage <= numberOf3dPages) {
          margin = `${
            numberOf3dPages +
            (pages.length -
              (pages.length - numberOf3dPages) +
              (id - pages.length)) -
            currentPage
          }px`;
        } else
          margin = `${
            numberOf3dPages +
            (pages.length -
              (pages.length - numberOf3dPages) +
              (id - pages.length)) -
            numberOf3dPages
          }px`;
      }
    } else margin = "0";

    return margin;
  };

  const generateBorder3dPages = (id: number) => {
    let border = "0";
    const leftPage = id % 2 === 0 ? true : false;

    if (id < numberOf3dPages && leftPage) border = "1px solid gray";

    if (id >= pages.length - numberOf3dPages) border = "1px solid gray";

    if (id >= numberOf3dPages && id <= pages.length - numberOf3dPages)
      border = "0";

    return border;
  };

  const hideContentLastImparePage = (id: number) => {
    let opacity = 100;
    if (imparePagesNumber && id === pages.length - 1 && !props.cover)
      opacity = 0;

    if (imparePagesNumber && id === pages.length - 3 && props.cover)
      opacity = 0;

    return opacity;
  };

  const generateShadowPage = (id: number, coverType: CoverType) => {
    let backgroundPage = {
      background: `linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(233,233,233,0) 91%, rgba(230,230,230,0.5) 100%)`,
    };
    if (id === 1) {
      return backgroundPage;
    }
    // let backgroundPage = {background: `linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(233,233,233,0) 90%, rgba(230,230,230,0) 100%)`}

    //stil 1
    const softcover = (coverPosition: "face" | "back") => {
      return {
        background: `linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(233,233,233,0) 95%,  ${
          coverPosition === "face" ? "rgba(4,4,4,0.5)" : "rgba(81,81,81,0.5)"
        } 100%)`,
        boxShadow:
          "0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.5)",
      };
    };

    //stil2
    const hardcover = (coverPosition: "face" | "back") => {
      return {
        background: `linear-gradient(to right, ${
          coverPosition === "face" ? "rgb(60, 13, 20)" : "transparent"
        } 3px, rgba(255, 255, 255, 0.5) 5px, rgba(255, 255, 255, 0.25) 7px, rgba(255, 255, 255, 0.25) 10px, transparent 12px, transparent 16px, rgba(255, 255, 255, 0.25) 17px, transparent 22px)`,
        boxShadow:
          "0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.5)",
        backgroundPosition: "center",
      };
    };

    if (id < pages.length / 2) {
      if (props.cover) {
        if (id % 2 === 0 && id > 1) return backgroundPage;

        // cover face and inner cover
        if (id === 0 || id === 1)
          switch (coverType) {
            case "hardcover":
              return hardcover(id === 0 ? "face" : "back");
            case "softcover":
              return softcover(id === 0 ? "face" : "back");
          }
      }
    }

    if (id > pages.length / 2) {
      if (props.cover) {
        if (
          id % 2 !== 0 &&
          currentPage !== pages.length &&
          id < pages.length - 2
        )
          return backgroundPage;

        if (id > pages.length - 2 || id === pages.length - 2)
          switch (coverType) {
            case "hardcover":
              return hardcover(id === 0 ? "face" : "back");
            case "softcover":
              return softcover(id === 0 ? "face" : "back");
          }
      }
    }

    if (currentPage === pages.length / 2) {
      return backgroundPage;
    }
  };

  const generateWidthCovers = (id: number, flipped: boolean) => {
    let width = { width: "100%" };
    if (props.styles?.biggerCovers) {
      if (id === 0 || id === pages.length - 2) {
        if (id === 0 && flipped && currentPage < pages.length)
          width = {
            width: `calc(100% + ${numberOf3dPages * 2}px)`,
          };

        if (id === pages.length - 2 && currentPage > 0 && !flipped)
          width = {
            width: `calc(100% + ${numberOf3dPages * 2}px)`,
          };
      }
    }
    return { ...width };
  };

  const generateBookStyle = (className: BookClasses, id?: number) => {
    let classBook: any = {};

    if (className === "containerBook")
      classBook = {
        background: backgroundContainerBook ? "#eeeeee" : "none",
        color: "#000000",
      };

    if (className === "book")
      classBook = {
        position: `relative` as `relative`,
        transform: generateStyleStateBook(),
        width: `${defaultWidthBookValue}vw`,
        height: `${defaultHeightBookValue}vw`,
        marginLeft: `${
          currentPage <= numberOf3dPages
            ? currentPage * 2 - (currentPage > 0 ? numberOf3dPages * 2 : 0)
            : numberOf3dPages * 2 - numberOf3dPages * 2
        }px`,
        background: bookClose ? "none" : "#eeeeee",
        transition: `
                    transform ${timeToFinishSlidePage}s ease,
                    margin ${
                      currentPage <= 2 || currentPage >= pages.length - 2
                        ? timeToFinishSlidePage
                        : 0
                    }s ease
                    `,
      };

    if (className === "paper")
      classBook = {
        position: "absolute" as "absolute",
        ...generateWidthCovers(id!, id! < currentPage),
        height: "100%",
        top: "0",
        left: "0",
        perspective: "1500px",
        zIndex: `${generateZIndexPage(id!)}`,
        transition: `
          z-index ${id === 0 ? "0" : timeToFinishSlidePage / 3}s ease,
          width ${timeToFinishSlidePage}s ease
        `,
        cursor: "pointer",
      };

    if (className === "front-back")
      classBook = {
        backgroundColor: "white",
        position: "absolute" as "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        transformOrigin: "left",
        marginLeft: generateMargin3dPages(id!, id! < currentPage),
        borderRight: generateBorder3dPages(id!),
        transition: `
          transform ${timeToFinishSlidePage}s ease,
          margin ${
            currentPage <= 2 || currentPage >= pages.length - 2
              ? timeToFinishSlidePage
              : 0
          }s ease
        `,
        backfaceVisibility: id! % 2 === 0 ? "hidden" : ("initial" as "hidden"),
        zIndex: id! % 2 === 0 ? "1" : "0",
        transform: id! < currentPage ? "rotateY(-180deg)" : "initial",
      };

    if (className === "shadowPage")
      classBook = {
        position: "absolute" as "absolute",
        width: "100%",
        height: "100%",
        pointerEvents: "none" as "none",
        zIndex: "1000",
        ...generateShadowPage(
          id!,
          props.styles?.coverType ? props.styles.coverType : "hardcover"
        ),
      };

    if (className === "frontContent-backContent") {
      classBook = {
        opacity: hideContentLastImparePage(id!),
        position: "relative" as "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: id! % 2 === 0 ? "initial" : "rotateY(180deg)",
      };

      // Add the global class for text pages
      classBook.className = "global-text-page";

      // START: Custom styles for text pages
      // You can add or modify styles here to apply them globally to all text pages
      Object.assign(classBook, {
        fontFamily: "Amiri, serif",
        backgroundColor: "#f5f5dc",
        fontStyle: "italic",
        // fontSize: "16px",
        // lineHeight: "1.6",
        // color: "#333",
        // padding: "20px",
        // Add any other styles you want to apply globally to text pages
      });
      // END: Custom styles for text pages
    }

    return classBook;
  };

  const openCoverOnHover = (id: number) => {
    if (currentPage === 0 && id <= 1 && hoverBook)
      return { transform: "rotateY(-30deg)" };

    // if(currentPage === pages.length && id >= pages.length-2 && hoverBook)
    // return {transform:  "rotateY(-140deg)"}
  };

  return (
    <div
      className="book-container"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="containerBook"
        style={{
          ...generateBookStyle("containerBook"),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          id="book"
          className="book"
          onMouseEnter={() => setHoverBook(true)}
          onMouseLeave={() => setHoverBook(false)}
          style={generateBookStyle("book")}
        >
          {pages.map((x, id) =>
            id % 2 === 0 ? (
              <div
                key={id}
                className={`paper ${id < currentPage ? "flipped" : ""}`}
                onClick={() => (id < currentPage ? back() : next())}
                style={generateBookStyle("paper", id)}
              >
                {pages.map((x2, id2) =>
                  id2 === id || id2 === id + 1 ? (
                    <div
                      key={`${id}-${id2}`}
                      className={`${id2 % 2 === 0 ? "front" : "back"}`}
                      style={{
                        ...generateBookStyle("front-back", id2),
                        ...openCoverOnHover(id2),
                      }}
                    >
                      <div
                        className="shadowPage"
                        style={generateBookStyle("shadowPage", id2)}
                      ></div>
                      <div
                        className={`${
                          id2 % 2 === 0 ? "frontContent" : "backContent"
                        }`}
                        onClick={() => (id2 % 2 === 0 ? next() : back())}
                        style={generateBookStyle(
                          "frontContent-backContent",
                          id2
                        )}
                      >
                        {x2.page}

                        {props.styles?.pagesNumbers ? (
                          <div
                            className="pagesNumbers"
                            style={{
                              width: "100%",
                              position: "absolute",
                              bottom: "0",
                              fontSize: "1vw",
                              display: "flex",
                              justifyContent:
                                props.styles.pagesNumbers === "center"
                                  ? "center"
                                  : id2 % 2 === 0
                                  ? "right"
                                  : "left",
                              alignItems: "center",
                              marginLeft:
                                props.styles.pagesNumbers === "corners"
                                  ? id2 % 2 === 0
                                    ? "-1vw"
                                    : "1vw"
                                  : "0",
                              marginBottom: "1vw",
                            }}
                          >
                            {props.cover && id > 0 && id < pages.length - 2
                              ? id2 - 1
                              : props.cover
                              ? ""
                              : id2 + 1}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselBook;
