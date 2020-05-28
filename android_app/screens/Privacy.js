import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";

class Privacy extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Block flex style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Block flex>
            <Block style={styles.padded}>
              <Block>
                <Text style={{ marginTop: 35 }}>
                  Neetizen (collectively “Neetizen”, "We", "Us", and "Ours") is
                  committed to protecting your privacy. This Privacy Notice
                  (“Notice”) describes how Neetizen processes Personal Data in
                  its capacity as a controller (i.e. Neetizen decides what
                  Personal Data is collected and what it is Used for) or
                  processor (i.e. Neetizen only processes the data as per the
                  controller's instructions), as the case may be. It also
                  describes your choices regarding Use, access and correction of
                  your Personal Data.
                </Text>
                <Text style={{ marginTop: 35 }}>
                  WHOM DOES THIS NOTICE APPLY TO?
                </Text>
                <Text style={{ marginTop: 5 }}>
                  This Notice Applies to (i) entities or individuals, excluding
                  End-Users and Users, who have subscribed to the Service(s) and
                  have agreed to the Terms (hereinafter referred to as the
                  “Customer”) and (ii) individuals (“Individuals”) from whom
                  Neetizen collects data as a controller as specified below.
                </Text>
                <Text style={{ marginTop: 35 }}>ANY QUESTIONS?</Text>
                <Text style={{ marginTop: 5 }}>
                  If you have questions or complaints regarding our privacy
                  notice or practices, please contact Us at
                  support@Neetizen.com.
                </Text>
                <Text size={16} color="rgba(0,0,0,1)" style={{ marginTop: 35 }}>
                  WHAT PERSONAL DATA DOES NEETIZEN COLLECT AND WHY?
                </Text>
                <Text style={{ marginTop: 20 }}>
                  A) Personal Data We collect and process for our own purposes:
                  Collected Data
                </Text>
                <Text style={{ marginTop: 5 }}>
                  When you visit our Mobile Applications & Websites or
                  participate in Neetizen’s events, Neetizen may collect
                  information, which may include Personal Data, from Individuals
                  as set forth below (collectively referred to as “Collected
                  Data”). Neetizen shall be the controller for the Collected
                  Data – this means that Neetizen decides what Collected Data is
                  processed and why.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  When does Neetizen process Collected Data?
                </Text>
                <Text style={{ marginTop: 10 }}>
                  1) Sign-up, and Account information.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  When you subscribe and sign-up to the Service(s), We may
                  collect your (i) contact information such as name, e-mail
                  address, mailing address, IP address, geographic location, or
                  phone number of the Account admin; (ii) name and e-mail
                  address when Account admin/Agent(s) provide feedback from
                  within the Service(s); and
                </Text>
                <Text style={{ marginTop: 10 }}>
                  Subject to this Notice and the Terms, We will Use such data,
                  including without limitation, to (i) provide you the
                  Service(s); (ii) send you communication from the Service(s);
                  (iii) assess your needs to determine or suggest suitable
                  Service(s); (iv) send you requested information about the
                  Service(s); (v) respond to customer service requests,
                  questions and concerns; (vi) administer your Account; (vii)
                  facilitate your transactions with other Users when you Use our
                  Service(s).
                </Text>
                <Text style={{ marginTop: 10 }}>2) Forms</Text>
                <Text style={{ marginTop: 5 }}>
                  When you submit any forms on our Mobile App or Website, you
                  should be aware that any information you provide in these
                  areas may be read, collected, and Used by others who access
                  them. Further, We may collect your (i) contact information
                  such as name, e-mail address, mailing address, or phone
                  number; (ii) a short bio about you to identify you as the
                  author of the post. When you actively subscribe to our
                  newsletters, We collect your e-mail address to share our
                  newsletters with you.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  Subject to this Notice, We will Use such data, including
                  without limitation, to (i) assess your needs to determine or
                  suggest suitable Service(s); (ii) send you requested
                  information about the Service(s); (iii) send you promotional
                  and marketing communications (where you have requested Us to
                  do so); and (iv) respond to your questions and concerns.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  3) Cookies and Similar Technologies.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We and our third party partners Use cookies and similar
                  technologies in analyzing trends, administering the Mobile App
                  and the Website, tracking Users’ movements around the site,
                  and gathering demographic information about our User base as a
                  whole. We may receive reports based on the Use of these
                  technologies by these companies on an individual and
                  aggregated basis. Most Web browsers support cookies and Users
                  can control the Use of cookies at the individual browser
                  level. Please note that if you choose to disable cookies, it
                  may limit your Use of certain features or functions on our
                  Websites and services.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  As is true of most Websites or Mobile Apps for that matter, We
                  gather certain information automatically and store it in log
                  files. This information may include internet protocol (IP)
                  addresses, browser type, internet service provider (ISP),
                  referring/exit pages, the files viewed on our Website (e.g.,
                  HTML pages, graphics, etc.), operating system, date/time
                  stamp, and/or clickstream data. We link this automatically
                  collected data to other data We collect about you. We do this
                  mainly to improve services We offer you, to improve marketing,
                  analytics, and/or Website performance and functionality.
                </Text>
                <Text style={{ marginTop: 10 }}>4) Analytics.</Text>
                <Text style={{ marginTop: 5 }}>
                  Apart from the aforementioned information collected by Us, We
                  automatically receive and record certain Personal Data of
                  yours when you visit our Mobile App or Website. This includes
                  device model, IP address, the type of browser being Used,
                  Usage pattern through cookies and browser settings, query logs
                  and product Usage logs. We also collect clicks, scrolls,
                  conversion and drop-off on our Websites and service(s) to
                  render User journey at real-time. Subject to this Notice, We
                  will Use such data, including without limitation, to (i)
                  assess your needs to determine or suggest suitable Service(s);
                  (ii) send you requested information about the Service(s);
                  (iii) respond to customer service requests, questions and
                  concerns; and (iv) for analytical purposes.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  You authorize Neetizen and its service providers to perform
                  analytics on such Collected Data, to (i) improve, enhance,
                  support and operate the Websites or Mobile Application; and
                  (ii) compile statistical reports and record insights into
                  Usage patterns. You acknowledge that Neetizen Uses Collected
                  Data, as the case may be, for the aforementioned purposes.
                </Text>
                <Text style={{ marginTop: 10 }}>5) Testimonials.</Text>
                <Text style={{ marginTop: 5 }}>
                  We may post your testimonials/comments/reviews on our Websites
                  which may contain your Personal Data. Prior to posting the
                  testimonial, We will obtain your consent to post your name
                  along with the testimonial. If you want your testimonial
                  removed, please contact Us at support@Neetizen.com.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  You understand that We will not be liable to any person for
                  unauthorized publishing of testimonials.
                </Text>
                <Text style={{ marginTop: 10 }}>6) Communications.</Text>
                <Text style={{ marginTop: 5 }}>
                  When you have agreed to, We may Use your e-mail address,
                  collected as part of Collected Data, to send updating
                  communications about our products and services. Where you have
                  so requested, We will also send you marketing communications
                  about our third party partners. If you no longer wish to
                  receive these communications, you can opt out by following the
                  instructions contained in the e-mails you receive or by
                  contacting Us at support@Neetizen.com.
                </Text>
                <Text style={{ marginTop: 20 }}>
                  B) Data We process on your behalf: Service Data
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We only process Service Data as per our Customer’s
                  instructions. We are the processor and not the controller of
                  the Service Data. Service Data, as defined in the Terms, means
                  all electronic data, text, messages or other materials,
                  including Personal Data of Users and End-Users, submitted to
                  the Service(s) by our Customers through Customer’s Account in
                  connection with Customer’s Use of the Service(s), including
                  data collected under “Other Information” and “Mobile
                  Applications” below. Our Customers are the “controllers” of
                  that data and are responsible for compliance with the
                  Applicable data protection law. We work with our Customers to
                  help them provide notice to their customers concerning the
                  purpose for which Personal Data is processed by Neetizen.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We will take all steps reasonably necessary to ensure that the
                  Service Data is treated securely and in accordance with this
                  Notice.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We do not own, control or direct the Use of Service Data, and
                  in fact We are largely unaware of what information is being
                  stored on our platform and only access such information as
                  reasonably necessary to provide the Service(s) (including to
                  respond to support requests), as otherwise authorized by
                  Customers or as required by law. Unless We explicitly agree
                  otherwise in writing, you will not process sensitive personal
                  data (such as health data) on our platform.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  As the controller, it shall be your responsibility to inform
                  the End-Users about the processing, and, where required,
                  obtain necessary consent or authorization for any Personal
                  Data that is collected as part of the Service Data through
                  your Use of the Service(s). As the processors of Personal Data
                  on behalf of our Customers, We follow Customer’s instructions
                  with respect to the Service Data to the extent consistent with
                  the functionality of our Service(s). In doing so, We implement
                  technical, physical and administrative measures against
                  unauthorized processing of such information and against loss,
                  destruction of, or damage to, Personal Data.
                </Text>
                <Text style={{ marginTop: 10 }}>1) Other Information.</Text>
                <Text style={{ marginTop: 5 }}>
                  Where an User or End-User Uses the Service(s), We
                  automatically receive and record certain information of such
                  User. This information includes device model, IP address, the
                  type of browser being Used, Usage pattern through cookies and
                  browser settings, query logs and product Usage logs
                  (collectively referred to as “Other Information”).
                </Text>
                <Text style={{ marginTop: 10 }}>2) Mobile Applications.</Text>
                <Text style={{ marginTop: 5 }}>
                  When you download, install and Use the Mobile Applications, We
                  automatically collect information on the type of device you
                  Use, operating system version, and the device identifier (or
                  “UDID”).
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We Use Mobile analytics software to allow Us to better
                  understand the functionality of our Mobile Software on your
                  phone. This Software may record certain information such as
                  how often you Use the Application, the events that occur
                  within the Application, aggregated Usage, performance data,
                  and where the Application was downloaded from. We do not link
                  the information We store within the analytics software to any
                  personally identifiable information you submit within the
                  Mobile Applications.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  Subject to this Notice, We will Use such data to (i) provide
                  and manage Mobile Application; (ii) if you have opted in to
                  receiving push notifications, send you push notifications from
                  time-to-time in order to update you about any events or
                  promotions that We may be running and/or update you about new
                  features to our Service(s); (iii) send you promotional and
                  marketing communications (where you have requested Us to do
                  so). If you no longer wish to receive these types of
                  communications, you may turn them off at the device level.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  3) Improving and enhancing our Service(s).
                </Text>
                <Text style={{ marginTop: 5 }}>
                  You expressly authorize Us and the service providers We Use to
                  process the Service Data in our systems to (i) provide,
                  improve, enhance, support and operate the Service(s) and its
                  availability; (ii) develop new products and services; and
                  (iii) compile statistical reports and record insights into
                  Usage patterns.
                </Text>
                <Text style={{ marginTop: 35 }}>SINGLE SIGN-ON</Text>
                <Text style={{ marginTop: 10 }}>
                  You can log in to our Mobile App or Websites Using sign-in
                  services such as Google, Facebook Connect and LinkedIn. These
                  services will authenticate your identity and provide you the
                  option to share certain Personal Data with Us such as your
                  name and e-mail address. Services like Google, Facebook
                  Connect, Twitter, and LinkedIn give you the option to post
                  information about your activities on our Websites to your
                  profile page and to share information with others within your
                  network.
                </Text>
                <Text style={{ marginTop: 35 }}>SOCIAL MEDIA FEATURES</Text>
                <Text style={{ marginTop: 10 }}>
                  Our Mobile App and Website includes social media features,
                  such as the Facebook “Like” button, the “Share This” button or
                  interactive mini-programs. Where you interact with these
                  features, they may collect your IP address, which page you are
                  visiting on our Websites, and may set a cookie to enable the
                  feature to function properly. Social media features and
                  widgets are either hosted by a third party or hosted directly
                  on our Websites. Your interactions with these features are
                  governed by the privacy notice of the company providing them.
                </Text>
                <Text style={{ marginTop: 35 }}>SHARING OF PERSONAL DATA</Text>
                <Text style={{ marginTop: 10 }}>
                  We process Personal Data in the through third parties that We
                  may Use. We may also share your Personal Data as follows:
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With third party assisting Neetizen in providing
                  you the Service(s) (“Sub-Processors"). Our Sub-Processors are
                  given access to Customer’s Account and Service Data only as
                  reasonably necessary to provide the Service(s) and will be
                  subject to confidentiality obligations in their service
                  agreements;
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With third party service providers providing
                  services, such as research and analytics, marketing and data
                  enrichment or for them to reach out to you on our behalf;
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With third-party payment processors who process
                  your credit card and other payment information for Neetizen
                  but are otherwise not permitted to store, retain or Use such
                  information;
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With third party partners for the purpose of
                  assisting Us in onboarding you and providing any further
                  support needed to Use our Service(s);
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With sponsors of contests for which you register;
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With third-party social media networks, advertising
                  networks and Websites;
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} With affiliates within Neetizen and companies that
                  We will acquire in the future when they are made part of the
                  Neeten group for customer support, marketing, technical
                  operations, account management or organizational purposes and
                  to provide, enhance and improve the Service(s);
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} If We are involved in a merger, reorganization or
                  other fundamental corporate change with a third party, or
                  sell/buy a business unit to/from a third party, or if all or a
                  portion of our business, assets or stock are acquired by a
                  third party, with such third party including at the due
                  diligence stage. In accordance with Applicable laws, We will
                  Use reasonable efforts to notify you of any transfer of
                  Personal Data to unaffiliated third party.
                </Text>
                <Text style={{ marginTop: 15 }}>
                  All such transfers are covered by the service agreements with
                  the relevant recipients and We have taken appropriate
                  safeguards to ensure that your Personal Data will remain
                  protected in accordance with this Privacy Notice. Further
                  details can be provided upon request.
                </Text>
                <Text style={{ marginTop: 35 }}>
                  INFORMATION THAT WE OBTAIN FROM THIRD PARTIES
                </Text>
                <Text style={{ marginTop: 5 }}>
                  From time to time, We may receive personal information about
                  you from third party sources like databases and social media
                  but only where We have checked that these third parties either
                  have your consent or are otherwise legally permitted or
                  required to disclose your personal information to Us.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  The types of information We obtain from such third parties
                  include your name, e-mail address, postal address, location,
                  designation, telephone number and We Use the information We
                  receive from these third parties to maintain and improve
                  customer support experience, improve the accuracy of the
                  records We hold about you and for our sales and marketing
                  purposes.
                </Text>
                <Text style={{ marginTop: 35 }}>
                  HOW DOES NEETIZEN KEEP PERSONAL DATA SECURE?
                </Text>
                <Text style={{ marginTop: 5 }}>
                  We Use Appropriate technical and organizational measures to
                  protect the Personal Data that We collect and process. The
                  measures We Use are designed to provide a level of security
                  Appropriate to the risk of processing your Personal Data.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  While information security risks are always evolving, so are
                  the controls. The controls, so implemented, are periodically
                  reviewed as part of internal and external audits. If you have
                  questions about the security of your Personal Data, please
                  contact Us immediately as described in this Privacy Notice.
                </Text>
                <Text style={{ marginTop: 35 }}>SPECIFIC RIGHTS</Text>
                <Text style={{ marginTop: 10 }}>A) Collected Data</Text>
                <Text style={{ marginTop: 5 }}>
                  Similar to EEA or Switzerland citizens, you have the following
                  data protection rights regarding Collected Data:
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} If you wish to access, correct, update or request
                  deletion of your Personal Data, you can do so at any time by
                  contacting Us.
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} You can object to processing of your Personal Data,
                  ask Us to restrict processing of your Personal Data or request
                  portability of your Personal Data. Again, you can exercise
                  these rights by contacting Us.
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} You have the right to opt-out of marketing
                  communications We send you at any time. You can exercise this
                  right by clicking on the “unsubscribe” or “opt-out” link in
                  the marketing e-mails We may send you. To opt-out of other
                  forms of marketing (such as postal marketing or
                  telemarketing), please contact Us.
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} Similarly, if We have collected and process your
                  Personal Data with your consent, then you can withdraw your
                  consent at any time. Withdrawing your consent will not affect
                  the lawfulness of any processing We conducted prior to your
                  withdrawal, nor will it affect processing of your Personal
                  Data conducted in reliance on lawful processing grounds other
                  than consent.
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 15 }}>
                  {"\u2B24"} You have the right to complain to a data protection
                  authority about our collection and Use of your Personal Data.
                  For more information, please contact your local data
                  protection authority.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  If you seek access to, or wish to correct, update, modify or
                  delete Personal Data (hereinafter referred to as a “Request”)
                  which forms a part of Collected Data, please contact Us at
                  neetizenhelp@gmail.com. We respond to all requests We receive
                  from individuals wishing to exercise their data protection
                  rights within a reasonable timeframe in accordance with
                  Applicable data protection laws.
                </Text>
                <Text style={{ marginTop: 10 }}>B) Service Data</Text>
                <Text style={{ marginTop: 5 }}>
                  We acknowledge that you have the right to access your Personal
                  Data. Neetizen has no direct relationship with the individuals
                  whose Personal Data it processes. If you seek access to, or
                  wish to correct, update, modify or delete Personal Data
                  (hereinafter referred to as a “Request”) which is part of the
                  Service Data and processed by Us on behalf of our Customer or
                  if you are an End-User of one of our Customers and would no
                  longer like to be contacted by one of our Customers that Uses
                  our Service(s), you should direct your query to our Customer
                  i.e., the controller. If requested to remove data, We will
                  respond within a reasonable timeframe.
                </Text>
                <Text style={{ marginTop: 5 }}>
                  If you are a Customer of our Service(s) and wish to raise a
                  Request on behalf of your Users and End-Users in connection
                  with Service Data, you may raise a ticket on the support
                  portal of the relevant Service. Please note that if a Customer
                  has subscribed to more than one Service, a Request on a
                  particular Service support portal is specific to that Service
                  only and separate Requests need to be raised across other
                  relevant Service support portals.
                </Text>
                <Text style={{ marginTop: 35 }}>OTHER COMMUNICATIONS</Text>
                <Text style={{ marginTop: 10 }}>
                  If you are our User, We will send you announcements related to
                  the Service(s) on occasions when it is necessary to do so. For
                  instance, if our Service(s) is temporarily suspended for
                  maintenance, We might send you an e-mail. Generally, you may
                  not opt-out of communications which are not promotional in
                  nature. If you do not wish to receive them, you may deactivate
                  your Account.
                </Text>
                <Text style={{ marginTop: 35 }}>
                  RETENTION OF PERSONAL DATA
                </Text>
                <Text style={{ marginTop: 10 }}>
                  If you wish to request that We no longer Use your Collected
                  Data, please contact Us at support@Neetizen.com.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  Personal Data contained in the Service Data is retained and
                  deleted in accordance with the Terms.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  Notwithstanding the foregoing, We will retain Collected Data
                  and Service Data as necessary to comply with our legal
                  obligations, for litigation/defense purposes, maintain
                  accurate financial and other records, resolve disputes, and
                  enforce our agreements.
                </Text>
                <Text style={{ marginTop: 35 }}>
                  LINKS TO THIRD PARTY SITES
                </Text>
                <Text style={{ marginTop: 10 }}>
                  Our Mobile App or Websites contain links to other Websites
                  that are not owned or controlled by Neetizen. Please be aware
                  that We are not responsible for the privacy practices of such
                  other Websites or third parties. We encourage you to be aware
                  when you leave our App or Website and to read the privacy
                  policies of each and every App/ Website that collects Personal
                  Data.
                </Text>
                <Text style={{ marginTop: 35 }}>CHILDREN'S PERSONAL DATA</Text>
                <Text style={{ marginTop: 10 }}>
                  Neetizen does not knowingly collect any Personal Data from
                  children under the age of 16. If you are under the age of 16,
                  please do not submit any Personal Data through our Mobile App,
                  Websites or Service(s). We encourage parents and legal
                  guardians to monitor their children’s Internet Usage and to
                  help enforce this Notice by instructing their children never
                  to provide Personal Data through our Service(s) or Websites
                  without their permission. If you have reason to believe that a
                  child under the age of 16 has provided Personal Data to Us
                  through our Websites or Service(s), please contact Us and We
                  will endeavor to delete that information and terminate the
                  child's account from our databases.
                </Text>
                <Text style={{ marginTop: 35 }}>AMENDMENTS</Text>
                <Text style={{ marginTop: 10 }}>
                  Amendments to this Notice will be posted to this URL and will
                  be effective when posted. If we make any material changes, we
                  will notify you by means of a notice on this Website prior to
                  the change becoming effective and if you are our Customer, via
                  e-mail (specified in your Account). Provided We will not be
                  notifying you if We amend the Notice to make addition,
                  deletions or modifications to the list of cookies from time to
                  time to keep the list of cookies current and accurate. You
                  should frequently visit this Notice to check for amendments.
                  Your continued Use of our App or Websites or the Service(s)
                  following the posting of any amendment, modification, or
                  change to this Notice shall constitute your acceptance of the
                  amendments to this Notice. You can choose to discontinue Use
                  of the Websites or Service(s), if you do not accept the terms
                  of this Notice, or any modified version of this Notice.
                </Text>
                <Text style={{ marginTop: 35 }}>LEGAL DISCLOSURE</Text>
                <Text style={{ marginTop: 10 }}>
                  We, reserve the right to disclose your personal data contained
                  in Collected Data and Service Data as required by Applicable
                  law, in response to lawful requests by public authorities,
                  including meeting national security or law enforcement
                  requirements and when We believe that disclosure is necessary
                  to protect our rights and/or to comply with a judicial
                  proceeding, court order, or other legal process served on Us.
                  Collected Data and Service Data will also be shared for the
                  activities permitted under the Terms and this Notice.
                </Text>
                <Text style={{ marginTop: 10 }}>
                  In the event Neetizen goes through a business transition, such
                  as a merger or acquisition by another company, or sale of all
                  or a portion of its assets, Customer’s Account, Collected Data
                  and Service Data will likely be among the assets transferred.
                  A prominent notice will be displayed on our Websites to
                  intimate you of any such change in ownership or control and
                  Customers will be notified via an e-mail from
                  support@Neetizen.com.
                </Text>
                <Text style={{ marginTop: 35 }}>CONTACTING NEETIZEN</Text>
                <Text style={{ marginTop: 10 }}>
                  If you have any questions about this privacy notice or your
                  dealings with the Neetizen, you can contact Us at
                  support@Neetizen.com .
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 20,
  },
});

export default Privacy;
