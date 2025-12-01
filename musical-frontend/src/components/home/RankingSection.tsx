import { Link } from "react-router-dom";
import styles from "./RankingSection.module.css";

export const rankingList = [
  {
    id: 1,
    title: "프랑켄슈타인",
    venue: "잠실종합운동장 내 빅탑",
    date: "2025.10.11 ~ 12.28",
    poster: "/ticket-distribute-ver/images/ranking1.jpg",
  },
  {
    id: 2,
    title: "데스노트",
    venue: "홍익대 대학로 아트센터",
    date: "2025.11.01 ~ 11.30",
    poster: "/ticket-distribute-ver/images/ranking2.jpg",
  },
  {
    id: 3,
    title: "한복 입은 남자",
    venue: "블루스퀘어 신한카드홀",
    date: "2025.11.05 ~ 12.20",
    poster: "/ticket-distribute-ver/images/ranking3.jpg",
  },
  {
    id: 4,
    title: "엘리자벳",
    venue: "LG아트센터",
    date: "2025.12.05 ~ 12.30",
    poster: "/ticket-distribute-ver/images/ranking4.jpg",
  },
  {
    id: 5,
    title: "웃는남자",
    venue: "샤롯데씨어터",
    date: "2025.11.10 ~ 12.31",
    poster: "/ticket-distribute-ver/images/ranking5.jpg",
  },
];

export default function RankingSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>랭킹</h2>

        <div className={styles.grid}>
          {rankingList.map((item) => (
            <Link to={`/musical/${item.id}`} key={item.id} className={styles.card}>
              <img src={item.poster} className={styles.poster} />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>{item.venue}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

      <div className={styles.buttonWrapper}>
        <Link to="/rankings" className={styles.moreButton}>
          전체 랭킹 보기
        </Link>
      </div>
    </section>
  );
}
