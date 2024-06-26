import Link from "next/link"
import HeroSection from "../components/HeroSection"
import { createTranslation } from "../i18n/server"
import { LocaleType } from "../i18n/settings"

const IndexPage = async ({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) => {
  const { t } = await createTranslation(locale, "home")
  return (
    <div className="container">
      <HeroSection />
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}

export default IndexPage
