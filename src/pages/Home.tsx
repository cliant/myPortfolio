// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [typedIntro, setTypedIntro] = useState("");
  const [typedPhone, setTypedPhone] = useState("");
  const [typedEmail, setTypedEmail] = useState("");

  const introText = "👤 J.H.Park / Developer & Traveler";
  const phoneText = "📞 010-7712-9162";
  const emailText = "✉️ uamy2222@naver.com";
  const typingSpeed = 70; // ⚡️ 타이핑 속도 (ms), 이전 100에서 70으로 더 빠르게 변경

  // 첫 번째 줄 타이핑 (Developer & Traveler)
  useEffect(() => {
    let currentText = "";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < introText.length) {
        currentText += introText[index];
        setTypedIntro(currentText);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // 두 번째 줄 타이핑 (전화번호)
  useEffect(() => {
    if (typedIntro === introText) { // 첫 번째 줄 타이핑이 끝난 후 실행
      let currentText = "";
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < phoneText.length) {
          currentText += phoneText[index];
          setTypedPhone(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [typedIntro]);

  // 세 번째 줄 타이핑 (이메일)
  useEffect(() => {
    if (typedPhone === phoneText) { // 두 번째 줄 타이핑이 끝난 후 실행
      let currentText = "";
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < emailText.length) {
          currentText += emailText[index];
          setTypedEmail(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [typedPhone]);


  return (
    <main className="main-content">
      <h1 className="title animated-title">Enjoy Life</h1>
      <div className="profile">
        <p><span className="typed-effect">{typedIntro}</span></p>
        <p><span className="typed-effect">{typedPhone}</span></p>
        <p><span className="typed-effect">{typedEmail}</span></p>
      </div>
    </main>
  );
}

export default Home;