import TombolMenu from "@components/TombolMenu";

export default function Home() {
  return (
    <>
      <img
        src="/src/assets/img/me.jpg"
        alt="Angga Pratama"
      />
      <h2>Angga Pratama</h2>
      <TombolMenu
        to="/toramtools"
        text="Toram Online Tools"
      />
      <TombolMenu
        to="/osrs"
        text="Old School RuneScape Tools"
      />
    </>
  );
}
