export default function TopImage() {
  return (
    <section className="bg-desaturated-dark-cyan">
      <img
        src="bg-header-mobile.svg"
        alt=""
        className="w-full landscape:hidden"
      />
      <img
        src="bg-header-desktop.svg"
        alt=""
        className="w-full portrait:hidden"
      />
    </section>
  );
}
