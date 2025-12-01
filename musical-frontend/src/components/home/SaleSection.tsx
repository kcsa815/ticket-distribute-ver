import { Link } from "react-router-dom";
import styles from "./SaleSection.module.css";

 export const saleList = [
  {
    id: 12,
    title: "오페라의 유령",
    venue: "청주예술의전당 대공연장",
    date: "2025.12.25",
    poster: "/images/musical-list1.jpg",
    discount: "20%",
    price: "88,000원",
  },
  {
    id: 13,
    title: "시카고",
    venue: "샤롯데씨어터",
    date: "2025.11.12",
    poster: "/images/musical-list2.jpg",
    discount: "30%",
    price: "70,000원",
  },
  {
    id: 14,
    title: "엘리자벳",
    venue: "홍익대 대학로 아트센터",
    date: "2025.12.10",
    poster: "/images/musical-list3.jpg",
    discount: "10%",
    price: "90,000원",
  },
  {
    id: 15,
    title: "햄릿",
    venue: "예술의전당",
    date: "2025.12.20",
    poster: "/images/musical-list4.jpg",
    discount: "25%",
    price: "110,000원",
  },
  {
    id: 16,
    title: "데스노트-한국초연",
    venue: "블루스퀘어",
    date: "2025.12.03",
    poster: "/images/musical-list5.jpg",
    discount: "15%",
    price: "85,000원",
  },
];

export default function SaleSection() {
  return (
    <section className={styles.section}>
      <h2>지금 할인 중!</h2>

      <div className={styles.grid}>
        {saleList.map((m) => (
          <Link to={`/musical/${m.id}`} key={m.id} className={styles.card}>
            <img src={m.poster} className={styles.poster} />

            <div className={styles.info}>
              <div className={styles.priceRow}>
                <span className={styles.discount}>{m.discount}</span>
                <span className={styles.price}>{m.price}</span>
              </div>

              <h3>{m.title}</h3>
              <p>{m.venue}</p>
              <p className={styles.date}>{m.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Link to="/sales" className={styles.moreButton}>
          할인 공연 전체 보기
        </Link>
      </div>
    </section>
  );
}