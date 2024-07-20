import Head from "next/head";

import ContactForm from "@/components/contact/contact-from";

export interface ContactPageProps {}

export default function ContactPage({}: ContactPageProps) {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
}
