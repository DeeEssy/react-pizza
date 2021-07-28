import ContentLoader from "react-content-loader";

function LoadingPlaceholder() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="142" r="115" />
      <rect x="0" y="275" rx="0" ry="0" width="280" height="26" />
      <rect x="0" y="310" rx="0" ry="0" width="280" height="84" />
      <rect x="0" y="418" rx="0" ry="0" width="280" height="44" />
    </ContentLoader>
  );
}

export default LoadingPlaceholder;
