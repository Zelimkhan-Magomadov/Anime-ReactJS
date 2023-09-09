function AnimeCard(props) {
  const { imageUrl, title, onClick } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "32px",
      }}
    >
      <img onClick={onClick} width={250} src={imageUrl} alt="" />

      <h2 style={{ marginTop: "16px" }}>{title}</h2>
    </div>
  );
}

export default AnimeCard;
