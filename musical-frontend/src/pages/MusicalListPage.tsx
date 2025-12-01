import { Link, useLocation } from "react-router-dom";
import styles from "./MusicalListPage.module.css";

// 개별 섹션 static 데이터 가져오기
import { rankingList } from "../components/home/RankingSection";
import { upcomingList } from "../components/home/UpcomingSection";
import { saleList } from "../components/home/SaleSection";
import { useEffect } from "react";


export default function MusicalListPage() {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // ---- URL 경로에 따라 보여줄 데이터 선택 ----
  let pageTitle = "전체 뮤지컬";
  let list: any[] = [...rankingList, ...upcomingList, ...saleList];
  if (location.pathname === "/rankings") {
    pageTitle = "랭킹";
    list = rankingList;
  }
  if (location.pathname === "/coming-soon") {
    pageTitle = "오픈 예정";
    list = upcomingList;
  }
  if (location.pathname === "/sales") {
    pageTitle = "할인 중";
    list = saleList;
  }

  return (
    <div className={`content-wrapper ${styles.pageContainer}`}>
      <h2 className={styles.pageTitle}>{pageTitle}</h2>

      <div className={styles.grid}>
        {list.map((m) => (
          <Link
            to={`/musical/${m.id}`}
            key={m.id}
            className={styles.card}>
            <img src={m.poster} className={styles.poster} />

              <div className={styles.info}>
                <h3>{m.title}</h3>

                {"venue" in m && <p className={styles.venue}>{m.venue}</p>}
                {"date" in m && <p className={styles.date}>{m.date}</p>}
                {"time" in m && <p className={styles.time}>{m.time}</p>}
                {"discount" in m && (
                  <p className={styles.discount}>할인: {m.discount}</p>
                )}
                {"price" in m && <p className={styles.price}>{m.price}</p>}
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
