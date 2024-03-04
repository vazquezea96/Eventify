import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <h2 className="font-bold">Welcome to Eventify! </h2>

      <p>
        Our Story At Eventify, were passionate about bringing people together
        through live events. Our journey began when Eddie attended their first
        concert and felt the magic of live music. Inspired by that experience,
        we set out to create a platform that makes discovering and attending
        events easy, exciting, and affordable.
      </p>

      <br />
      <br />

      <h3 className="font-bold">What We Offer:</h3>
      <ul>
        <li>
          Event Discovery: We curate a wide range of events, from sports games
          and concerts to theater performances and festivals. Whether youre a
          die-hard sports fan or a music enthusiast, weve got something for you.
        </li>
        <li>
          Transparent Pricing: Like you, we dislike hidden fees. Thats why we
          display the total price upfront, including all fees. No surprises at
          checkout!
        </li>
        <li>
          SeatGeek Score: Our unique rating system helps you find the best seats
          based on pricing, view, and historical data. Say goodbye to guesswork!
        </li>
      </ul>

      <br />
      <br />

      <h3 className="font-bold">Our Mission </h3>
      <p>
        We believe that life is better when youre surrounded by the energy of a
        live crowd. Our mission is to connect you with unforgettable
        experiences, whether youre cheering for your favorite team, dancing to
        your favorite band, or laughing at a comedy show.
      </p>

      <br />
      <br />

      <p className="font-bold">Meet Our Team:</p>
      <ul>
        <li> Eddie </li>
      </ul>

      <br />
  

      <p className="mb-10">
        Join the Eventify Community Were more than just a ticketing platform;
        were a community of event lovers. Connect with us on social media, sign
        up for our newsletter, and be the first to know about upcoming events,
        exclusive offers, and behind-the-scenes stories.
      </p>

      <Footer />

      {/* Source: Conversation with Bing, 3/4/2024
      (1) 20 About Us Page Examples With Templates - Shopify. https://www.shopify.com/blog/how-to-write-an-about-us-page.
      (2) Step-by-Step Guide to Building a Website Like SeatGeek in 2023. https://www.sharetribe.com/how-to-build/website-like-seatgeek/.
      (3) 30 Examples of Stellar About Us Pages for Inspiration - Kinsta. https://kinsta.com/blog/about-us-page/.
      (4) How to Get the Best Deals on Event Tickets | Lifehacker. https://lifehacker.com/which-event-ticket-sites-have-the-best-deals-1849501508.
      (5) 7 Alternative Sites Like SeatGeek for Obtaining Affordable Event .... https://www.similarsitesearch.com/sites/seatgeek/.
      (6) The 20 Best Alternatives to SeatGeek - Knoji. https://seatgeek.knoji.com/alternatives/. */}
    </>
  );
}
