import { Fragment } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Navbar() {
  return (
    <Fragment>
      <section className="bg-indigo-600 text-black h-20 flex items-center justify-center">
        <div>
          <h6 className="text-xl text-gray-200">
            &copy; handymanserviceu {new Date().getFullYear()}
          </h6>
        </div>
      </section>
      <section className="bg-indigo-700  space-x-4 h-20 flex items-center justify-center">
        {soocialMedia.map((social) => (
          <Fragment key={social.name}>
            <a href={social.url} title={social.name}>
              {social.icon}
            </a>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const soocialMedia = [
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: <FaFacebook size="25px" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: <FaTwitter size="25px" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: <FaInstagram size="25px" />,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
    icon: <FaLinkedinIn size="25px" />,
  },
];