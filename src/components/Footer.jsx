import './Footer.css';

const date = new Date();

export default function Footer() {
  return (
    <footer>
      <p>Copyleft 2021-{date.getFullYear()}, Introducción a React masterclass</p>
    </footer>
  )
}