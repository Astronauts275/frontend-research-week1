import "../styles/Contact.css";

function Contact() {
  return (
    <div className="page contact">
      <h2>Liên hệ</h2>
      <form>
        <input type="text" placeholder="Tên của bạn" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Nội dung" rows="4"></textarea>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default Contact;
