import personalData from "./personalData";

module.exports = [
  {
    id: "01",
    icon: "/images/contact/phone-call 1.png",
    title: "Phone ",
    info: (
      <>
        <p>
          <a
            href={`tel:${personalData.contact.phone}`}
            className="text-gray-lite text-lg dark:text-[#A6A6A6] "
          >
            {personalData.contact.phone}
          </a>
        </p>
      </>
    ),
    bg: "#FCF4FF",
  },
  {
    id: "02",
    icon: "/images/contact/email 1.png",
    title: "Email ",
    info: (
      <>
        <p>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="text-gray-lite text-lg dark:text-[#A6A6A6] "
          >
            {personalData.contact.email}
          </a>
        </p>
      </>
    ),
    bg: "#EEFBFF",
  },
  {
    id: "03",
    icon: "/images/contact/map 1.png",
    title: "Address ",
    info: (
      <>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          {personalData.address.city}, {personalData.address.state},{" "}
          {personalData.address.country}
        </p>
      </>
    ),
    bg: "#F2F4FF",
  },
];
