"use client"
import { usePathname, useParams } from "next/navigation"
import Link from "next/link"
import ChangeLocale from "./ChangeLocale"
import { LocaleTypes } from "../i18n/settings"
import { useTranslation } from "../i18n/client"
import { useState } from "react"
import Image from "next/image"
const Navbar = () => {
  const pathName = usePathname()
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, "common")

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    console.log("open")
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header>
      <nav className="fixed top-0 w-full bg-black shadow-lg h-16 md:h-20 lg:h-24 flex flex-row items-center z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="flex space-x-7 w-3/5">
              <Link
                href={`/${locale}`}
                className="flex items-center py-4 px-2 space-x-4"
              >
                <div className="w-[30px] h-[30px] relative flex items-center justify-center">
                  <Image
                    src="/images/common/logo.png"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Logo"
                    fill
                    className="absolute w-full min-h-full object-cover object-center"
                  />
                </div>
                <span className=" text-[#16f2b3] text-3xl font-bold  bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                  {t("jirawat")}
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1 w-full ">
              <div className="flex flex-row justify-between w-full">
                <div>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/about` || pathName === "/about"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/about`}
                  >
                    {t("about")}
                  </a>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/experiences` ||
                      pathName === "/experiences"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/experiences`}
                  >
                    {t("experiences")}
                  </a>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/skills` || pathName === "/skills"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/skills`}
                  >
                    {t("skills")}
                  </a>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/education` ||
                      pathName === "/education"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/education`}
                  >
                    Education
                  </a>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/blogs` || pathName === "/blogs"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/blogs`}
                  >
                    Blogs
                  </a>
                  <a
                    className={`py-4 px-2 font-semibold hover:text-purple-500 transition duration-300 ${
                      pathName === `/${locale}/projects` ||
                      pathName === "/projects"
                        ? "text-blue-700 border-b-4 border-purple-500"
                        : "text-gray-500"
                    }`}
                    href={`/${locale}/projects`}
                  >
                    Projects
                  </a>
                </div>
                <div>
                  <ChangeLocale />
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none menu-button"
                data-testid="button-mobile"
                onClick={toggleMobileMenu}
              >
                <div className={``}>
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 00 24 24"
                    stroke="currentColor"
                  >
                    <path d="m4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </div>
              </button>
            </div>
            {isMobileMenuOpen && (
              <div className="hidden mobile-menu" data-testid="mobile-menu">
                <ul className="">
                  <li className="active">
                    <a
                      href="nav.html"
                      className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#About"
                      className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact Us"
                      className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
