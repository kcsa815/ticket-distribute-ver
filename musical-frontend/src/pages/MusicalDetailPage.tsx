import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarCustom.css";

import styles from "./MusicalDetailPage.module.css";
import BookingPage from "./BookingPage";
import { allMusicals } from "../data/allMusicals";

// 날짜 비교 유틸
const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function MusicalDetailPage() {
  const { musicalId } = useParams<{ musicalId: string }>();
  const numericId = Number(musicalId);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPerformanceId, setSelectedPerformanceId] = useState<
    number | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // allMusicals 내부에서 해당 id 를 가진 작품 찾기
  const musical = useMemo(
    () => allMusicals.find((m) => m.id === numericId) ?? null,
    [numericId]
  );

  // 선택한 날짜에 해당하는 회차만 필터링
  const performancesForDay = useMemo(() => {
    if (!musical) return [];
    return musical.performances.filter((perf) =>
      isSameDay(new Date(perf.dateTime), selectedDate)
    );
  }, [musical, selectedDate]);

  // ----------- 가드 -------------
  if (!musical) {
    return (
      <div className="content-wrapper">
        <p style={{ padding: 40 }}>존재하지 않는 작품입니다.</p>
      </div>
    );
  }
  // ------------------------------

  const handleDateChange = (date: any) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      setSelectedPerformanceId(null);
    }
  };

  const handlePerfSelect = (id: number) => {
    setSelectedPerformanceId(id);
  };

  const handleOpenModal = () => {
    if (!selectedPerformanceId) {
      alert("먼저 공연 회차를 선택해주세요!");
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPerformanceId(null);
  };

  // ============================
  //        JSX START
  // ============================

  return (
    <div className="content-wrapper">
      <div className={styles.mainLayout}>
        {/* -------------------- */}
        {/* 왼쪽 컬럼 */}
        {/* -------------------- */}
        <div className={styles.leftColumn}>
          <h3 className={styles.title}>뮤지컬 &lt;{musical.title}&gt;</h3>

          <section className={styles.topInfoSection}>
            <img
              src={musical.poster}
              alt={musical.title}
              className={styles.posterImage}
            />

            <div className={styles.metaInfo}>
              <p>
                <strong>공연장소:</strong> {musical.venue}
              </p>
              <p>
                <strong>공연기간:</strong> {musical.period}
              </p>
              <p>
                <strong>공연시간:</strong> {musical.runningTime}분
              </p>
              <p>
                <strong>관람연령:</strong> {musical.ageRating}
              </p>
              {musical.priceInfo && (
                <p>
                  <strong>가격/할인:</strong> {musical.priceInfo}
                </p>
              )}
            </div>
          </section>

          <section className={styles.fullDescriptionSection}>
            <h4>공연 상세 정보</h4>
            <div className={styles.descriptionBox}>
              <img
                src={musical.descriptionImage}
                alt={`${musical.title} 상세 이미지`}
              />
            </div>
          </section>
        </div>

        {/* -------------------- */}
        {/* 오른쪽 컬럼 */}
        {/* -------------------- */}
        <div className={styles.rightColumn}>
          <h3>공연 날짜 선택</h3>

          <div className={styles.calendarContainer}>
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              formatDay={(locale, date) => date.getDate().toString()}
            />
          </div>

          <section className={styles.performanceSection}>
            <ul className={styles.performanceList}>
              <li className={styles.listHeader}>
                {selectedDate.toLocaleDateString("ko-KR")}
              </li>

              {performancesForDay.length > 0 ? (
                performancesForDay.map((perf) => (
                  <li
                    key={perf.id}
                    className={styles.performanceItem}
                    onClick={() => handlePerfSelect(perf.id)}
                  >
                    <div className={styles.performanceInfo}>
                      <strong>
                        {new Date(perf.dateTime).toLocaleTimeString("ko-KR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </strong>
                      <span>{perf.venue}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li className={styles.noItem}>
                  선택한 날짜에 예매 가능한 회차가 없습니다.
                </li>
              )}
            </ul>

            <div className={styles.bookingActions}>
              <button
                className={styles.bookButton}
                onClick={handleOpenModal}
                disabled={!selectedPerformanceId}
              >
                예매하기
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* 예매 모달 */}
      <BookingPage
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        performanceId={selectedPerformanceId}
      />
    </div>
  );
}
