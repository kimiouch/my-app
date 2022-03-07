export default function Footer() {
  return (
    <div className="Footer">
      <hr className="buttom" />

      <h4 className="sorce-link">
        <a
          href="https://github.com/kimiouch/my-app"
          className="thesrcLinks"
        >
          open source code
        </a>
        hosted on
        <a href="https://www.netlify.com/" className="thesrcLinks">
          {" "}
          netlify{" "}
        </a>
        ; icons from
        <a href="https://www.flaticon.com/" className="thesrcLinks">
          {" "}
          flaticon{" "}
        </a>{" "}
        and edited by kimia haghighi🦕
      </h4>
    </div>
  );
}
