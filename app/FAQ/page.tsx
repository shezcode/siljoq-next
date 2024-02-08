import Navbar from "@/components/Navbar";

export default function FAQ(){

  const style = {
    h3: {
      textDecoration: 'underline',
      fontStyle: 'italic',
      paddingLeft: '4em',
    }
  }


  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Navbar notSelf='/'/>
      <main className="p-4 w-full max-w-[900px] text-pretty">
        <h2 className="p-4 text-2xl font-bold">FAQ</h2>
        <section className="flex flex-col gap-8">
          <article>
            <h3 style={style.h3}>Do you offer international shipping?</h3>
            <p>Yes, we offer international shipping to many countries. During checkout, you can select your country for shipping, and the shipping cost will be calculated accordingly.</p>
          </article>
          <article>
            <h3 style={style.h3}>What payment methods do you accept?</h3>
            <p>We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment gateways.</p>
          </article>
          <article>
            <h3 style={style.h3}>What is your return policy?</h3>
            <p>We want you to be completely satisfied with your purchase. If you're not happy with your item(s), you can return them within 30 days of receiving your order for a refund or exchange. Please refer to our <strong>Support</strong> page for detailed instructions.</p>
          </article>
          <article>
            <h3 style={style.h3}>How can I contact customer support?</h3>
            <p>You can reach our customer support team via email at <strong className="underline">support@siljoq.com</strong> through the contact form on our website. We aim to respond to all inquiries within <i>24 hours</i> during business days.</p>
          </article>
          <article></article>
          <article></article>
        </section>
      </main>
    </div>
  );
}

