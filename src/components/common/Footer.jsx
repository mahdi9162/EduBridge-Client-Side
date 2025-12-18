import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Container from '../Container/Container';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <Container>
        {/* Main footer */}
        <div className="footer p-10 md:footer-horizontal items-start gap-10">
          {/* About */}
          <aside className="max-w-xs space-y-3">
            <Logo />
            <p className="text-sm text-neutral">
              EduBridge is a trusted tuition platform connecting students with qualified tutors — where trust shapes learning.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-base-100 border border-base-300 flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </aside>

          {/* Links */}
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Find Tutors</a>
            <a className="link link-hover">Post Tuition</a>
            <a className="link link-hover">Dashboard</a>
            <a className="link link-hover">Payments</a>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>

          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300" />

        {/* Copyright */}
        <div className="py-4 text-center text-xs text-neutral">© {new Date().getFullYear()} EduBridge. All rights reserved.</div>
      </Container>
    </footer>
  );
};

export default Footer;
