import loadingImg from "../../imgs/Loading.gif";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="loading"
    >
      <img src={loadingImg} alt="loading" />
    </div>
  );
}
