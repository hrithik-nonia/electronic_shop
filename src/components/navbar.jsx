import AnnouncementBar from "./navbar_first_comp";
import CategoryNav from "./navbar_last_comp";
import Header from "./navbar_second_comp";

export default function Navbar() {
  return (
    <>
      {/* navbar top most content */}
      <AnnouncementBar />

      {/* navbar second comp */}
      <Header />

      {/* navbar last comp */}
      <CategoryNav />
    </>
  );
}
