import { Link } from "react-router-dom";
import styles from "./UpcomingSection.module.css";

export const upcomingList = [
  {
    id: 6,
    title: "몬테크리스토",
    time: "오늘 14:00",
    venue: "경희대학교 평화의전당",
    poster: "/images/coming-soon1.jpg",
  },
  {
    id: 7,
    title: "팬텀",
    time: "내일 19:00",
    venue: "예술의전당 CJ토월극장",
    poster: "/images/coming-soon2.jpg",
  },
  {
    id: 8,
    title: "레베카",
    time: "2025.01.11 개막",
    venue: "블루스퀘어",
    poster: "/images/coming-soon3.jpg",
  },
  {
    id: 9,
    title: "마리퀴리",
    time: "곧 오픈",
    venue: "샤롯데씨어터",
    poster: "/images/coming-soon4.jpg",
  },
  {
    id: 10,
    title: "해적",
    time: "2025.02.15 개막",
    venue: "예술의전당",
    poster: "/images/coming-soon5.jpg",
  },
  {
    id: 11,
    title: "물랑루즈!",
    time: "2025.03.01 개막",
    venue: "블루스퀘어",
    poster: "/images/coming-soon6.jpg",
  },
];

export default function UpcomingSection() {
  return (
    <section className={styles.section}>
      <h2>오픈 예정</h2>

      <div className={styles.grid}>
        {upcomingList.map((m) => (
          <Link to={`/musical/${m.id}`} key={m.id} className={styles.card}>
            <img src={m.poster} className={styles.poster} />
            <div className={styles.info}>
              <span className={styles.time}>{m.time}</span>
              <h3>{m.title}</h3>
              <p>{m.venue}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className={styles.buttonWrapper}>
        <Link to="/coming-soon" className={styles.moreButton}>
          오픈 예정 전체 보기
        </Link>
      </div>
    </section>
  );
}
