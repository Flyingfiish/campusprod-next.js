import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";

export default function PrivacyPolicyRoute() {
  return (
    <div className="privacy-container">
      <div className="provacy-wrapper">
        <div className="privacy-head">
          <h1>Политика конфиденциальности</h1>
          <Link href='/'>
            <a>
              <img src="close.svg"></img>
            </a>
          </Link>
        </div>
        <div>
          <p>Privacy policy of the website</p>
          <p>
            This Privacy Policy governs the processing of personal data
            collected through the website
          </p>
          <h2>I. Administrator</h2>
          <p>
            The administrator in relation to personal data of persons using the
            BluBlu Studios Website ("Users") is Animation Group Sp. z o.o. with
            its registered office in Warsaw, Bielanska 4/51, 00-085, entered
            into the register of entrepreneurs kept by the District Court for
            the city of Warsaw. The Company is entered in the Register of
            Entrepreneurs kept by the District Court for the Capital City of
            Warsaw in Warsaw, 12th Commercial Division of the National Court
            Register, under the number 0000539387, NIP 5252606845, REGON
            360650271, with the share capital of PLN 50,000.00
          </p>
          <h2>
            II. Scope of data collection and purpose of personal data processing
          </h2>
          <p>
            Any personal data shall be collected to the extent appropriate and
            not exceeding the purposes for which the data are to be processed.
          </p>
          <p>
            We process data that you provide voluntarily or as part of your use
            of our services. These are primarily the information that the User
            decides to provide us when using the contact form, as well as the
            data he leaves behind when navigating the.
          </p>
          <p>
            In case of using the contact form placed on the Website, the User
            provides the following data: name, e-mail address, contact telephone
            (optional), company (optional), budget and content of the message.
            The content of the message may also include other personal data. The
            legal basis for the processing of personal data in such a case is
            the consent of the User resulting from the initiation of contact
            with. Personal data provided within the contact form are processed
            solely for the purpose of handling the User's enquiry. The content
            of correspondence may be archived.
          </p>
          <h2>III. Cookies</h2>
          <p>
            When you visit our Website, we automatically collect data about your
            visit, such as your IP address, browser type, etc. We will
            automatically collect data about you when you visit our Website.
            This data is saved by the browser in the form of a file which is
            stored on the end device - the User's computer, tablet, smartphone,
            etc. By using cookies on the Website, we never identify the identity
            of Users. The exploitation data is anonymous and is stored for no
            longer than 26 months or until the User decides to delete it.
          </p>
          <p>
            You may limit the processing of this information. All you have to do
            is read our Cookies Policy and follow the information contained
            therein.
          </p>
          <h2>IV. Rights relating to the personal data you provide to us</h2>
          <p>
            You have the right to demand from access to your data, including
            obtaining a copy of the data, the right to request data correction
            if the data are incorrect or need to be updated, the right to delete
            the data (in certain situations), the right to lodge a complaint
            with the supervisory authority - the President of the Office for
            Personal Data Protection, the right to limit the processing of data.
          </p>
          <p>
            If your data are processed on the basis of consent, you may
            additionally exercise the following rights: the right to withdraw
            consent to the extent that they are processed on this basis.
            Withdrawal of consent does not affect the compliance with the law of
            processing, which was carried out on the basis of consent before its
            withdrawal.
          </p>
          <p>
            If your data are processed on the basis of the consent or within the
            framework of the provided service (data are necessary for the
            provision of the service), you may additionally exercise the
            following rights: the right to transfer personal data, i.e. to
            receive personal data, in a structured, commonly used
            machine-readable format. You can send this data to another data
            controller.
          </p>
          <p>
            If you have any doubts whether your data is properly processed by,
            you may file a complaint with the President of the Office for the
            Protection of Personal Data.
          </p>
          <p>
            If you have any doubts or want to exercise the above rights, you can
            contact us by e-mail at the following address:
          </p>
          <h2>V. Retention of data</h2>
          <p>
            Data shall be kept for no longer than is necessary for the purposes
            for which they were transmitted.
          </p>
          <h2>VI. Recipients of data</h2>
          <p>
            Personal data will not be transferred to any third party other than
            authorized persons. Authorized persons are internal processors and,
            if necessary, partners or service providers.
          </p>
          <h2>VII. Protection</h2>
          <p>
            Guarantees the confidentiality of all personal data provided to it
            and ensures that all security and data protection measures required
            by data protection legislation are taken. Personal data is collected
            with due diligence and protected against access by unauthorized
            persons.
          </p>
          <h2>VIII. Changes to the Privacy Policy</h2>
          <p>
            The provisions of this Privacy Policy may be amended or updated, so
            we recommend that you follow these changes regularly. This Privacy
            Policy is effective as of January 1, 2018.
          </p>
          <h2>IX. Contact</h2>
          <p>
            Any questions and comments regarding the Privacy and Cookie Policy
            should be sent to the address of by e-mail or post.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
