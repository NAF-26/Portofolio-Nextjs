import Image from "next/image";
import aboutImg from "../../assets/Ryo Yamada.gif";
import Skills from "../../components/Skills";

export default function AboutPage() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>
          Aku <span> Calon Web Designer Dan Game Developer</span>
        </h3>
        <p>
          Kenalin, aku Naufal Ghaly Ramadhan, anak kelas XI RPL A yang hobinya
          bejibun banget. Mulai dari olahraga kayak basket, tenis, dan
          badminton, sampai yang santai kayak nonton anime dan main game.
          <br />
          <br />
          Bicara soal game, jangan ditanya! Aku ini PRO PLAYER PUBG lho, jadi
          urusan tembak-menembak di game udah kayak sarapan sehari-hari. Tapi di
          balik semua itu, Aku juga punya minat serius di dunia digital,
          terutama sebagai Web Designer dan Game Developer.
          <br />
          <br />
          Kalau lagi santai, paling enak ditemenin sama sushi atau ramen favorit
          ku, sambil minum kopi, green tea, atau lemon tea. Pokoknya, Aku
          orangnya suka mencoba hal baru dan selalu siap buat tantangan.
        </p>

        <Skills />
      </div>

      <div className="about-img">
        <Image src={aboutImg} alt="About" width={400} height={400} />
      </div>
    </section>
  );
}
